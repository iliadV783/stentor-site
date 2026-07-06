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

function accountTypeLabel(value: string | null | undefined): string {
  return value === "organization" ? "Organizzazione" : "Individuale";
}

function emptyFallback(value: unknown): string {
  const text = String(value ?? "").trim();
  return text || "—";
}

function row(label: string, value: unknown): string {
  return `
    <tr>
      <td style="padding: 13px 0; width: 170px; color: #8b8b92; font-size: 13px; border-bottom: 1px solid rgba(255,255,255,0.08);">${escapeHtml(label)}</td>
      <td style="padding: 13px 0; color: #f5f5f7; font-size: 14px; border-bottom: 1px solid rgba(255,255,255,0.08);">${escapeHtml(emptyFallback(value))}</td>
    </tr>
  `;
}

function emailShell(params: {
  eyebrow: string;
  title: string;
  preview: string;
  body: string;
}) {
  return `
    <!doctype html>
    <html lang="it">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>${escapeHtml(params.title)}</title>
      </head>
      <body style="margin: 0; padding: 0; background: #050505; color: #f5f5f7; font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;">
        <div style="display: none; max-height: 0; overflow: hidden; opacity: 0; color: transparent;">${escapeHtml(params.preview)}</div>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: #050505; min-width: 100%;">
          <tr>
            <td align="center" style="padding: 36px 18px; background-image: radial-gradient(rgba(239,68,68,0.22) 1px, transparent 1px); background-size: 28px 28px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 680px; background: #0b0b0c; border: 1px solid rgba(255,255,255,0.10); border-radius: 24px; overflow: hidden; box-shadow: 0 24px 80px rgba(127,29,29,0.18);">
                <tr>
                  <td style="padding: 30px 34px 22px 34px; border-bottom: 1px solid rgba(255,255,255,0.08);">
                    <div style="font-size: 12px; line-height: 1; letter-spacing: 0.18em; text-transform: uppercase; color: #f87171; font-weight: 700; margin-bottom: 18px;">${escapeHtml(params.eyebrow)}</div>
                    <div style="font-size: 26px; line-height: 1.08; letter-spacing: -0.045em; color: #ffffff; font-weight: 760;">${escapeHtml(params.title)}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 30px 34px 34px 34px;">
                    ${params.body}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 22px 34px 30px 34px; border-top: 1px solid rgba(255,255,255,0.08); color: #7b7b82; font-size: 12px; line-height: 1.6;">
                    <div style="font-weight: 700; color: #ffffff; letter-spacing: -0.03em; font-size: 15px; margin-bottom: 6px;">STÉNTOR</div>
                    <div>Comunicazione automatica generata dal sistema di gestione della beta privata.</div>
                    <div>Progetto universitario. Si prega di non rispondere a questo messaggio se non espressamente richiesto.</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
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
    const accountType = accountTypeLabel(payload.account_type);

    const userHtml = emailShell({
      eyebrow: "Beta privata",
      title: "Richiesta beta Sténtor ricevuta",
      preview: "La richiesta di accesso alla beta privata di Sténtor è stata acquisita correttamente.",
      body: `
        <div style="font-size: 15px; line-height: 1.75; color: #d4d4d8;">
          <p style="margin: 0 0 18px 0;">Gentile ${escapeHtml(name)},</p>
          <p style="margin: 0 0 18px 0;">la informiamo che la Sua richiesta di accesso alla beta privata di <strong style="color: #ffffff;">Sténtor</strong> è stata acquisita correttamente.</p>
          <p style="margin: 0 0 18px 0;">Sténtor è un progetto universitario in fase di sviluppo e sperimentazione. Per questo motivo, ogni richiesta viene esaminata manualmente prima dell’eventuale abilitazione della licenza di prova, del download e delle istruzioni di attivazione.</p>
          <div style="margin: 26px 0; padding: 18px 20px; border: 1px solid rgba(248,113,113,0.28); background: rgba(239,68,68,0.08); border-radius: 16px; color: #f4f4f5;">
            <div style="font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: #f87171; font-weight: 700; margin-bottom: 8px;">Stato richiesta</div>
            <div style="font-size: 18px; line-height: 1.25; font-weight: 700; color: #ffffff;">In attesa di revisione manuale</div>
          </div>
          <p style="margin: 0 0 18px 0;">Non è richiesta alcuna ulteriore azione da parte Sua in questa fase. Riceverà una comunicazione successiva qualora la richiesta venga approvata o siano necessarie informazioni integrative.</p>
          <p style="margin: 26px 0 0 0;">Cordiali saluti,<br /><strong style="color: #ffffff;">Il team Sténtor</strong></p>
        </div>
      `,
    });

    const adminHtml = emailShell({
      eyebrow: "Coda beta",
      title: "Nuova richiesta beta Sténtor",
      preview: `Nuova richiesta beta da ${name} (${email}).`,
      body: `
        <div style="font-size: 15px; line-height: 1.7; color: #d4d4d8;">
          <p style="margin: 0 0 22px 0;">È stata registrata una nuova richiesta di accesso alla beta privata. I dati trasmessi dal form sono riepilogati di seguito.</p>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
            ${row("Nome", name)}
            ${row("Email", email)}
            ${row("Tipo account", accountType)}
            ${row("Organizzazione", payload.organization_name)}
            ${row("Ruolo", payload.role)}
            ${row("Paese", payload.country)}
            ${row("Uso previsto", payload.expected_use)}
            ${row("Piattaforme", platforms.join(", "))}
            ${row("Utenti previsti", payload.requested_seats ?? 1)}
            ${row("ID richiesta", payload.id)}
          </table>
          <div style="margin-top: 24px;">
            <div style="font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: #8b8b92; font-weight: 700; margin-bottom: 8px;">Messaggio</div>
            <div style="white-space: pre-wrap; color: #f5f5f7; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.035); border-radius: 16px; padding: 16px 18px;">${escapeHtml(emptyFallback(payload.message))}</div>
          </div>
        </div>
      `,
    });

    await sendMail(email, "Richiesta beta Sténtor ricevuta", userHtml);
    await sendMail(ADMIN_EMAIL, "Nuova richiesta beta Sténtor", adminHtml, email);

    return Response.json({ ok: true }, { headers: corsHeaders });
  } catch (error) {
    console.error(error);
    return Response.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500, headers: corsHeaders });
  }
});
