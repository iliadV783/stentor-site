-- Allow public beta request form submissions through the anon key.
-- This keeps reads and updates protected by existing policies.

create policy if not exists "beta_requests_insert_public"
on public.beta_requests
for insert
to anon, authenticated
with check (true);
