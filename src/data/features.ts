/**
 * Features page content. Components under src/components/sections/features/
 * read from this file. Rich text (with inline <em>, <code>, etc.) is stored
 * as HTML strings and rendered via set:html.
 */

// ─── Hero ─────────────────────────────────────────────────────────────────
export const hero = {
  eyebrow: "The Lambda platform",
  title: "A backend you can read,<br/>and a runtime you can trust.",
  description:
    "Six primitives — typed schemas, edge functions, observability, auth, queues, and migrations — wired together by the same team. No glue code, no agents, no surprises in the on-call rotation.",
};

// ─── Showcase rows (alternating side-by-side) ─────────────────────────────
// Each row pairs a copy block with a custom illustration. Visuals stay in
// the .astro template; this file holds copy + the trace/region demo data.
type ShowcaseRow = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  cta: { href: string; label: string };
  // Used by Showcase.astro to pick which illustration to render on the right
  illustration: "schemas" | "trace" | "regions";
};

export const showcase: ShowcaseRow[] = [
  {
    number: "01",
    eyebrow: "01 — Schemas",
    title: "One model. Four typed clients. Zero contract drift.",
    description:
      "Define your data once in Lambda's typed schema language. We compile it to a Postgres migration, an OpenAPI spec, and fully-typed SDKs for TypeScript, Go, Python, and Swift — every time you save.",
    bullets: [
      "Postgres migration auto-generated and reviewed in PRs",
      "SDK versions pinned per environment",
      "Breaking changes flagged before merge",
    ],
    cta: { href: "/docs", label: "Read the schema docs" },
    illustration: "schemas",
  },
  {
    number: "02",
    eyebrow: "02 — Observability",
    title: "Every request, traced. Every span, free.",
    description:
      "Logs, metrics, and distributed traces are first-class citizens, not a $400/seat add-on. Click a slow request in the dashboard and see the exact SQL query, the function it called, and the third-party API that made it slow.",
    bullets: [
      "OpenTelemetry-compatible — export to Datadog, Honeycomb, or your own Jaeger",
      "100% trace sampling on Pro · 30-day retention",
      "Alerts on P95, error rate, and queue depth",
    ],
    cta: { href: "/docs", label: "Explore observability" },
    illustration: "trace",
  },
  {
    number: "03",
    eyebrow: "03 — Runtime",
    title: "Run your code where your users are.",
    // {code:...} = inline mono-styled fragment
    description:
      'Lambda\'s edge runtime ships your functions to 38 regions. Cold starts under 30ms, isolates instead of containers, and a single deploy command — <span class="font-mono text-text">lambda deploy</span> — that you\'ll commit to muscle memory.',
    bullets: [
      "38 regions, picked automatically per request",
      "Atomic deploys — instant rollback, every revision",
      "Local emulator that actually matches production",
    ],
    cta: { href: "/docs", label: "Read the runtime docs" },
    illustration: "regions",
  },
];

// Demo data for the trace illustration (row 02 / Observability)
export const traceRows = [
  { name: "POST /v1/checkout", lvl: "200", lvlColor: "ok" as const, barColor: "amber" as const, left: 0, width: 100, ms: "312ms" },
  { name: "└ auth.verify_session", barColor: "gray" as const, left: 1, width: 4, ms: "12ms" },
  { name: "└ db.customers.find", barColor: "blue" as const, left: 6, width: 5, ms: "14ms" },
  { name: "└ fn.calc_taxes", barColor: "green" as const, left: 12, width: 9, ms: "28ms" },
  { name: "└ http.stripe.charges", lvl: "slow", lvlColor: "amber" as const, barColor: "amber" as const, left: 22, width: 60, ms: "189ms" },
  { name: "└ db.subscriptions.insert", barColor: "blue" as const, left: 83, width: 6, ms: "19ms" },
  { name: "└ queue.send_receipt", barColor: "gray" as const, left: 90, width: 9, ms: "28ms" },
];

