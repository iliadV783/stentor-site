-- Distinguish personal and institutional access requests.
-- Individual requests create a personal account/licence flow.
-- Organization requests create or link an organization and enable multi-user administration later.

alter table public.beta_requests
add column if not exists account_type text not null default 'organization'
check (account_type in ('individual', 'organization'));

create index if not exists beta_requests_account_type_idx on public.beta_requests(account_type, created_at desc);
