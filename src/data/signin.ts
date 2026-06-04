/**
 * Sign-in page copy: form labels, SSO providers, side panel demo content.
 */

// ─── Left column (form) ───────────────────────────────────────────────────
export const form = {
  title: "Welcome back.",
  signupPrompt: "Don't have an account yet?",
  signupLink: { href: "/signup", label: "Start a free trial →" },
  emailLabel: "Work email",
  emailPlaceholder: "you@company.com",
  emailPrefill: "priya@northwind.io",
  passwordLabel: "Password",
  passwordPlaceholder: "••••••••••••",
  forgotLink: { href: "#forgot", label: "Forgot password?" },
  rememberLabel: "Keep me signed in for 30 days",
  submitLabel: "Sign in",
  ssoBlurb: "Your team uses SAML SSO?",
  ssoLink: { href: "#sso", label: "Sign in with SSO →" },
  divider: "or with email",
  backToSite: "Back to site",
};

// ─── SSO providers ────────────────────────────────────────────────────────
// Two compact buttons in a 2-col grid, plus one wide button below.
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
  tagline: 'One sign-in. <em class="text-red-500 not-italic">Every region.</em>',
  description:
    "Pick up where your last deploy left off — across 38 regions, 12 environments, and the entire team.",
  // Terminal mockup. `text` is rendered with set:html so inline accents work.
  terminal: {
    breadcrumb: "~/northwind  ·  main",
    lines: [
      { kind: "cmd" as const, text: "lambda deploy --prod" },
      { kind: "comment" as const, text: "# building isolates · 12 functions" },
      { kind: "ok" as const, text: "bundled in 2.4s" },
      { kind: "ok" as const, text: "uploaded 38 regions" },
      { kind: "ok" as const, text: 'live at <span class="text-blue-400">api.northwind.io</span>' },
    ],
  },
  // Deploy card
  deployCard: {
    title: "Production deploy",
    badge: "live",
    rows: [
      { label: "Build", value: "v2.4.0 · a3f8c1", accent: true },
      { label: "Regions", value: "38 / 38" },
      { label: "P95 latency", value: "22ms" },
      { label: "Cold start", value: "28ms" },
      { label: "Deployed by", value: "priya@" },
    ],
  },
  // Pulse / requests-per-second mini chart
  pulse: {
    title: "Requests · last 60s",
    rate: "2,418/s",
    bars: [32, 58, 22, 78, 44, 90, 28, 64, 38, 72, 50, 86, 42, 68, 100],
    leftLabel: "−60s",
    rightLabel: "now",
  },
};

// ─── Footer ────────────────────────────────────────────────────────────────
export const footer = {
  copyright: "© 2026 Lambda Systems, Inc.",
  links: [
    { href: "#privacy", label: "Privacy" },
    { href: "#terms", label: "Terms" },
    { href: "#status", label: "● All systems normal" },
  ],
};
