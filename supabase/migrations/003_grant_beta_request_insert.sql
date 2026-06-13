-- Grant API roles permission to insert beta requests.
-- RLS policies decide which rows can be inserted/read/updated.

grant usage on schema public to anon, authenticated;
grant insert on table public.beta_requests to anon, authenticated;
