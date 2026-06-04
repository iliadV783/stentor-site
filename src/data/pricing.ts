/**
 * Pricing page content: hero, plans (with monthly/annual toggle), full
 * comparison table, and FAQ. Edit prices, features, and copy here.
 */

// ─── Hero ─────────────────────────────────────────────────────────────────
export const hero = {
  eyebrow: "Pricing · USD",
  title: "Simple, transparent pricing.<br/>No quote-form ambushes.",
  description:
    "One predictable rate per seat, generous usage included, and an Enterprise tier that doesn't pretend to be a mystery. You can also self-host. We won't be weird about it.",
  toggle: {
    monthlyLabel: "Monthly",
    annualLabel: "Annual",
    annualBadge: "— save 20%",
  },
};

// ─── Plans ─────────────────────────────────────────────────────────────────
type PlanCta = { href: string; label: string; variant: "primary" | "ghost" };

export type Plan = {
  id: "free" | "pro" | "enterprise";
  name: string;
  tag: string;
  tagAccent?: boolean;
  highlighted?: boolean;
  // Prices: index 0 = annual, index 1 = monthly
  price: { annual: string; monthly: string };
  // Cycle copy under the price
  cycle: { annual: string; monthly: string };
  tagline: string;
  cta: PlanCta;
  // Section heading shown above the feature list
  featuresHeader: string;
  features: string[];
};

export const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    tag: "Hobby",
    price: { annual: "$0", monthly: "$0" },
    cycle: { annual: "/forever", monthly: "/forever" },
    tagline: "Side projects, prototypes, and the occasional weekend hackathon.",
    cta: { href: "/signup", label: "Start for free", variant: "ghost" },
    featuresHeader: "INCLUDED",
    features: [
      "1 project · 1 environment",
      "500k requests / month",
      "1 GB Postgres · 1 GB storage",
      "7-day log retention",
      "Community support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tag: "Most popular",
    tagAccent: true,
    highlighted: true,
    price: { annual: "$19", monthly: "$24" },
    cycle: {
      annual: "/mo · per seat, billed annually",
      monthly: "/mo · per seat, billed monthly",
    },
    tagline: "For teams shipping production workloads with real customers attached.",
    cta: { href: "/signup", label: "Start 14-day Pro trial", variant: "primary" },
    featuresHeader: "EVERYTHING IN FREE, PLUS",
    features: [
      "Unlimited projects & environments",
      "10M requests / mo, then $1 / M",
      "50 GB Postgres · 100 GB storage",
      "Multi-region · 30-day retention",
      "Branch environments per PR",
      "Email support · 8h response",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tag: "From $49/seat",
    price: { annual: "$49", monthly: "$59" },
    cycle: { annual: "/mo · per seat, from", monthly: "/mo · per seat, from" },
    tagline: "Single-tenant, dedicated infra, and a real human who picks up the phone.",
    cta: { href: "#contact", label: "Talk to sales", variant: "ghost" },
    featuresHeader: "EVERYTHING IN PRO, PLUS",
    features: [
      "Dedicated VPC · BYOC available",
      "SSO · SCIM · audit log streaming",
      "99.99% SLA · 24/7 on-call",
      "HIPAA · ISO 27001 · custom DPA",
      "Dedicated solutions engineer",
      "Custom contracts · invoicing",
    ],
  },
];

// ─── Compare table ────────────────────────────────────────────────────────
// Cell value conventions:
//   "—"          → muted dash
//   "●"          → accent dot + "Yes"
//   "● <text>"   → accent dot + <text>
//   anything else → rendered as-is
export type CompareGroup = {
  title: string;
  rows: [string, string, string, string][]; // [feature, free, pro, enterprise]
};

