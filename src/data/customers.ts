/**
 * Customers page content: hero, featured case study, customer card grid,
 * filter chips, logo wall, aggregate stats, quotes, and final CTA.
 */

// ─── Hero ─────────────────────────────────────────────────────────────────
export const hero = {
  eyebrow: "10,000+ teams in production",
  title:
    'The teams shipping fastest <em class="not-italic text-text-3 font-medium">are running on Lambda.</em>',
  description:
    "From Series A startups to publicly-traded enterprises, the same primitives power the backends behind millions of daily requests. Here's what they had to say.",
};

// ─── Featured case study ──────────────────────────────────────────────────
export const featured = {
  brand: { initial: "N", name: "Northwind" },
  title:
    'How Northwind cut their P95 by <em class="text-red-500 not-italic">60%</em> and deleted 11,000 lines of glue.',
  description:
    "Northwind moved their entire payments and subscription stack to Lambda over a single weekend. Two years in, they're handling 4× the load with half the on-call rotation.",
  stats: [
    { value: "−60%", label: "P95 latency, day 1" },
    { value: "11,000", label: "Lines of glue code deleted" },
    { value: "4×", label: "Load with the same headcount" },
  ],
  link: { href: "#", label: "Read the full story" },
  // HUD rows shown on the visual side (right column)
  hudRows: [
    { method: "POST", path: "/v1/checkout", lat: "22ms · iad", emphasized: true },
    { method: "GET", path: "/v1/users/me", lat: "11ms · cdg", emphasized: true },
    { method: "POST", path: "/v1/webhooks/stripe", lat: "28ms · iad", emphasized: false },
    { method: "GET", path: "/v1/orders", lat: "18ms · syd", emphasized: false },
  ],
  pullQuote: {
    text:
      "We replaced four services and a fragile cron box with Lambda. P95 dropped 60% on day one and we deleted 11,000 lines of glue code in a weekend.",
    author: "Priya Shah",
    role: "Staff Engineer, Northwind",
  },
};

// ─── Filter chips ─────────────────────────────────────────────────────────
export const filters = ["All", "Fintech", "SaaS", "Marketplaces", "AI & Infra", "Healthcare", "Enterprise"];

export const filterCount = { showing: 6, total: 84 };

// ─── Customer cards ───────────────────────────────────────────────────────
// `illustration` maps to an SVG file under src/assets/illustrations/customer-*.svg
type CustomerCard = {
  brand: string;
  industry: string;
  // Glyph: tailwind class string for the small square logo placeholder
  glyph: string;
  // Background tint applied to the card's illustration container
  tint: string;
  illustration: "helio" | "constellate" | "vector" | "kettlebrook" | "orbital" | "tessera";
  title: string;
  description: string;
  stats: { k: string; l: string }[];
};

export const cards: CustomerCard[] = [
  {
    brand: "Helio",
    industry: "Fintech",
    glyph: "rounded-full",
    tint: "rgba(239,68,68,0.18)",
    illustration: "helio",
    title: "Six engineers, one core ledger, zero downtime in 18 months.",
    description:
      "Helio runs cross-border payouts on a typed ledger built entirely on Lambda primitives. Their entire backend fits in one weekend's worth of onboarding.",
    stats: [
      { k: "$2.8B", l: "Settled in last 12 months" },
      { k: "99.998%", l: "Uptime, year over year" },
    ],
  },
  {
    brand: "Constellate",
    industry: "SaaS",
    glyph: "",
    tint: "rgba(96,165,250,0.10)",
    illustration: "constellate",
    title: "Migrated 47 microservices into one typed monolith — and slept better.",
    description:
      "Constellate's platform team consolidated a sprawling Kubernetes mesh down to four Lambda projects. Pager volume dropped 80% in the first quarter.",
    stats: [
      { k: "−80%", l: "PagerDuty alerts" },
      { k: "47 → 4", l: "Services consolidated" },
    ],
  },
  {
    brand: "Vector Labs",
    industry: "AI & Infra",
    glyph: "[clip-path:polygon(50%_0,100%_100%,0_100%)]",
    tint: "rgba(239,68,68,0.14)",
    illustration: "vector",
    title: "SOC 2 in eight weeks instead of eight months.",
    description:
      "Vector Labs ships AI-powered analytics into Fortune 500 deployments. Lambda's audit logs and policy engine handed them most of their compliance work.",
    stats: [
      { k: "8 wks", l: "SOC 2 Type II" },
      { k: "0 findings", l: "First audit cycle" },
    ],
  },
  {
    brand: "Kettlebrook",
    industry: "Marketplaces",
    glyph: "rounded",
    tint: "rgba(239,68,68,0.14)",
    illustration: "kettlebrook",
    title: "Zero-downtime migration of 12 TB while traffic doubled.",
    description:
      "Kettlebrook moved their entire seller catalog from a self-hosted Postgres to Lambda's managed branch — during peak Black Friday week.",
    stats: [
      { k: "12 TB", l: "Migrated, zero downtime" },
      { k: "2.1×", l: "Peak traffic during cutover" },
    ],
  },
  {
    brand: "Orbital",
    industry: "Healthcare",
    glyph: "rounded-full bg-transparent border-2 border-zinc-300",
    tint: "rgba(96,165,250,0.10)",
    illustration: "orbital",
    title: "HIPAA-compliant analytics for 1,200 hospitals on day one.",
    description:
      "Orbital powers patient-flow analytics for hospital networks. Lambda's row-level policies meant they passed their first BAA review in a single sitting.",
    stats: [
      { k: "1,200", l: "Hospitals on the network" },
      { k: "0", l: "PHI exposure incidents" },
    ],
  },
  {
    brand: "Tessera",
    industry: "Enterprise",
    glyph: "rounded",
    tint: "rgba(239,68,68,0.16)",
    illustration: "tessera",
    title: "Replaced a 200-page runbook with a single Lambda project.",
    description:
      "Tessera's IT modernization team consolidated decades of bespoke ETL into typed Lambda jobs. The runbook now lives in version control, where it belongs.",
    stats: [
      { k: "12 yrs", l: "Of legacy ETL replaced" },
      { k: "$1.4M", l: "Annual savings, year 1" },
    ],
  },
];

