-- Stentor audience surveys schema
-- Stores deferred post-show questionnaires and anonymous audience responses.

create extension if not exists pgcrypto;

create table if not exists public.audience_surveys (
  id uuid primary key default gen_random_uuid(),
  survey_id text not null unique,
  public_token text not null unique,
  title text,
  company_name text,
  venue text,
  opens_at timestamptz,
  closes_at timestamptz,
  questions_json jsonb not null default '[]'::jsonb,
  is_active boolean not null default true,
  source_payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.audience_survey_responses (
  id uuid primary key default gen_random_uuid(),
  survey_id uuid not null references public.audience_surveys(id) on delete cascade,
  survey_public_token text not null,
  submitted_at timestamptz not null default now(),
  answers_json jsonb not null default '{}'::jsonb,
  service_used text,
  language text,
  client_hash text,
  source_payload jsonb not null default '{}'::jsonb
);

create index if not exists audience_surveys_public_token_idx on public.audience_surveys(public_token);
create index if not exists audience_surveys_survey_id_idx on public.audience_surveys(survey_id);
create index if not exists audience_surveys_closes_at_idx on public.audience_surveys(closes_at);
create index if not exists audience_survey_responses_survey_id_idx on public.audience_survey_responses(survey_id);
create index if not exists audience_survey_responses_submitted_at_idx on public.audience_survey_responses(submitted_at desc);

create or replace view public.audience_surveys_admin_view as
select
  s.id,
  s.survey_id,
  s.public_token,
  s.title,
  s.company_name,
  s.venue,
  s.opens_at,
  s.closes_at,
  s.questions_json,
  s.is_active,
  s.source_payload,
  s.created_at,
  s.updated_at,
  count(r.id)::integer as responses_count,
  max(r.submitted_at) as last_response_at
from public.audience_surveys s
left join public.audience_survey_responses r on r.survey_id = s.id
group by s.id;

alter table public.audience_surveys enable row level security;
alter table public.audience_survey_responses enable row level security;

-- Admin users can inspect and manage survey data from stentor.live/admin/surveys.
do $$
begin
  if not exists (
    select 1 from pg_policies where schemaname = 'public' and tablename = 'audience_surveys' and policyname = 'audience_surveys_admin_all'
  ) then
    create policy "audience_surveys_admin_all" on public.audience_surveys
      for all using (public.current_user_is_admin()) with check (public.current_user_is_admin());
  end if;

  if not exists (
    select 1 from pg_policies where schemaname = 'public' and tablename = 'audience_survey_responses' and policyname = 'audience_survey_responses_admin_all'
  ) then
    create policy "audience_survey_responses_admin_all" on public.audience_survey_responses
      for all using (public.current_user_is_admin()) with check (public.current_user_is_admin());
  end if;
end $$;
