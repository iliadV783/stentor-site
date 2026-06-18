export const defaultLocale = "en" as const;

export const locales = ["en", "it", "fr", "es", "de"] as const;
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  it: "Italiano",
  fr: "Français",
  es: "Español",
  de: "Deutsch",
};

export const localeNames: Record<Locale, string> = {
  en: "English",
  it: "Italiano",
  fr: "French",
  es: "Spanish",
  de: "German",
};

export const ogLocales: Record<Locale, string> = {
  en: "en_US",
  it: "it_IT",
  fr: "fr_FR",
  es: "es_ES",
  de: "de_DE",
};

type RouteMap = Record<Locale, string>;

export const routeMap: Record<string, RouteMap> = {
  "/": { en: "/", it: "/it/", fr: "/fr/", es: "/es/", de: "/de/" },
  "/features": { en: "/features", it: "/it/features/", fr: "/fr/features/", es: "/es/features/", de: "/de/features/" },
  "/docs": { en: "/docs", it: "/it/docs/", fr: "/fr/docs/", es: "/es/docs/", de: "/de/docs/" },
  "/blog": { en: "/blog/", it: "/it/blog/", fr: "/fr/blog/", es: "/es/blog/", de: "/de/blog/" },
  "/changelog": { en: "/changelog/", it: "/it/changelog/", fr: "/fr/changelog/", es: "/es/changelog/", de: "/de/changelog/" },
  "/for-theatres": { en: "/for-theatres", it: "/it/for-theatres/", fr: "/fr/for-theatres/", es: "/es/for-theatres/", de: "/de/for-theatres/" },
  "/customers": { en: "/customers", it: "/it/customers/", fr: "/fr/customers/", es: "/es/customers/", de: "/de/customers/" },
  "/download": { en: "/download", it: "/it/download/", fr: "/fr/download/", es: "/es/download/", de: "/de/download/" },
  "/request-pro": { en: "/request-pro", it: "/it/richiedi-prova/", fr: "/fr/demander-essai/", es: "/es/solicitar-prueba/", de: "/de/testzugang/" },
  "/richiedi-prova": { en: "/request-pro", it: "/it/richiedi-prova/", fr: "/fr/demander-essai/", es: "/es/solicitar-prueba/", de: "/de/testzugang/" },
  "/demander-essai": { en: "/request-pro", it: "/it/richiedi-prova/", fr: "/fr/demander-essai/", es: "/es/solicitar-prueba/", de: "/de/testzugang/" },
  "/solicitar-prueba": { en: "/request-pro", it: "/it/richiedi-prova/", fr: "/fr/demander-essai/", es: "/es/solicitar-prueba/", de: "/de/testzugang/" },
  "/testzugang": { en: "/request-pro", it: "/it/richiedi-prova/", fr: "/fr/demander-essai/", es: "/es/solicitar-prueba/", de: "/de/testzugang/" },
  "/accesso": { en: "/accesso", it: "/it/accesso/", fr: "/fr/acces/", es: "/es/acceso/", de: "/de/zugang/" },
  "/acces": { en: "/accesso", it: "/it/accesso/", fr: "/fr/acces/", es: "/es/acceso/", de: "/de/zugang/" },
  "/acceso": { en: "/accesso", it: "/it/accesso/", fr: "/fr/acces/", es: "/es/acceso/", de: "/de/zugang/" },
  "/zugang": { en: "/accesso", it: "/it/accesso/", fr: "/fr/acces/", es: "/es/acceso/", de: "/de/zugang/" },
  "/account": { en: "/account", it: "/it/account/", fr: "/fr/account/", es: "/es/account/", de: "/de/account/" },
  "/contact": { en: "/contact", it: "/it/contact/", fr: "/fr/contact/", es: "/es/contact/", de: "/de/contact/" },
  "/pricing": { en: "/pricing", it: "/it/pricing/", fr: "/fr/pricing/", es: "/es/pricing/", de: "/de/pricing/" },
  "/about": { en: "/about", it: "/it/about/", fr: "/fr/about/", es: "/es/about/", de: "/de/about/" },
  "/privacy": { en: "/privacy/", it: "/it/privacy/", fr: "/fr/privacy/", es: "/es/privacy/", de: "/de/privacy/" },
  "/terms": { en: "/terms/", it: "/it/terms/", fr: "/fr/terms/", es: "/es/terms/", de: "/de/terms/" },
};

const localePrefixPattern = new RegExp(`^/(${locales.filter((locale) => locale !== defaultLocale).join("|")})(?=/|$)`);

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

export function getLocaleFromPath(pathname: string): Locale {
  const [, maybeLocale] = pathname.match(localePrefixPattern) ?? [];
  return isLocale(maybeLocale) ? maybeLocale : defaultLocale;
}

export function stripLocaleFromPath(pathname: string): string {
  const withoutLocale = pathname.replace(localePrefixPattern, "") || "/";
  const withoutTrailingSlash = withoutLocale.replace(/\/$/, "");
  return withoutTrailingSlash || "/";
}

export function getRouteMapForPath(pathname: string): RouteMap {
  const basePath = stripLocaleFromPath(pathname);
  return routeMap[basePath] ?? routeMap["/"];
}

export function getLocalizedPath(pathname: string, locale: Locale): string {
  return getRouteMapForPath(pathname)[locale];
}

export function getAlternateLinks(pathname: string, site?: URL | string | null) {
  const origin = site?.toString().replace(/\/$/, "") ?? "";
  const currentRouteMap = getRouteMapForPath(pathname);

  return locales.map((locale) => ({
    locale,
    href: origin ? new URL(currentRouteMap[locale], origin).toString() : currentRouteMap[locale],
  }));
}
