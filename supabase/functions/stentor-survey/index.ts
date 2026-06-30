const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-stentor-survey-key',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
};

const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const publicSiteUrl = (Deno.env.get('PUBLIC_SITE_URL') || 'https://www.stentor.live').replace(/\/$/, '');
const publishKey = Deno.env.get('STENTOR_SURVEY_PUBLISH_KEY') || '';

type JsonRecord = Record<string, unknown>;

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}

function cleanString(value: unknown, fallback = '') {
  return typeof value === 'string' && value.trim().length ? value.trim() : fallback;
}

function normalizeQuestions(value: unknown) {
  return Array.isArray(value) ? value : [];
}

async function supabaseFetch(path: string, init: RequestInit = {}) {
  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error('Supabase Edge Function is not configured. Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.');
  }

  const response = await fetch(`${supabaseUrl}${path}`, {
    ...init,
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
      ...(init.headers || {}),
    },
  });

  if (!response.ok) {
    let message = response.statusText || 'Supabase request failed.';
    try {
      const body = await response.json();
      message = body.message || body.error || body.hint || message;
    } catch {
      // keep fallback
    }
    throw new Error(message);
  }

  if (response.status === 204) return null;
  return response.json();
}

async function publishSurvey(payload: JsonRecord, request: Request) {
  if (publishKey) {
    const headerKey = request.headers.get('x-stentor-survey-key') || '';
    const bodyKey = cleanString(payload.publishKey);
    if (headerKey !== publishKey && bodyKey !== publishKey) {
      return json({ error: 'Invalid survey publish key.' }, 401);
    }
  }

  const surveyId = cleanString(payload.surveyId, crypto.randomUUID());
  const publicToken = cleanString(payload.publicToken, crypto.randomUUID().replaceAll('-', ''));
  const title = cleanString(payload.title, 'Questionario Stentor');
  const companyName = cleanString(payload.companyName);
  const venue = cleanString(payload.venue);
  const opensAt = cleanString(payload.opensAt) || null;
  const closesAt = cleanString(payload.closesAt) || null;
  const questions = normalizeQuestions(payload.questions);

  const rows = await supabaseFetch('/rest/v1/audience_surveys?on_conflict=survey_id', {
    method: 'POST',
    headers: {
      Prefer: 'resolution=merge-duplicates,return=representation',
    },
    body: JSON.stringify({
      survey_id: surveyId,
      public_token: publicToken,
      title,
      company_name: companyName || null,
      venue: venue || null,
      opens_at: opensAt,
      closes_at: closesAt,
      questions_json: questions,
      is_active: true,
      source_payload: payload,
      updated_at: new Date().toISOString(),
    }),
  });

  const row = Array.isArray(rows) ? rows[0] : rows;
  return json({
    id: row?.id || surveyId,
    surveyId,
    publicToken,
    publicURL: `${publicSiteUrl}/q?token=${encodeURIComponent(publicToken)}`,
    message: 'Questionario pubblicato',
  });
}

async function publicSurvey(token: string) {
  if (!token) return json({ error: 'Missing survey token.' }, 400);

  const rows = await supabaseFetch(`/rest/v1/audience_surveys?select=id,survey_id,public_token,title,company_name,venue,opens_at,closes_at,questions_json,is_active&public_token=eq.${encodeURIComponent(token)}&limit=1`, {
    method: 'GET',
    headers: { Prefer: 'return=representation' },
  });

  const survey = Array.isArray(rows) ? rows[0] : null;
  if (!survey) return json({ error: 'Questionario non trovato.' }, 404);

  const now = Date.now();
  const opens = survey.opens_at ? Date.parse(survey.opens_at) : null;
  const closes = survey.closes_at ? Date.parse(survey.closes_at) : null;
  const isOpen = survey.is_active !== false && (!opens || now >= opens) && (!closes || now <= closes);

  return json({
    surveyId: survey.survey_id,
    publicToken: survey.public_token,
    title: survey.title,
    companyName: survey.company_name,
    venue: survey.venue,
    opensAt: survey.opens_at,
    closesAt: survey.closes_at,
    questions: survey.questions_json || [],
    isOpen,
  });
}