// ─── Logo wall ────────────────────────────────────────────────────────────
export const logoWall = {
  title: "Trusted by teams of every size.",
  description:
    "From two-person seed teams to 50-engineer platform orgs — same primitives, same SLA.",
  logos: [
    { name: "Northwind", glyph: "rounded-full" },
    { name: "Helio", glyph: "rotate-45" },
    { name: "Constellate", glyph: "" },
    { name: "Vector", glyph: "[clip-path:polygon(50%_0,100%_100%,0_100%)]" },
    { name: "Kettlebrook", glyph: "rounded" },
    { name: "Orbital", glyph: "rounded-full bg-transparent border-2 border-zinc-300" },
    { name: "Tessera", glyph: "rounded" },
    { name: "Quanta", glyph: "rounded-full" },
    { name: "Foundry", glyph: "" },
    { name: "Meridian", glyph: "rotate-45" },
    { name: "Trellis", glyph: "rounded" },
    { name: "Halcyon", glyph: "rounded-full" },
  ],
};

// ─── Aggregate stats strip ────────────────────────────────────────────────
export const stats = {
  title: "What our customers ship, in aggregate.",
  description:
    "Anonymous, aggregated metrics across all Lambda accounts in production over the last 12 months.",
  items: [
    { value: "2.4B", suffix: "/day", label: "API requests served across all customer projects" },
    { value: "38", suffix: " regions", label: "Customer functions running at the edge worldwide" },
    { value: "$0.84", suffix: "/M", label: "Average customer cost per million requests" },
  ],
};

// ─── Quote cards ──────────────────────────────────────────────────────────
export const quotes = [
  {
    stars: 5,
    text:
      "The first time I shipped a feature on Lambda I deleted a Jira ticket I'd been carrying for two years. The platform has earned my trust three deploys at a time.",
    av: "JM",
    name: "James Mendez",
    role: "VP Engineering, Constellate",
  },
  {
    stars: 5,
    text:
      'We were skeptical of "managed everything." After two quarters in production we\'re skeptical of going back. The CLI alone has paid for itself.',
    av: "RK",
    name: "Rina Kapoor",
    role: "Founding engineer, Helio",
  },
  {
    stars: 5,
    text:
      "Our security team approved Lambda faster than the snack vendor. The audit logs and row-level policies wrote half our SOC 2 evidence by themselves.",
    av: "DH",
    name: "David Han",
    role: "Head of Platform, Vector Labs",
  },
];

// ─── Final CTA ─────────────────────────────────────────────────────────────
export const finalCta = {
  variant: "borderY" as const,
  title: "Ship like the teams above.",
  body:
    "Start free, deploy in seconds, and only talk to a human if you actually want to. No credit card, no sales call, no two-week trial that turns into a sales call.",
  ctas: [
    { href: "/signup", label: "Start free trial", variant: "primary" as const },
    { href: "#contact", label: "Talk to sales", variant: "ghost" as const },
  ],
};