// Region pins for the runtime illustration (row 03 / Runtime)
export const regions = [
  { code: "iad", left: "20%", top: "38%", lat: "18ms" },
  { code: "sfo", left: "14%", top: "48%", lat: "22ms" },
  { code: "cdg", left: "47%", top: "30%", lat: "11ms" },
  { code: "fra", left: "52%", top: "26%", lat: "14ms" },
  { code: "nrt", left: "78%", top: "38%", lat: "24ms" },
  { code: "syd", left: "84%", top: "70%", lat: "42ms" },
  { code: "bom", left: "56%", top: "62%", lat: "31ms" },
];

// ─── Secondary bento (six smaller cards) ──────────────────────────────────
export const secondaryBento = {
  title: "And another six things you don't need to build.",
  description: "The boring infrastructure your VP keeps asking when you'll get to.",
  cards: [
    {
      icon: "shield" as const,
      title: "Auth, the way you wish it worked",
      desc: "SAML, OIDC, magic links, passkeys — and a row-level policy engine that reads like English.",
      // demo type: a list of pill tags
      demo: { type: "tags" as const, items: ["SAML", "OIDC", "Passkeys", "Magic link", "SCIM", "MFA"] },
    },
    {
      icon: "clock" as const,
      title: "Queues, cron, and retries",
      desc: 'Durable jobs with exponential backoff, dead-letter queues, and a UI for the inevitable "what happened to that one?"',
      demo: {
        type: "cron-rows" as const,
        items: [
          { schedule: "@hourly", name: "reconcile_payments", status: "3,412 ok" },
          { schedule: "@5min", name: "refresh_index", status: "1 retry" },
        ],
      },
    },
    {
      icon: "refresh-ccw" as const,
      title: "Zero-downtime migrations",
      desc: "Plan, dry-run, and roll out schema changes with backfills that throttle themselves under load.",
      demo: {
        type: "progress" as const,
        percent: 62,
        label: "backfill_customer_tier · 62% · ETA 4m",
      },
    },
    {
      icon: "chart-up" as const,
      title: "Analytics built in",
      desc: "SQL-backed dashboards on the same Postgres your app runs on. No ETL, no warehouse, no Looker invoice.",
      demo: { type: "bars" as const, heights: [30, 55, 40, 70, 60, 85, 75, 95, 80, 100] },
    },
    {
      icon: "box" as const,
      title: "Object storage with signed URLs",
      desc: "S3-compatible storage, image transforms at the edge, and presigned uploads that just work in the browser.",
      demo: {
        type: "url-rows" as const,
        items: [
          { text: "PUT /uploads/<file>", highlighted: false },
          { text: "x-lambda-signed: ✓ valid · 600s", highlighted: true },
        ],
      },
    },
    {
      icon: "cross-axis" as const,
      title: "150+ integrations",
      desc: "First-party connectors for Stripe, Resend, Twilio, Slack, Linear, and the rest of your modern toolbox.",
      demo: {
        type: "tags" as const,
        items: ["Stripe", "Resend", "Twilio", "Slack", "Linear", "PostHog", "Datadog", "+143"],
      },
    },
  ],
};

// ─── Code tabs (multi-language SDK demo) ──────────────────────────────────
// Tabs metadata only. The actual code samples remain inline in CodeTabs.astro
// because they contain heavy syntax-highlighting markup.
export const codeTabs = {
  title: "See it run, in your language of choice.",
  description: "The same query, four ways. Pick your stack — we generate the SDK, you write the code.",
  tabs: [
    { id: "ts", label: "TypeScript", count: "/sdk" },
    { id: "go", label: "Go", count: "/sdk" },
    { id: "py", label: "Python", count: "/sdk" },
    { id: "curl", label: "cURL", count: "/REST" },
    { id: "resp", label: "Response", count: "200" },
  ],
};

// ─── Final CTA ─────────────────────────────────────────────────────────────
export const finalCta = {
  eyebrow: "Ship this week",
  title: "Six primitives.<br/>One afternoon to production.",
  body: 'Read the docs, run <span class="font-mono text-text">npx lambda init</span>, and have a typed, observable backend deployed before lunch ends.',
  ctas: [
    { href: "/signup", label: "Start free trial", variant: "primary" as const },
    { href: "/docs", label: "Read the docs", variant: "ghost" as const },
  ],
};
