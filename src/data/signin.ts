/**
 * Sign-in page copy.
 * Sténtor does not currently use public accounts; this page redirects users
 * toward access requests and project contact while keeping the route coherent.
 */

// ─── Left column (form) ───────────────────────────────────────────────────
export const form = {
  title: "Sténtor access.",
  signupPrompt: "Need to test Sténtor?",
  signupLink: { href: "/signup", label: "Request a code →" },
  emailLabel: "Email",
  emailPlaceholder: "you@example.com",
  emailPrefill: "operator@theatre.example",
  passwordLabel: "Access code",
  passwordPlaceholder: "••••••••••••",
  forgotLink: { href: "/contact", label: "Contact the project" },
  rememberLabel: "Remember this device for future rehearsals",
  submitLabel: "Continue",
  ssoBlurb: "No public account yet?",
  ssoLink: { href: "/signup", label: "Request access instead →" },
  divider: "or continue with project access",
  backToSite: "Back to site",
};

// ─── Access providers ─────────────────────────────────────────────────────
type SsoProvider = { id: "google" | "github" | "microsoft"; label: string };

export const ssoProviders: { compact: SsoProvider[]; wide: SsoProvider } = {
  compact: [
    { id: "google", label: "Google" },
    { id: "github", label: "GitHub" },
  ],
  wide: { id: "microsoft", label: "Continue with Microsoft" },
};

// ─── Right column (visual) ────────────────────────────────────────────────
export const sidePanel = {
  tagline: 'One project. <em class="text-red-500 not-italic">Many live outputs.</em>',
  description:
    "Prepare a performance text once, then cue it for screens, audience phones, translations and audio-description notes.",
  terminal: {
    breadcrumb: "~/stentor · macbett",
    lines: [
      { kind: "cmd" as const, text: "open project Macbett" },
      { kind: "comment" as const, text: "# surtitles · translation · audio description" },
      { kind: "ok" as const, text: "operator view ready" },
      { kind: "ok" as const, text: "2 screens connected" },
      { kind: "ok" as const, text: "18 audience phones following" },
    ],
  },
  deployCard: {
    title: "Live room",
    badge: "ready",
    rows: [
      { label: "Project", value: "Macbett", accent: true },
      { label: "Cue", value: "024 / live" },
      { label: "Languages", value: "IT · EN" },
      { label: "Screens", value: "2 synced" },
      { label: "Audience", value: "18 phones" },
    ],
  },
  pulse: {
    title: "Cue rhythm",
    rate: "live",
    bars: [32, 58, 22, 78, 44, 90, 28, 64, 38, 72, 50, 86, 42, 68, 100],
    leftLabel: "start",
    rightLabel: "now",
  },
};

// ─── Footer ────────────────────────────────────────────────────────────────
export const footer = {
  copyright: "© 2026 Sténtor",
  links: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
    { href: "/contact", label: "● Feedback welcome" },
  ],
};