async function submitResponse(payload: JsonRecord, request: Request) {
  const publicToken = cleanString(payload.publicToken || payload.token);
  if (!publicToken) return json({ error: 'Missing survey token.' }, 400);

  const surveyRows = await supabaseFetch(`/rest/v1/audience_surveys?select=id,public_token,opens_at,closes_at,is_active&public_token=eq.${encodeURIComponent(publicToken)}&limit=1`, {
    method: 'GET',
  });
  const survey = Array.isArray(surveyRows) ? surveyRows[0] : null;
  if (!survey) return json({ error: 'Questionario non trovato.' }, 404);

  const now = Date.now();
  const opens = survey.opens_at ? Date.parse(survey.opens_at) : null;
  const closes = survey.closes_at ? Date.parse(survey.closes_at) : null;
  const isOpen = survey.is_active !== false && (!opens || now >= opens) && (!closes || now <= closes);
  if (!isOpen) return json({ error: 'La finestra di compilazione è chiusa.' }, 403);

  const answers = typeof payload.answers === 'object' && payload.answers !== null ? payload.answers : {};
  const rows = await supabaseFetch('/rest/v1/audience_survey_responses', {
    method: 'POST',
    body: JSON.stringify({
      survey_id: survey.id,
      survey_public_token: publicToken,
      answers_json: answers,
      service_used: cleanString(payload.serviceUsed) || null,
      language: cleanString(payload.language) || null,
      client_hash: cleanString(payload.clientHash) || null,
      source_payload: {
        submittedFrom: 'stentor.live',
        userAgentPresent: Boolean(request.headers.get('user-agent')),
      },
    }),
  });

  const row = Array.isArray(rows) ? rows[0] : rows;
  return json({ id: row?.id, message: 'Risposta ricevuta' });
}

async function responses(surveyId: string, token: string) {
  if (!surveyId && !token) return json({ error: 'Missing surveyId or token.' }, 400);

  const surveyFilter = surveyId
    ? `survey_id=eq.${encodeURIComponent(surveyId)}`
    : `public_token=eq.${encodeURIComponent(token)}`;

  const surveyRows = await supabaseFetch(`/rest/v1/audience_surveys?select=id,survey_id,public_token,title&${surveyFilter}&limit=1`, {
    method: 'GET',
  });
  const survey = Array.isArray(surveyRows) ? surveyRows[0] : null;
  if (!survey) return json({ error: 'Questionario non trovato.' }, 404);

  const rows = await supabaseFetch(`/rest/v1/audience_survey_responses?select=id,submitted_at,answers_json,service_used,language&survey_id=eq.${encodeURIComponent(survey.id)}&order=submitted_at.desc`, {
    method: 'GET',
  });

  return json({
    surveyId: survey.survey_id,
    publicToken: survey.public_token,
    responses: Array.isArray(rows) ? rows.map((row) => ({
      id: row.id,
      submittedAt: row.submitted_at,
      answers: row.answers_json || {},
      serviceUsed: row.service_used,
      language: row.language,
    })) : [],
  });
}

Deno.serve(async (request) => {
  if (request.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    const url = new URL(request.url);

    if (request.method === 'GET') {
      const action = url.searchParams.get('action') || 'publicSurvey';
      if (action === 'responses') {
        return await responses(url.searchParams.get('surveyId') || '', url.searchParams.get('token') || '');
      }
      return await publicSurvey(url.searchParams.get('token') || '');
    }

    if (request.method !== 'POST') return json({ error: 'Method not allowed.' }, 405);

    const payload = await request.json().catch(() => ({}));
    const action = cleanString(payload.action, 'submitResponse');

    if (action === 'publishSurvey') return await publishSurvey(payload, request);
    if (action === 'submitResponse') return await submitResponse(payload, request);
    if (action === 'responses') return await responses(cleanString(payload.surveyId), cleanString(payload.token || payload.publicToken));

    return json({ error: `Unsupported action: ${action}` }, 400);
  } catch (error) {
    return json({ error: error instanceof Error ? error.message : 'Unexpected survey backend error.' }, 500);
  }
});
