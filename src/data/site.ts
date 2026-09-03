/**
 * Global site config: brand, nav, footer, social.
 * Edit here and it propagates to <Nav />, <Footer /> and the document <title>.
 */

export const site = {
  name: "Sténtor",
  legalName: "Sténtor",
  title: "Sténtor — Surtitles, translation and audio description for live performance",
  description:
    "Surtitles, translation and audio description for live performance. Prepare scripts, cue live and share with screens and audience phones.",
  url: "https://www.stentor.live",
  locale: "en",
  copyright: "© 2026 Sténtor.",
  statusPrefix: "Built for live performance",
  statusRegions: "surtitles, translation, audio description",
  footerTagline:
    "Surtitles, translation and audio description for live performance.",
  social: {
    github: "https://github.com/iliadV783/stentor-site",
    x: "#",
    discord: "#",
    rss: "#",
  },
} as const;

export type NavId = "features" | "docs" | "customers" | "changelog" | "about";

export const nav: { href: string; label: string; id: NavId }[] = [
  { href: "/about", label: "Project", id: "about" },
  { href: "/features", label: "Features", id: "features" },
  { href: "/docs", label: "Documentation", id: "docs" },
  { href: "/for-theatres", label: "For Theatres", id: "customers" },
];

export const navCta = {
  primary: { href: "/account", label: "Account" },
  secondary: { href: "/download", label: "Download" },
};

export type FooterGroup = {
  title: string;
  links: { href: string; label: string }[];
};

export const footerGroups: FooterGroup[] = [
  {
    title: "Product",
    links: [
      { href: "/features", label: "Features" },
      { href: "/docs", label: "Workflow" },
      { href: "/for-theatres", label: "For Theatres" },
      { href: "/download", label: "Download" },
      { href: "/account", label: "Account" },
    ],
  },
  {
    title: "Use cases",
    links: [
      { href: "/features", label: "Surtitles" },
      { href: "/features", label: "Translation" },
      { href: "/features", label: "Audio description" },
      { href: "/for-theatres", label: "Festivals" },
    ],
  },
  {
    title: "Project",
    links: [
      { href: "/about", label: "About" },
      { href: "/blog", label: "Notes" },
      { href: "/changelog/", label: "Updates" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/cookies", label: "Cookies" },
    ],
  },
];
