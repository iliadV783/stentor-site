-- Create one beta license from an approved beta request.
-- Requires the caller to be an admin profile.

create or replace function public.create_beta_license(request_id uuid)
returns public.licenses
language plpgsql
security definer
set search_path = public
as $$
declare
  request_row public.beta_requests%rowtype;
  existing_license public.licenses%rowtype;
  new_license public.licenses%rowtype;
begin
  if not public.current_user_is_admin() then
    raise exception 'Only admins can create licenses';
  end if;

  select * into request_row
  from public.beta_requests
  where id = request_id;

  if not found then
    raise exception 'Beta request not found';
  end if;

  if request_row.status <> 'approved' then
    raise exception 'Approve the beta request before creating a license';
  end if;

  select * into existing_license
  from public.licenses
  where beta_request_id = request_id
  limit 1;

  if found then
    return existing_license;
  end if;

  insert into public.licenses (
    beta_request_id,
    plan,
    status,
    max_activations,
    enabled_platforms,
    internal_note
  ) values (
    request_id,
    'beta',
    'active',
    greatest(coalesce(request_row.requested_seats, 1), 1),
    case
      when coalesce(array_length(request_row.requested_platforms, 1), 0) > 0 then request_row.requested_platforms
      else array['macos','windows','linux']::text[]
    end,
    'Created from admin beta request.'
  )
  returning * into new_license;

  return new_license;
end;
$$;

grant execute on function public.create_beta_license(uuid) to authenticated;
