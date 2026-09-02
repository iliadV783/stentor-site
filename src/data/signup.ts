export const form = {
  title: "Download Sténtor.",
  intro: "Before downloading, tell us who you are and how you plan to use Sténtor. This helps us understand real use contexts, improve the project and invite optional feedback after rehearsals or performances.",
  nameLabel: "Full name",
  namePlaceholder: "Your name",
  emailLabel: "Email",
  emailPlaceholder: "you@example.com",
  roleLabel: "How will you use Sténtor?",
  roleOptions: ["Independent artist or researcher", "Company or collective", "Theatre, festival or venue", "Translator or surtitler", "Audio describer", "Technician or operator", "Teacher or workshop leader", "Other"],
  messageLabel: "Context of use",
  messagePlaceholder: "Tell us whether you plan to use Sténtor for a rehearsal, public performance, theatre test, workshop, festival, teaching context or research project.",
  consentLabel: 'I agree to be contacted about Sténtor downloads, updates, optional feedback questionnaires and research-related communication. See the <a href="/privacy" class="text-text underline underline-offset-2">Privacy Policy</a>.',
  submitLabel: "Continue to download",
  backToSite: "Back to site",
  note: "This form helps us understand who downloads Sténtor and for what purpose. It does not create a user account.",
  bullets: ["Download-oriented, not a waiting list", "Same core features for everyone", "Optional feedback helps the project grow"]
};

export const sidePanel = {
  tagline: 'From <em class="text-stentor not-italic">real rooms</em> to better tools.',
  description: "Sténtor grows through rehearsals, theatre tests, audience responses and shared knowledge about live-performance text.",
  terminal: {
    breadcrumb: "~/stentor · download",
    lines: [
      { kind: "cmd", text: "download stentor" },
      { kind: "comment", text: "# surtitles · translation · audio description" },
      { kind: "ok", text: "tell us your use context" },
      { kind: "cmd", text: "test in rehearsal or performance" },
      { kind: "ok", text: "share optional field notes later" }
    ]
  },
  deployCard: {
    title: "Download context",
    badge: "open",
    rows: [
      { label: "Access", value: "download", accent: true },
      { label: "Use", value: "rehearsal · live" },
      { label: "Devices", value: "screens · phones" },
      { label: "Feedback", value: "optional" },
      { label: "License", value: "EUPL direction" }
    ]
  },
  pulse: {
    title: "Field notes",
    rate: "optional",
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
