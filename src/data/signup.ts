/**
 * Sign-up page copy. Mirrors signin.ts so the two pages stay visually
 * consistent — change SSO providers in signin.ts and import them here.
 */

import { ssoProviders } from "./signin";

// Re-export so signup.astro can import from a single module.
export { ssoProviders };

// ─── Left column (form) ───────────────────────────────────────────────────
export const form = {
  title: "Start shipping in 60 seconds.",
  signinPrompt: "Already have an account?",
  signinLink: { href: "/signin", label: "Sign in →" },
  nameLabel: "Full name",
  namePlaceholder: "Ada Lovelace",
  emailLabel: "Work email",
  emailPlaceholder: "you@company.com",
  passwordLabel: "Password",
  passwordPlaceholder: "At least 12 characters",
  termsLabel:
    'I agree to the <a href="/terms" class="text-text underline underline-offset-2">Terms</a> and <a href="/privacy" class="text-text underline underline-offset-2">Privacy Policy</a>.',
  submitLabel: "Create account",
  ssoBlurb: "Your team uses SAML SSO?",
  ssoLink: { href: "#sso", label: "Sign up with SSO →" },
  divider: "or with email",
  backToSite: "Back to site",
  // Reassurance row, shown above the submit button.
  bullets: [
    "Free forever, no credit card required",
    "Up to 3 projects on the Free plan",
    "Cancel or upgrade any time",
  ],
};

// ─── Right column (visual) ────────────────────────────────────────────────
// Same layered cards as signin, but the copy targets a brand-new user.
export const sidePanel = {
  tagline: 'Ship in <em class="text-red-500 not-italic">60 seconds</em>, not 60 days.',
  description:
    "Postgres, edge functions, and observability — wired up before your coffee finishes brewing.",
  // Terminal mockup. Walks through the very first deploy.
  terminal: {
    breadcrumb: "~/hello-lambda  ·  main",
    lines: [
      { kind: "cmd" as const, text: "lambda init" },
      { kind: "comment" as const, text: "# scaffolding · postgres + 1 function" },
      { kind: "ok" as const, text: 'wrote <span class="text-blue-400">lambda.config.ts</span>' },
      { kind: "cmd" as const, text: "lambda deploy" },
      { kind: "ok" as const, text: "live in 38 regions · 41s" },
    ],
  },
  // Welcome card — "your first project" instead of an active production deploy.
  deployCard: {
    title: "Your first project",
    badge: "ready",
    rows: [
      { label: "Plan", value: "Free · forever", accent: true },
      { label: "Postgres", value: "1 GB included" },
      { label: "Functions", value: "100k req/mo" },
      { label: "Regions", value: "all 38" },
      { label: "Setup time", value: "~ 60s" },
    ],
  },
  // Progress / "first request" pulse.
  pulse: {
    title: "First requests",
    rate: "✓ live",
    bars: [10, 18, 14, 28, 22, 40, 30, 52, 36, 64, 48, 78, 60, 88, 100],
    leftLabel: "deploy",
    rightLabel: "now",
  },
};

// ─── Footer ────────────────────────────────────────────────────────────────
export const footer = {
  copyright: "© 2026 Lambda Systems, Inc.",
  links: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
    { href: "#status", label: "● All systems normal" },
  ],
};
