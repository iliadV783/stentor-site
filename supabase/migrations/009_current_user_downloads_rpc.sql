-- Return downloads visible to the current user.
-- Public Lite builds are visible to authenticated users.
-- Pro builds are visible only when the user has an active license for the build platform.

create or replace function public.current_user_downloads()
returns table (
  id uuid,
  product text,
  platform text,
  version text,
  channel text,
  file_url text,
  checksum_sha256 text,
  release_notes text,
  is_public boolean,
  is_active boolean,
  created_at timestamptz,
  is_available boolean
)
language sql
stable
security definer
set search_path = public
as $$
  with user_licenses as (
    select l.enabled_platforms
    from public.licenses l
    left join public.beta_requests br on br.id = l.beta_request_id
    left join public.profiles p on p.id = l.user_id
    where auth.uid() is not null
      and l.status = 'active'
      and (
        l.user_id = auth.uid()
        or lower(coalesce(br.email, '')) = lower(coalesce(auth.jwt() ->> 'email', ''))
        or lower(coalesce(p.email, '')) = lower(coalesce(auth.jwt() ->> 'email', ''))
      )
  )
  select
    b.id,
    b.product,
    b.platform,
    b.version,
    b.channel,
    b.file_url,
    b.checksum_sha256,
    b.release_notes,
    b.is_public,
    b.is_active,
    b.created_at,
    (
      b.is_active
      and b.file_url is not null
      and (
        b.is_public
        or (
          b.product = 'pro'
          and exists (
            select 1
            from user_licenses ul
            where b.platform = any(ul.enabled_platforms)
          )
        )
      )
    ) as is_available
  from public.build_artifacts b
  where auth.uid() is not null
    and (
      b.is_public
      or (
        b.product = 'pro'
        and exists (
          select 1
          from user_licenses ul
          where b.platform = any(ul.enabled_platforms)
        )
      )
    )
  order by
    case b.product when 'pro' then 0 else 1 end,
    case b.platform when 'macos' then 0 when 'windows' then 1 when 'linux' then 2 else 3 end,
    b.created_at desc;
$$;

grant execute on function public.current_user_downloads() to authenticated;
