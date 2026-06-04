/**
 * Homepage content. Each section maps to one component under
 * src/components/sections/home/. Edit copy and lists here without
 * touching the layout or the SVG illustrations.
 */

// ─── Hero ─────────────────────────────────────────────────────────────────
export const hero = {
  eyebrow: "v. 0.1.64 – Live Sync",
  // Rich text rendered via set:html — keep <em>, <br/> etc. inline.
  title:
    'The backend platform <em class="not-italic text-text-3 font-medium">for teams who ship</em><br class="hidden sm:inline" /> without the on-call.',
  description:
    "Lambda is a typed, observable backend with managed Postgres, edge functions, and built-in analytics. Deploy in seconds, scale without rewrites, sleep through the night.",
  ctas: [
    { href: "/signup", label: "Start free trial", variant: "primary" as const },
    { href: "#demo", label: "Watch 2-min demo", variant: "ghost" as const, icon: "play" as const },
  ],
  trust: [
    { label: "99.99% uptime · last 90 days", live: true },
    { label: "SOC 2 Type II" },
    { label: "No credit card required" },
  ],
  // Mock dashboard preview shown under the hero.
  mock: {
    workspace: { name: "Acme Corp", env: "Production · us-east-1" },
    user: { name: "Maya Chen", email: "maya@acme.co" },
    title: "Overview",
    timeframe: { prefix: "production / ", value: "last 24h" },
    stats: [
      { label: "Requests", value: "4.21M", trend: "▲ 12.4%", trendColor: "green" as const },
      { label: "P95 latency", value: "68", suffix: "ms", trend: "▼ 4.1%", trendColor: "red" as const },
      { label: "Error rate", value: "0.04", suffix: "%", trend: "▲ stable", trendColor: "green" as const },
      { label: "DB connections", value: "214", suffix: "/500", trend: "▲ 6.2%", trendColor: "green" as const },
    ],
    logs: [
      { t: "12:04:21", lvl: "ok", code: "200", m: "POST /v1/checkout · ", s: "42ms" },
      { t: "12:04:20", lvl: "ok", code: "200", m: "GET /v1/users/me · ", s: "11ms" },
      { t: "12:04:18", lvl: "info", code: "fn", m: "invoice.send → resend.email · ", s: "312ms" },
      { t: "12:04:16", lvl: "warn", code: "429", m: "retry GET /v1/exports · ", s: "backoff 800ms" },
      { t: "12:04:13", lvl: "ok", code: "200", m: "POST /v1/webhooks/stripe · ", s: "28ms" },
      { t: "12:04:09", lvl: "ok", code: "201", m: "db.subscriptions insert · ", s: "19ms" },
    ],
  },
};

// ─── Logo cloud ───────────────────────────────────────────────────────────
export const logoCloud = {
  label: "TRUSTED BY TEAMS AT",
  bigNumber: "10,000+",
  // glyph: a Tailwind class string applied to a 5×5 zinc-300 square.
  // Keep glyphs minimal — they are abstract logo placeholders.
  logos: [
    { name: "Northwind", glyph: "rounded-full" },
    { name: "Helio", glyph: "rotate-45" },
    { name: "Constellate", glyph: "" },
    { name: "Vector Labs", glyph: "[clip-path:polygon(50%_0,100%_100%,0_100%)]" },
    { name: "Kettlebrook", glyph: "rounded" },
    { name: "Orbital", glyph: "rounded-full border-2 border-zinc-300 bg-transparent" },
  ],
};

// ─── Metrics strip ────────────────────────────────────────────────────────
export const metrics = {
  title: "Numbers that speak<br/>for themselves.",
  description:
    "Three years in production with the teams shipping the most demanding workloads on the internet.",
  items: [
    { value: "10,000", suffix: "+", label: "Engineering teams in production" },
    { value: "99.99", suffix: "%", label: "Multi-region uptime, last 12 months" },
    { value: "150", suffix: "+", label: "First-party integrations & SDKs" },
  ],
};

