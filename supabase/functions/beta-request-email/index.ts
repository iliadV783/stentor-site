import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const MAIL_API_TOKEN = Deno.env.get("RESEND_API_KEY");
const ADMIN_EMAIL = Deno.env.get("ADMIN_EMAIL") ?? "leonardo.mancini@unito.it";
const FROM_EMAIL = Deno.env.get("FROM_EMAIL") ?? "Sténtor <onboarding@resend.dev>";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

type BetaRequestPayload = {
  id?: string;
  email?: string | null;
  full_name?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  organization_name?: string | null;
  role?: string | null;
  country?: string | null;
  expected_use?: string | null;
  requested_platforms?: string[] | null;
  requested_seats?: number | null;
  message?: string | null;
  account_type?: string | null;
};

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getName(payload: BetaRequestPayload): string {
  const fullName = payload.full_name?.trim();
  if (fullName) return fullName;
  const splitName = [payload.first_name, payload.last_name].filter(Boolean).join(" ").trim();
  return splitName || "utente";
}

async function sendMail(to: string, subject: string, html: string, replyTo?: string) {
  if (!MAIL_API_TOKEN) throw new Error("RESEND_API_KEY is not configured");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${MAIL_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [to],
      subject,
      html,
      reply_to: replyTo,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Resend error ${response.status}: ${detail}`);
  }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return Response.json({ error: "Method not allowed" }, { status: 405, headers: corsHeaders });

  try {
    const payload = (await req.json()) as BetaRequestPayload;
    const email = payload.email?.trim();
    if (!email) return Response.json({ error: "Missing email" }, { status: 400, headers: corsHeaders });

    const name = getName(payload);
    const platforms = payload.requested_platforms ?? [];

    const userHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111111;">
        <h2>Richiesta beta Sténtor ricevuta</h2>
        <p>Ciao ${escapeHtml(name)},</p>
        <p>abbiamo ricevuto la tua richiesta di accesso alla beta privata di Sténtor.</p>
        <p>La richiesta sarà revisionata manualmente. Dopo l’approvazione, l’area account mostrerà licenza, download e istruzioni di attivazione.</p>
        <p style="margin-top: 24px;">Grazie,<br />Sténtor</p>
      </div>
    `;

    const adminHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111111;">
        <h2>Nuova richiesta beta Sténtor</h2>
        <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Tipo account:</strong> ${escapeHtml(payload.account_type)}</p>
        <p><strong>Organizzazione:</strong> ${escapeHtml(payload.organization_name)}</p>
        <p><strong>Ruolo:</strong> ${escapeHtml(payload.role)}</p>
        <p><strong>Paese:</strong> ${escapeHtml(payload.country)}</p>
        <p><strong>Uso previsto:</strong> ${escapeHtml(payload.expected_use)}</p>
        <p><strong>Piattaforme:</strong> ${escapeHtml(platforms.join(", "))}</p>
        <p><strong>Utenti previsti:</strong> ${escapeHtml(payload.requested_seats ?? 1)}</p>
        <p><strong>Messaggio:</strong><br />${escapeHtml(payload.message)}</p>
        <p><strong>ID richiesta:</strong> ${escapeHtml(payload.id)}</p>
      </div>
    `;

    await sendMail(email, "Richiesta beta Sténtor ricevuta", userHtml);
    await sendMail(ADMIN_EMAIL, "Nuova richiesta beta Sténtor", adminHtml, email);

    return Response.json({ ok: true }, { headers: corsHeaders });
  } catch (error) {
    console.error(error);
    return Response.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500, headers: corsHeaders });
  }
});
