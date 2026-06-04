/**
 * About page content. Update copy, swap stats, refresh team & timeline as
 * the company grows. Title fields accept inline HTML (`<em>`, `<br/>`).
 */

export type Stat = { value: string; suffix?: string; label: string };
export type Value = { number: string; title: string; description: string };
export type Milestone = { year: string; title: string; description: string };
export type TeamMember = { name: string; role: string; initial: string; bio: string };

export const about = {
  hero: {
    eyebrow: "About Lambda",
    title:
      'Backends should be <em class="not-italic text-red-500">boring</em>.<br/>So you can build the interesting parts.',
    description:
      "Lambda was founded in 2023 by three engineers who were tired of YAML and 3 a.m. pages. We're building the typed, observable backend platform we wished existed.",
  },

  story: {
    eyebrow: "Origin",
    title: "Why we started Lambda",
    paragraphs: [
      "Before Lambda, our founders spent a decade at infrastructure companies you've heard of. We watched the same scene play out: a small team builds something great, hits scale, and then spends 60% of their time wrestling Kubernetes manifests, debugging cold-start latency, and arguing about which cloud's IAM dialect to learn next.",
      "We thought there had to be a better way — a backend you could deploy with one command, observe without a separate vendor, and trust without writing a runbook. So in early 2023, we left, opened a Notion doc titled \"Boring backends manifesto,\" and started writing.",
      "Three years later, the principles haven't changed. The product has grown — managed Postgres, edge functions, built-in analytics, RBAC — but the goal is the same one we wrote down on day one: make backends boring, so engineers can ship the interesting parts.",
    ],
    pullQuote: {
      text: "Every minute spent babysitting infrastructure is a minute not spent on the thing your customers actually pay you for.",
      author: "Anya Voss",
      role: "Co-founder & CEO",
    },
  },

  numbers: {
    title: "Lambda by the numbers",
    description:
      "Real metrics from a real company. Updated quarterly — last refreshed April 2026.",
    items: [
      { value: "12k", suffix: "+", label: "developers shipping every day" },
      { value: "38", label: "edge regions, six continents" },
      { value: "99.99", suffix: "%", label: "uptime, trailing twelve months" },
      { value: "$24", suffix: "M", label: "Series A, March 2025" },
    ] as Stat[],
  },

  values: {
    eyebrow: "Principles",
    title: "What we believe",
    description:
      "Four lines we wrote on day one. They've survived three product pivots and a Series A.",
    items: [
      {
        number: "01",
        title: "Boring is a feature",
        description:
          "If you remember our infrastructure exists, we have failed. The best praise we hear is \"oh, we forgot Lambda was even there.\"",
      },
      {
        number: "02",
        title: "Types over tickets",
        description:
          "A compiler error you fix in 30 seconds beats a runtime alert you debug at midnight. We push as much correctness left as we can.",
      },
      {
        number: "03",
        title: "Ship in public",
        description:
          "Roadmap, status page, weekly changelog, post-mortems within 72 hours. If we know it, you know it. No surprises.",
      },
      {
        number: "04",
        title: "Customer success > vanity metrics",
        description:
          "We don't chase logos for the homepage. We chase teams who ship faster, sleep better, and want to keep us as a vendor for ten years.",
      },
    ] as Value[],
  },

  timeline: {
    eyebrow: "Timeline",
    title: "How we got here",
    description: "The short version, with footnotes for the curious.",
    items: [
      {
        year: "2023 Q1",
        title: "Three engineers, one prototype",
        description:
          "Founded in a Brooklyn co-working space. First commit lands on a snowy Tuesday in February. The prototype deploys a Postgres + HTTP function in 90 seconds.",
      },
      {
        year: "2023 Q4",
        title: "Y Combinator, Winter '24 batch",
        description:
          "Accepted into YC W24. Move ten people into a sublet in San Francisco for three months. Ship the public beta the week before Demo Day.",
      },
      {
        year: "2025 Q1",
        title: "Series A — $24M, led by Index",
        description:
          "Index Ventures leads a $24M Series A with participation from Y Combinator, Founders Fund, and angels from Stripe, Vercel, and Linear.",
      },
      {
        year: "2025 Q3",
        title: "GA across 38 regions",
        description:
          "Leave beta. Cross 10,000 daily-active developer accounts. Open offices in Berlin and Bengaluru. Hire our first SRE — finally.",
      },
      {
        year: "2026 Q1",
        title: "Edge functions, pgvector, RBAC",
        description:
          "Largest product release to date. Edge functions go GA. Postgres ships pgvector and PITR. SAML SSO + audit logs land for Enterprise.",
      },
    ] as Milestone[],
  },

  team: {
    eyebrow: "Team",
    title: "The people behind Lambda",
    description:
      "We're 42 people across Brooklyn, Berlin, and Bengaluru. Engineers, designers, writers, ops — all working on the same boring backend.",
    members: [
      { name: "Anya Voss", role: "Co-founder & CEO", initial: "AV", bio: "Previously infra at Stripe and Datadog. Writes the company-wide weekly memo." },
      { name: "Mateo Ortiz", role: "Co-founder & CTO", initial: "MO", bio: "Built the Postgres extension layer. Maintains a small Linux distribution on the side." },
      { name: "Priya Reddy", role: "Head of Engineering", initial: "PR", bio: "Ten years at Cloudflare. Holds the team's only formal SRE certification." },
      { name: "Jonas Brandt", role: "Head of Design", initial: "JB", bio: "Designed the original dashboard on a flight from Berlin to JFK. Still iterating." },
      { name: "Sara Lin", role: "Head of DevRel", initial: "SL", bio: "Writes the docs you actually want to read. Records demos in one take." },
      { name: "Felix Okafor", role: "Head of Security", initial: "FO", bio: "Found the first SOC 2 control we shipped. Will find the last one too." },
    ] as TeamMember[],
  },

  investors: {
    title: "Backed by operators",
    description:
      "We took capital from people who've built and run the kind of infrastructure we're rebuilding.",
    logos: [
      { name: "Index Ventures" },
      { name: "Y Combinator" },
      { name: "Founders Fund" },
      { name: "Sequoia Scout" },
      { name: "South Park Commons" },
      { name: "Angel collective" },
    ],
  },

  finalCta: {
    eyebrow: "We're hiring",
    title: "Want to help build it?",
    body: "We're a remote-first team of 42 across Brooklyn, Berlin, and Bengaluru. Engineering, design, devrel, sales, security — we're hiring across the board.",
    ctas: [
      { label: "See open roles", href: "#careers", variant: "primary" as const },
      { label: "Read our blog", href: "#blog", variant: "ghost" as const },
    ],
  },
} as const;
