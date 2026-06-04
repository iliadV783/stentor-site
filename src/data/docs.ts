/**
 * Docs navigation: sidebar groups + on-this-page TOC.
 * The body of the Quickstart page lives in docs.astro because it's example
 * content the client will replace wholesale when they write their own docs.
 */

export type DocsSidebarItem = {
  label: string;
  href: string;
  active?: boolean;
  badge?: string;
  // When true the badge uses the accent color (e.g. "new")
  badgeNew?: boolean;
};

export type DocsSidebarGroup = {
  title: string;
  items: DocsSidebarItem[];
};

export const sidebarGroups: DocsSidebarGroup[] = [
  {
    title: "Get started",
    items: [
      { label: "Introduction", href: "#" },
      { label: "Quickstart", href: "#", active: true },
      { label: "Project structure", href: "#" },
      { label: "CLI reference", href: "#", badge: "beta" },
      { label: "Migrating from v1", href: "#" },
    ],
  },
  {
    title: "Core",
    items: [
      { label: "Schemas & models", href: "#" },
      { label: "Generated clients", href: "#" },
      { label: "Edge functions", href: "#", badge: "new", badgeNew: true },
      { label: "Background jobs", href: "#" },
      { label: "Cron triggers", href: "#" },
      { label: "Webhooks", href: "#" },
    ],
  },
  {
    title: "Database",
    items: [
      { label: "Postgres on Lambda", href: "#" },
      { label: "Migrations", href: "#" },
      { label: "Row-level policies", href: "#" },
      { label: "Backups & PITR", href: "#" },
      { label: "Branching", href: "#" },
    ],
  },
  {
    title: "Auth",
    items: [
      { label: "Identity providers", href: "#" },
      { label: "SAML & OIDC", href: "#" },
      { label: "Passkeys", href: "#" },
      { label: "Session management", href: "#" },
    ],
  },
  {
    title: "Observability",
    items: [
      { label: "Traces", href: "#" },
      { label: "Logs", href: "#" },
      { label: "Metrics", href: "#" },
      { label: "Alerts & SLOs", href: "#" },
    ],
  },
  {
    title: "Reference",
    items: [
      { label: "REST API", href: "#" },
      { label: "TypeScript SDK", href: "#" },
      { label: "Go SDK", href: "#" },
      { label: "Python SDK", href: "#" },
      { label: "Errors", href: "#" },
    ],
  },
];

export const tocItems = [
  { label: "Prerequisites", href: "#prerequisites" },
  { label: "1. Install the CLI", href: "#install", active: true },
  { label: "2. Initialize a project", href: "#init" },
  { label: "3. Define your first model", href: "#define-model" },
  { label: "4. Endpoint reference", href: "#endpoints" },
  { label: "POST /v1/orders", href: "#endpoints", sub: true },
  { label: "5. Deploy to production", href: "#deploy" },
];

// Right-rail action links shown below the TOC.
export const tocActions = [
  { href: "#", label: "Edit this page", icon: "edit" as const },
  { href: "#", label: "Open in playground", icon: "playground" as const },
  { href: "#", label: "Ask in Discord", icon: "message-circle" as const },
];

// Page metadata shown above the H1.
export const pageMeta = {
  breadcrumb: [
    { href: "#", label: "Docs" },
    { href: "#", label: "Get started" },
    { label: "Quickstart" }, // last item: bold, no link
  ],
  maintainer: "Maintained by the SDK team",
  lastUpdated: "Last updated April 28, 2026",
  readingTime: "Reading time: 6 min",
};