// ─── Bento (feature grid) ─────────────────────────────────────────────────
// Header copy only — the per-card structure is laid out in Bento.astro
// because each card has unique illustrations and demo content.
export const bento = {
  title: "Everything you need.<br/>Nothing you don't.",
  description:
    "A focused set of primitives — typed, observable, and composable — so your team can move fast without trading away reliability.",
  // Card titles + descriptions are editable here. Visuals stay inline.
  cards: {
    types: {
      title: "Type-safe by default",
      desc: "Schemas become clients. Generate fully-typed SDKs for TypeScript, Go, Python, and Swift the moment you save your model.",
    },
    p95: {
      title: "P95 you can prove",
      desc: "Traces, logs, and metrics on every request — out of the box, no agent to install.",
    },
    edge: {
      title: "Edge functions, <30ms cold start",
      desc: "Isolates instead of containers, deployed to 38 regions. Routes auto-pick the closest healthy node.",
    },
    auth: {
      title: "Auth, roles, and audit logs",
      desc: "SAML, OIDC, magic links, passkeys — and a row-level policy engine you can read.",
    },
    cron: {
      title: "Cron, queues, and retries",
      desc: "Durable jobs with backoff and dead-letter queues.",
    },
    migrations: {
      title: "Zero-downtime migrations",
      desc: "Backfills that throttle themselves under load.",
    },
    deploys: {
      title: "Zero-downtime deploys",
      desc: "Atomic releases. Instant rollback to any prior revision.",
    },
  },
};

// ─── Testimonials ─────────────────────────────────────────────────────────
export const testimonials = {
  title: "Loved by engineers,<br/>tolerated by VPs of Finance.",
  description: "What teams say after migrating from a homegrown stack of nine services.",
  quotes: [
    {
      text: "We replaced four services and a fragile cron box with Lambda. Our P95 dropped 60% and we deleted 11,000 lines of glue code in a weekend.",
      av: "MC",
      name: "Maya Chen",
      role: "Staff Engineer · Northwind",
    },
    {
      text: "The typed SDKs alone saved us a quarter. Our mobile team consumes the same models the API does, so contract drift just isn't a category of bug anymore.",
      av: "RT",
      name: "Ravi Tandon",
      role: "Head of Platform · Helio",
    },
    {
      text: "I sleep through the night. The audit log and policy engine handled our SOC 2 evidence collection without a single Notion doc being written.",
      av: "EM",
      name: "Elena Marković",
      role: "CTO · Constellate",
    },
  ],
};

// ─── Pricing preview (compact 3-plan card on home) ────────────────────────
export const pricingPreview = {
  title: "Pricing that scales<br/>with your team, not your panic.",
  comparisonLink: { href: "/pricing", label: "Compare every plan →" },
  plans: [
    {
      name: "Free",
      tag: "Hobby",
      price: "$0",
      cycle: "/mo",
      tagline: "Everything you need to ship a side project that nobody asked for.",
      features: [
        "1 project, 1 environment",
        "500k requests / month",
        "1 GB Postgres, 1 GB storage",
        "Community support",
      ],
      cta: { href: "/signup", label: "Start for free", variant: "ghost" as const },
      highlighted: false,
    },
    {
      name: "Pro",
      tag: "Most popular",
      tagAccent: true,
      price: "$19",
      cycle: "/mo · per seat",
      tagline: "For teams shipping production workloads with real customers attached.",
      features: [
        "Unlimited projects & environments",
        "10M requests included, then $1/M",
        "Multi-region · 30-day log retention",
        "SOC 2 reports · email support",
      ],
      cta: { href: "/signup", label: "Start 14-day Pro trial", variant: "primary" as const },
      highlighted: true,
    },
    {
      name: "Enterprise",
      tag: "Custom",
      price: "$49",
      cycle: "/mo · per seat, from",
      tagline: "Single-tenant infra, custom contracts, and a real human who picks up.",
      features: [
        "Dedicated VPC, BYOC available",
        "SSO, SCIM, audit log streaming",
        "99.99% SLA · 24/7 on-call",
        "Dedicated solutions engineer",
      ],
      cta: { href: "#contact", label: "Talk to sales", variant: "ghost" as const },
      highlighted: false,
    },
  ],
};

// ─── Final CTA at the bottom of the homepage ──────────────────────────────
export const finalCta = {
  variant: "borderY" as const,
  paddingY: "py-24 md:py-[120px]",
  gap: "gap-6",
  eyebrow: "14-day trial · no card",
  title: "Stop gluing services together.<br/>Start shipping the product.",
  body: 'Lambda gets you from <span class="font-mono text-text">git init</span> to a typed, observable, multi-region backend in an afternoon. Your weekends are not a deployment strategy.',
  ctas: [
    { href: "/signup", label: "Start free trial", variant: "primary" as const },
    { href: "#contact", label: "Book a 20-min call", variant: "ghost" as const },
  ],
};
