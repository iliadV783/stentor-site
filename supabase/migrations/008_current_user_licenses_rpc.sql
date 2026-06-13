-- Return licenses visible to the currently signed-in user.
-- A license is visible when it is directly linked to auth.uid()
-- or when its beta request email matches the signed-in user's email.

create or replace function public.current_user_licenses()
returns table (
  id uuid,
  license_key text,
  plan text,
  status text,
  starts_at timestamptz,
  expires_at timestamptz,
  max_activations integer,
  enabled_platforms text[],
  created_at timestamptz,
  beta_request_id uuid,
  owner_email text,
  owner_name text,
  organization_name text
)
language sql
stable
security definer
set search_path = public
as $$
  select
    l.id,
    l.license_key,
    l.plan,
    l.status,
    l.starts_at,
    l.expires_at,
    l.max_activations,
    l.enabled_platforms,
    l.created_at,
    l.beta_request_id,
    coalesce(br.email, p.email) as owner_email,
    coalesce(br.full_name, p.full_name) as owner_name,
    coalesce(br.organization_name, o.name) as organization_name
  from public.licenses l
  left join public.beta_requests br on br.id = l.beta_request_id
  left join public.profiles p on p.id = l.user_id
  left join public.organizations o on o.id = l.organization_id
  where auth.uid() is not null
    and (
      l.user_id = auth.uid()
      or lower(coalesce(br.email, '')) = lower(coalesce(auth.jwt() ->> 'email', ''))
      or lower(coalesce(p.email, '')) = lower(coalesce(auth.jwt() ->> 'email', ''))
    )
  order by l.created_at desc;
$$;

grant execute on function public.current_user_licenses() to authenticated;
