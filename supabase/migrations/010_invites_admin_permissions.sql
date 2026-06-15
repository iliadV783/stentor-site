-- Admin permissions for Stentor invite management.
-- Fixes /admin invite revoke action with Supabase REST when RLS is enabled.

grant usage on schema public to authenticated;
grant select, update on table public.invites to authenticated;

alter table public.invites enable row level security;

drop policy if exists "invites_select_admin" on public.invites;
create policy "invites_select_admin"
on public.invites
for select
using (public.current_user_is_admin());

drop policy if exists "invites_update_admin" on public.invites;
create policy "invites_update_admin"
on public.invites
for update
using (public.current_user_is_admin())
with check (public.current_user_is_admin());