export const compareTable = {
  title: "Compare every line item.",
  groups: [
    {
      title: "Core",
      rows: [
        ["Projects", "1", "Unlimited", "Unlimited"],
        ["Environments per project", "1", "Unlimited + per-PR", "Unlimited + per-PR"],
        ["Team seats", "1", "Unlimited", "Unlimited"],
        ["Custom domains", "1", "Unlimited", "Unlimited"],
      ],
    },
    {
      title: "Compute & data",
      rows: [
        ["Edge function invocations / mo", "500k", "10M, then $1/M", "Custom"],
        ["Postgres storage", "1 GB", "50 GB", "Custom (TB+)"],
        ["Object storage", "1 GB", "100 GB", "Custom"],
        ["Background job throughput", "5/s", "500/s", "Custom"],
        ["Multi-region read replicas", "—", "● Up to 3", "● Unlimited"],
      ],
    },
    {
      title: "Observability",
      rows: [
        ["Log retention", "7 days", "30 days", "Up to 1 year"],
        ["Trace sampling", "10%", "100%", "100%"],
        ["Audit log streaming (S3, Datadog…)", "—", "—", "●"],
      ],
    },
    {
      title: "Security & compliance",
      rows: [
        ["SSO (Google, GitHub)", "●", "●", "●"],
        ["SAML SSO + SCIM", "—", "—", "●"],
        ["SOC 2 Type II report", "—", "●", "●"],
        ["HIPAA · custom DPA", "—", "—", "●"],
      ],
    },
    {
      title: "Support",
      rows: [
        ["Community Discord", "●", "●", "●"],
        ["Email support response", "—", "8h business", "1h · 24/7"],
        ["Dedicated Slack channel", "—", "—", "●"],
        ["Solutions engineer", "—", "—", "●"],
        ["Uptime SLA", "—", "99.9%", "99.99%"],
      ],
    },
  ] satisfies CompareGroup[],
};

// ─── FAQ ───────────────────────────────────────────────────────────────────
export const faq = {
  title: "Questions, asked honestly.",
  items: [
    {
      q: "What counts as a request?",
      a: "An invocation of an edge function, or a database query made through the Lambda gateway. Internal calls between your own functions in the same project are free — we don't bill you for talking to yourself. Static asset reads from your CDN don't count as requests either.",
    },
    {
      q: "Can I switch from monthly to annual mid-cycle?",
      a: "Yes. We prorate the remaining month and apply it to the annual plan automatically. You'll see the math on your next invoice — no quote forms, no support tickets.",
    },
    {
      q: "Do you offer startup or open-source discounts?",
      a: "Yes — 12 months of Pro free for YC-backed companies, and unlimited Pro for vetted open-source maintainers. Email community@lambda.dev with a link to your repo or batch.",
    },
    {
      q: "What happens when I hit a usage limit?",
      a: "On Free, requests beyond the included tier are gracefully throttled — your app keeps working, just rate-limited. On Pro, overages are billed at $1 per million requests, capped by a spend ceiling you set. We email you at 50%, 80%, and 100%. No surprise bills, ever.",
    },
    {
      q: "Can we self-host Lambda?",
      a: "Enterprise customers can deploy Lambda into their own AWS, GCP, or on-prem environment with the BYOC add-on. The control plane runs in your VPC; we provide a Terraform module and an SRE-on-call to help you keep it green.",
    },
    {
      q: "How do I cancel?",
      a: "Settings → Billing → Cancel. Two clicks. No retention specialist will appear. Your data stays available for 30 days in case you change your mind, and you can export a full Postgres dump from the dashboard at any time.",
    },
  ],
};

// ─── Final CTA ─────────────────────────────────────────────────────────────
export const finalCta = {
  eyebrow: "14-day Pro trial",
  title: "Try Pro free.<br/>Keep what you build.",
  body:
    "Spin up a project, invite your team, and ship something this afternoon. We won't ask for a card until day fifteen — and we'll still email you first.",
  ctas: [
    { href: "/signup", label: "Start free trial", variant: "primary" as const },
    { href: "#contact", label: "Talk to sales", variant: "ghost" as const },
  ],
};
