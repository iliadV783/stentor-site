/**
 * Contact page content.
 * icon values map to SVG filenames under src/assets/icons/.
 */

export type ContactChannel = {
  icon: "info" | "mail" | "discord" | "shield-check";
  label: string;
  description: string;
  href: string;
  cta: string;
};

export type ContactDepartment = {
  value: string;
  label: string;
};

export const contact = {
  eyebrow: "Contact",
  title: "Get in touch",
  description:
    "Whether you have a quick question or want to talk about a custom plan, we're here. Pick the channel that works best for you.",

  channels: [
    {
      icon: "info",
      label: "Documentation",
      description:
        "Start here. Our guides, API reference, and quickstarts cover the most common questions.",
      href: "/docs",
      cta: "Browse the docs",
    },
    {
      icon: "mail",
      label: "Email us",
      description:
        "Send us a message and we'll respond within one business day. Enterprise customers get a four-hour SLA.",
      href: "mailto:hello@lambda.dev",
      cta: "hello@lambda.dev",
    },
    {
      icon: "discord",
      label: "Community",
      description:
        "Join thousands of developers building on Lambda. Ask questions, share projects, and get unblocked fast.",
      href: "#",
      cta: "Join Discord",
    },
    {
      icon: "shield-check",
      label: "Security",
      description:
        "Found a vulnerability? Please disclose responsibly. We triage all reports within 24 hours.",
      href: "mailto:security@lambda.dev",
      cta: "security@lambda.dev",
    },
  ] as ContactChannel[],

  form: {
    title: "Send a message",
    description: "Fill in the form and we'll route it to the right team.",
    namePlaceholder: "Ada Lovelace",
    emailPlaceholder: "ada@company.com",
    messagePlaceholder:
      "Tell us what you're building, what's blocking you, or what you'd like to discuss.",
    submitLabel: "Send message",
    successTitle: "Message received",
    successBody:
      "Thanks for reaching out. You'll hear from us within one business day — usually sooner.",
    departments: [
      { value: "general", label: "General inquiry" },
      { value: "billing", label: "Billing & plans" },
      { value: "technical", label: "Technical support" },
      { value: "security", label: "Security disclosure" },
      { value: "enterprise", label: "Enterprise / sales" },
      { value: "other", label: "Other" },
    ] as ContactDepartment[],
  },

  enterprise: {
    eyebrow: "Enterprise",
    title: "Need a custom plan?",
    description:
      "Dedicated infrastructure, custom SLAs, SAML SSO, audit logs, and a named customer success manager. Let's talk.",
    cta: { label: "Talk to sales", href: "mailto:sales@lambda.dev" },
    stats: [
      { value: "99.99%", label: "uptime SLA" },
      { value: "< 4 h", label: "support response" },
      { value: "38", label: "global regions" },
    ],
  },
} as const;
