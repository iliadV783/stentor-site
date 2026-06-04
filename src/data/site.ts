/**
 * Global site config: brand, nav, footer, social.
 * Edit here and it propagates to <Nav />, <Footer /> and the document <title>.
 */

export const site = {
  name: "Lambda",
  legalName: "Lambda Systems, Inc.",
  title: "Lambda — Ship faster with a typed, observable backend",
  description:
    "Lambda is a typed, observable backend with managed Postgres, edge functions, and built-in analytics.",
  url: "https://lambda-saas.netlify.app",
  locale: "en",
  copyright: "© 2026 Lambda Systems, Inc. · Made in Brooklyn, Berlin, and Bengaluru.",
  // Footer status: "<prefix> · ● <regions>"
  statusPrefix: "All systems normal",
  statusRegions: "us-east, us-west, eu-fra, ap-syd",
  footerTagline:
    "The typed, observable backend platform. Built for teams who would rather ship than babysit YAML.",
  social: {
    github: "#",
    x: "#",
    discord: "#",
    rss: "#",
  },
} as const;

export type NavId = "features" | "pricing" | "changelog" | "docs" | "customers";

export const nav: { href: string; label: string; id: NavId }[] = [
  { href: "/features", label: "Features", id: "features" },
  { href: "/pricing", label: "Pricing", id: "pricing" },
  { href: "/changelog", label: "Changelog", id: "changelog" },
  { href: "/docs", label: "Docs", id: "docs" },
  { href: "/customers", label: "Customers", id: "customers" },
];

export const navCta = {
  primary: { href: "/signup", label: "Start free trial" },
  secondary: { href: "/signin", label: "Sign in" },
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
      { href: "/pricing", label: "Pricing" },
      { href: "/changelog", label: "Changelog" },
      { href: "#roadmap", label: "Roadmap" },
      { href: "#status", label: "Status" },
    ],
  },
  {
    title: "Developers",
    links: [
      { href: "/docs", label: "Documentation" },
      { href: "#sdk", label: "SDK reference" },
      { href: "#examples", label: "Examples" },
      { href: "#cli", label: "CLI" },
      { href: "#open-source", label: "Open source" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "#careers", label: "Careers" },
      { href: "/customers", label: "Customers" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "#dpa", label: "DPA" },
      { href: "#security", label: "Security" },
      { href: "#cookies", label: "Cookies" },
    ],
  },
];
