export const form = {
  title: "Request access to Sténtor.",
  intro: "Sténtor is a research-driven prototype. Leave your email and context of use: we will send updates, download information and feedback questionnaires when they are ready.",
  nameLabel: "Full name",
  namePlaceholder: "Your name",
  emailLabel: "Email",
  emailPlaceholder: "you@example.com",
  roleLabel: "How would you use Sténtor?",
  roleOptions: ["Independent artist or researcher", "Company or collective", "Theatre, festival or venue", "Translator or surtitler", "Audio describer", "Technician or operator", "Other"],
  messageLabel: "Context or message",
  messagePlaceholder: "Tell us if you want to test Sténtor in rehearsal, with an audience, in a theatre, in a workshop or in a research context.",
  consentLabel: 'I agree to be contacted about Sténtor updates, feedback questionnaires and research-related communication. See the <a href="/privacy" class="text-text underline underline-offset-2">Privacy Policy</a>.',
  submitLabel: "Request access",
  backToSite: "Back to site",
  note: "This page is for access requests and research communication. It does not create a user account.",
  bullets: ["No account setup here", "Same core features for everyone", "Feedback and field notes help the project grow"]
};

export const sidePanel = {
  tagline: 'From <em class="text-red-500 not-italic">real rooms</em> to better tools.',
  description: "Sténtor grows through rehearsals, theatre tests, audience responses and shared knowledge about live-performance text.",
  terminal: {
    breadcrumb: "~/stentor · research",
    lines: [
      { kind: "cmd", text: "prepare script" },
      { kind: "comment", text: "# surtitles · translation · audio description" },
      { kind: "ok", text: "operator view ready" },
      { kind: "cmd", text: "start live sync" },
      { kind: "ok", text: "screens and audience phones connected" }
    ]
  },
  deployCard: {
    title: "Research exchange",
    badge: "open",
    rows: [
      { label: "Access", value: "same tools", accent: true },
      { label: "Use", value: "rehearsal · live" },
      { label: "Devices", value: "screens · phones" },
      { label: "Feedback", value: "questionnaires" },
      { label: "License", value: "EUPL direction" }
    ]
  },
  pulse: {
    title: "Field notes",
    rate: "✓ useful",
    bars: [16, 28, 22, 38, 32, 48, 40, 60, 52, 72, 58, 82, 70, 90, 100],
    leftLabel: "test",
    rightLabel: "learn"
  }
};

export const footer = {
  copyright: "© 2026 Sténtor",
  links: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
    { href: "/contact", label: "● Feedback welcome" }
  ]
};
