-- Stentor private beta schema
-- Apply this in Supabase SQL editor or through the Supabase CLI.

create extension if not exists pgcrypto;

-- Organizations using Stentor.
create table if not exists public.organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  website text,
  country text,
  kind text check (kind in ('artist','company','theatre','festival','school','institution','other')) default 'other',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- User profile linked to Supabase Auth users.
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  full_name text,
  organization_id uuid references public.organizations(id) on delete set null,
  role text,
  is_admin boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Public/private beta request.
create table if not exists public.beta_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  email text not null,
  full_name text,
  organization_name text,
  role text,
  country text,
  expected_use text,
  requested_platforms text[] not null default array[]::text[],
  requested_seats integer not null default 1 check (requested_seats > 0),
  message text,
  status text not null default 'pending' check (status in ('pending','approved','rejected','archived')),
  internal_note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Licenses created after approval.
create table if not exists public.licenses (
  id uuid primary key default gen_random_uuid(),
  license_key text not null unique default encode(gen_random_bytes(24), 'hex'),
  user_id uuid references auth.users(id) on delete set null,
  organization_id uuid references public.organizations(id) on delete set null,
  beta_request_id uuid references public.beta_requests(id) on delete set null,
  plan text not null default 'beta' check (plan in ('beta','trial','annual','educational','institutional','manual')),
  status text not null default 'active' check (status in ('active','expired','revoked')),
  starts_at timestamptz not null default now(),
  expires_at timestamptz,
  max_activations integer not null default 1 check (max_activations > 0),
  enabled_platforms text[] not null default array['macos','windows','linux'],
  internal_note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Device activations from Stentor Pro.
create table if not exists public.license_activations (
  id uuid primary key default gen_random_uuid(),
  license_id uuid not null references public.licenses(id) on delete cascade,
  user_id uuid references auth.users(id) on delete set null,
  platform text not null check (platform in ('macos','windows','linux')),
  device_label text,
  device_fingerprint_hash text not null,
  app_version text,
  activated_at timestamptz not null default now(),
  last_seen_at timestamptz,
  revoked_at timestamptz,
  unique (license_id, device_fingerprint_hash)
);

-- Build artifacts for Lite and Pro downloads.
create table if not exists public.build_artifacts (
  id uuid primary key default gen_random_uuid(),
  product text not null check (product in ('lite','pro')),
  platform text not null check (platform in ('macos','windows','linux')),
  version text not null,
  channel text not null default 'beta' check (channel in ('alpha','beta','stable')),
  file_url text,
  checksum_sha256 text,
  release_notes text,
  is_public boolean not null default false,
  is_active boolean not null default false,
  created_at timestamptz not null default now(),
  unique (product, platform, version, channel)
);

create index if not exists beta_requests_status_created_at_idx on public.beta_requests(status, created_at desc);
create index if not exists licenses_user_id_idx on public.licenses(user_id);
create index if not exists licenses_status_idx on public.licenses(status);
create index if not exists license_activations_license_id_idx on public.license_activations(license_id);
create index if not exists build_artifacts_product_platform_idx on public.build_artifacts(product, platform, is_active);

-- Helper: current user is admin.
create or replace function public.current_user_is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select coalesce((select is_admin from public.profiles where id = auth.uid()), false);
$$;

alter table public.organizations enable row level security;
alter table public.profiles enable row level security;
alter table public.beta_requests enable row level security;
alter table public.licenses enable row level security;
alter table public.license_activations enable row level security;
alter table public.build_artifacts enable row level security;

-- Profiles
create policy "profiles_select_own_or_admin" on public.profiles for select using (id = auth.uid() or public.current_user_is_admin());
create policy "profiles_update_own_or_admin" on public.profiles for update using (id = auth.uid() or public.current_user_is_admin());

-- Beta requests
create policy "beta_requests_insert_authenticated" on public.beta_requests for insert with check (auth.role() = 'authenticated');
create policy "beta_requests_select_own_or_admin" on public.beta_requests for select using (user_id = auth.uid() or public.current_user_is_admin());
create policy "beta_requests_update_admin" on public.beta_requests for update using (public.current_user_is_admin());

-- Organizations
create policy "organizations_select_related_or_admin" on public.organizations for select using (public.current_user_is_admin() or id in (select organization_id from public.profiles where profiles.id = auth.uid()));
create policy "organizations_write_admin" on public.organizations for all using (public.current_user_is_admin()) with check (public.current_user_is_admin());

-- Licenses
create policy "licenses_select_own_or_admin" on public.licenses for select using (user_id = auth.uid() or public.current_user_is_admin());
create policy "licenses_write_admin" on public.licenses for all using (public.current_user_is_admin()) with check (public.current_user_is_admin());

-- Activations
create policy "license_activations_select_own_or_admin" on public.license_activations for select using (user_id = auth.uid() or public.current_user_is_admin());
create policy "license_activations_insert_authenticated" on public.license_activations for insert with check (auth.role() = 'authenticated');
create policy "license_activations_update_admin" on public.license_activations for update using (public.current_user_is_admin());

-- Builds: public Lite can be visible to everyone; Pro/private builds require admin for now.
create policy "build_artifacts_select_public_or_admin" on public.build_artifacts for select using (is_public = true or public.current_user_is_admin());
create policy "build_artifacts_write_admin" on public.build_artifacts for all using (public.current_user_is_admin()) with check (public.current_user_is_admin());
