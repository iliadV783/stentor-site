-- Cloud project index for the account dashboard.
-- Sténtor apps can write one lightweight manifest row per cloud project.
-- The account page reads this index instead of scanning remote storage folders.

create table if not exists public.cloud_projects (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  organization_id uuid references public.organizations(id) on delete set null,
  license_id uuid references public.licenses(id) on delete set null,
  project_uid text not null,
  name text not null,
  provider text not null default 'stentor-cloud',
  sync_status text not null default 'synced' check (sync_status in ('synced','local_changes','remote_changes','conflict','archived')),
  size_bytes bigint not null default 0 check (size_bytes >= 0),
  cue_count integer not null default 0 check (cue_count >= 0),
  translation_count integer not null default 0 check (translation_count >= 0),
  audio_count integer not null default 0 check (audio_count >= 0),
  questionnaire_count integer not null default 0 check (questionnaire_count >= 0),
  last_modified_by text,
  last_synced_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, project_uid)
);

create index if not exists cloud_projects_user_updated_idx on public.cloud_projects(user_id, updated_at desc);
create index if not exists cloud_projects_organization_updated_idx on public.cloud_projects(organization_id, updated_at desc);
create index if not exists cloud_projects_license_idx on public.cloud_projects(license_id);

alter table public.cloud_projects enable row level security;

create policy "cloud_projects_select_own_org_or_admin" on public.cloud_projects
for select
using (
  user_id = auth.uid()
  or public.current_user_is_admin()
  or organization_id in (
    select profiles.organization_id
    from public.profiles
    where profiles.id = auth.uid()
      and profiles.organization_id is not null
  )
);

create policy "cloud_projects_insert_own_or_admin" on public.cloud_projects
for insert
with check (
  user_id = auth.uid()
  or public.current_user_is_admin()
);

create policy "cloud_projects_update_own_or_admin" on public.cloud_projects
for update
using (
  user_id = auth.uid()
  or public.current_user_is_admin()
)
with check (
  user_id = auth.uid()
  or public.current_user_is_admin()
);

create policy "cloud_projects_delete_own_or_admin" on public.cloud_projects
for delete
using (
  user_id = auth.uid()
  or public.current_user_is_admin()
);

create or replace function public.current_user_cloud_projects()
returns table (
  id uuid,
  project_uid text,
  name text,
  provider text,
  sync_status text,
  size_bytes bigint,
  cue_count integer,
  translation_count integer,
  audio_count integer,
  questionnaire_count integer,
  last_modified_by text,
  last_synced_at timestamptz,
  created_at timestamptz,
  updated_at timestamptz,
  organization_name text
)
language sql
stable
security definer
set search_path = public
as $$
  select
    cp.id,
    cp.project_uid,
    cp.name,
    cp.provider,
    cp.sync_status,
    cp.size_bytes,
    cp.cue_count,
    cp.translation_count,
    cp.audio_count,
    cp.questionnaire_count,
    cp.last_modified_by,
    cp.last_synced_at,
    cp.created_at,
    cp.updated_at,
    o.name as organization_name
  from public.cloud_projects cp
  left join public.organizations o on o.id = cp.organization_id
  where auth.uid() is not null
    and (
      cp.user_id = auth.uid()
      or public.current_user_is_admin()
      or cp.organization_id in (
        select profiles.organization_id
        from public.profiles
        where profiles.id = auth.uid()
          and profiles.organization_id is not null
      )
    )
  order by coalesce(cp.last_synced_at, cp.updated_at, cp.created_at) desc;
$$;

grant execute on function public.current_user_cloud_projects() to authenticated;
