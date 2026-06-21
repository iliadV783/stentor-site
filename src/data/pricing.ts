export const hero = {
  eyebrow: "Support · Same features",
  title: "Same tools for everyone.<br/>Support according to your scale.",
  description:
    "Sténtor does not lock essential features behind higher tiers. Free, Pro and Venues all include the same core tools. The suggested contribution reflects the context and scale of use.",
  toggle: {
    monthlyLabel: "Donation",
    annualLabel: "Support",
    annualBadge: "same features",
  },
};

type PlanCta = { href: string; label: string; variant: "primary" | "ghost" };

export type Plan = {
  id: "free" | "pro" | "enterprise";
  name: string;
  tag: string;
  tagAccent?: boolean;
  highlighted?: boolean;
  price: { annual: string; monthly: string };
  cycle: { annual: string; monthly: string };
  tagline: string;
  cta: PlanCta;
  featuresHeader: string;
  features: string[];
};

const sharedFeatures = [
  "Unlimited projects",
  "Unlimited languages",
  "Unlimited cues",
  "Surtitles, translations and audio-description notes",
  "Import from Word, TXT, SRT, WebVTT, CSV and JSON",
  "Export-ready scripts for rehearsal, archive, touring and study",
  "Audience web app and Live Sync workflow",
  "Feedback and research exchange encouraged",
];

export const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    tag: "Independent",
    price: { annual: "€0", monthly: "€0" },
    cycle: { annual: "/year", monthly: "/year" },
    tagline: "For independent artists, students, small experiments and people who need access without asking permission.",
    cta: { href: "/signup", label: "Use for free", variant: "ghost" },
    featuresHeader: "SAME FEATURES INCLUDED",
    features: sharedFeatures,
  },
  {
    id: "pro",
    name: "Pro",
    tag: "Suggested",
    tagAccent: true,
    highlighted: true,
    price: { annual: "€19", monthly: "€19" },
    cycle: { annual: "/year · suggested support", monthly: "/year · suggested donation" },
    tagline: "For companies, collectives, professional projects and touring productions that can contribute a little more.",
    cta: { href: "/signup", label: "Support as Pro", variant: "primary" },
    featuresHeader: "SAME FEATURES INCLUDED",
    features: sharedFeatures,
  },
  {
    id: "enterprise",
    name: "Venues",
    tag: "Theatres",
    price: { annual: "€99", monthly: "€99" },
    cycle: { annual: "/year · suggested support", monthly: "/year · suggested donation" },
    tagline: "For theatres, festivals, institutions and venues using Sténtor in larger public contexts.",
    cta: { href: "/contact", label: "Support as Venue", variant: "ghost" },
    featuresHeader: "SAME FEATURES INCLUDED",
    features: sharedFeatures,
  },
];

export type CompareGroup = {
  title: string;
  rows: [string, string, string, string][];
};

export const compareTable = {
  title: "No feature gates. Only different ways to contribute.",
  groups: [
    {
      title: "Core tools",
      rows: [
        ["Projects", "Unlimited", "Unlimited", "Unlimited"],
        ["Languages", "Unlimited", "Unlimited", "Unlimited"],
        ["Cues", "Unlimited", "Unlimited", "Unlimited"],
        ["Surtitles", "●", "●", "●"],
        ["Translations", "●", "●", "●"],
        ["Audio-description notes", "●", "●", "●"],
      ],
    },
    {
      title: "Preparation and sharing",
      rows: [
        ["Import Word, TXT, SRT, WebVTT, CSV and JSON", "●", "●", "●"],
        ["Export-ready scripts", "●", "●", "●"],
        ["Audience web app", "●", "●", "●"],
        ["Live Sync workflow", "●", "●", "●"],
        ["Cross-platform desktop direction", "●", "●", "●"],
      ],
    },
    {
      title: "Knowledge exchange",
      rows: [
        ["Questionnaires and feedback", "Welcome", "Welcome", "Welcome"],
        ["Audience responses", "Welcome", "Welcome", "Welcome"],
        ["Usage notes for research", "Welcome", "Welcome", "Welcome"],
        ["Free account-based activation", "●", "●", "●"],
      ],
    },
    {
      title: "Suggested contribution",
      rows: [
        ["Independent artists and very small teams", "€0/year", "Optional", "Optional"],
        ["Companies, collectives and touring productions", "Possible", "€19/year", "Optional"],
        ["Theatres, festivals and institutions", "Possible", "Possible", "€99/year"],
        ["All core features", "Same", "Same", "Same"],
      ],
    },
  ] satisfies CompareGroup[],
};

export const faq = {
  title: "Questions, answered clearly.",
  items: [
    {
      q: "Are Free, Pro and Venues different versions of the software?",
      a: "No. The core features are the same. Sténtor is not organised around feature gates. The contribution levels reflect different contexts of use, not different access to essential tools.",
    },
    {
      q: "Why ask for a contribution at all?",
      a: "Contributions help keep the software available while allowing artists, companies and venues with different resources to participate fairly.",
    },
    {
      q: "Is this a price, a donation or support?",
      a: "It is best understood as suggested yearly support. Use the level that matches your situation: free access when needed, a small contribution for professional use, and a larger contribution for venues and institutions.",
    },
    {
      q: "What can I give if I cannot contribute money?",
      a: "Feedback is valuable. Questionnaires, practical notes, audience responses, screenshots of real workflows and comments from operators or spectators all help improve the project.",
    },
    {
      q: "Do you provide paid support or service-level guarantees?",
      a: "No. Contributions support the development and maintenance of the project.",
    },
    {
      q: "Can a theatre or festival contribute more than the suggested amount?",
      a: "Yes. Institutions that can support the project more generously are welcome to get in touch.",
    },
  ],
};

export const finalCta = {
  eyebrow: "Use it, support it, improve it",
  title: "Same features.<br/>Shared responsibility.",
  body:
    "Use Sténtor at the level that fits your context. If you can contribute money, support the project. If you can contribute experience, share feedback, questionnaires and audience responses.",
  ctas: [
    { href: "/signup", label: "Use Sténtor", variant: "primary" as const },
    { href: "/contact", label: "Share feedback", variant: "ghost" as const },
  ],
};