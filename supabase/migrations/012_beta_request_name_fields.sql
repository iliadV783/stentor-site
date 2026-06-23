-- Store requester's first and last name separately while keeping full_name for compatibility.

alter table public.beta_requests
add column if not exists first_name text,
add column if not exists last_name text;

create index if not exists beta_requests_last_name_idx on public.beta_requests(last_name, first_name);
