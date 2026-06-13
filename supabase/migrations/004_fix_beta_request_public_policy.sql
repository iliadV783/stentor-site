-- Fix public beta request insert policy.
-- Run this after the initial private beta schema.

alter table public.beta_requests enable row level security;

drop policy if exists "beta_requests_insert_public" on public.beta_requests;
drop policy if exists "beta_requests_insert_authenticated" on public.beta_requests;

create policy "beta_requests_insert_public"
on public.beta_requests
for insert
to anon, authenticated
with check (true);

grant usage on schema public to anon, authenticated;
grant insert on table public.beta_requests to anon, authenticated;
