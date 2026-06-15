/**
 * Italian homepage content for Sténtor.
 */

export const hero = {
  eyebrow: "Ecosistema Sténtor · Lite e Pro",
  title:
    'Soprattitoli, traduzione <em class="not-italic text-text-3 font-medium">e accessibilità.</em><br class="hidden sm:inline" /> Dal vivo.',
  description:
    "Sténtor è un ambiente testuale per lo spettacolo dal vivo: permette di preparare copioni, mandare in scena soprattitoli, gestire traduzioni, audio-descrizione e accesso del pubblico durante prove e spettacoli.",
  ctas: [
    { href: "/it/download", label: "Scarica Sténtor", variant: "primary" as const },
    { href: "/it/richiedi-prova", label: "Accedi alla beta Pro", variant: "ghost" as const, icon: "play" as const },
  ],
  trust: [
    { label: "Lite: app gratuita multipiattaforma", live: true },
    { label: "Pro: app professionale per macOS, Windows e Linux" },
    { label: "Soprattitoli · traduzione · audio-descrizione · pubblico" },
  ],
  mock: {
    workspace: { name: "Macbett", env: "Prova live · rete locale" },
    user: { name: "Regia", email: "18 telefoni del pubblico sincronizzati" },
    title: "Vista regia",
    timeframe: { prefix: "progetto / ", value: "Macbett" },
    stats: [
      { label: "Cue corrente", value: "024", trend: "live", trendColor: "green" as const },
      { label: "Telefoni", value: "18", trend: "seguono", trendColor: "green" as const },
      { label: "Schermi", value: "2", trend: "sync", trendColor: "green" as const },
      { label: "Lingue", value: "IT · EN", trend: "pronte", trendColor: "green" as const },
    ],
    currentCue: { label: "Cue corrente", text: "La tragedia è qui, Belcredi! Aver qua, fissa, la commedia!", meta: "Soprattitoli italiani · schermo 1" },
    nextCue: { label: "Cue successivo", text: "What hands are here?", meta: "Fonte italiana · anteprima regia" },
    logs: [
      { t: "12:04:21", lvl: "ok", code: "cue", m: "024 inviato agli schermi · ", s: "live" },
      { t: "12:04:22", lvl: "ok", code: "web", m: "18 telefoni del pubblico · ", s: "sync" },
      { t: "12:04:24", lvl: "info", code: "AD", m: "nota di audio-descrizione · ", s: "pronta" },
      { t: "12:04:30", lvl: "ok", code: "fb", m: "canale feedback · ", s: "aperto" },
      { t: "12:04:34", lvl: "warn", code: "next", m: "anteprima cue 025 · ", s: "attesa" },
    ],
  },
};

export const logoCloud = {
  label: "UN ECOSISTEMA, DUE APP DESKTOP",
  bigNumber: "3 OS",
  logos: [
    { name: "Sténtor Lite", glyph: "rounded-full" },
    { name: "Sténtor", glyph: "rotate-45" },
    { name: "macOS", glyph: "" },
    { name: "Windows", glyph: "[clip-path:polygon(50%_0,100%_100%,0_100%)]" },
    { name: "Linux", glyph: "rounded" },
    { name: "Telefoni del pubblico", glyph: "rounded-full border-2 border-zinc-300 bg-transparent" },
  ],
};

export const metrics = {
  title: "Pensato per<br/>lo spettacolo dal vivo.",
  description:
    "Sténtor organizza il testo di scena dalla preparazione alla regia live, distinguendo un ingresso gratuito multipiattaforma da un flusso professionale destinato alle principali piattaforme desktop.",
  items: [
    { value: "Lite", suffix: "", label: "App gratuita Tauri per macOS, Windows e Linux" },
    { value: "Pro", suffix: "", label: "App professionale live per macOS, Windows e Linux" },
    { value: "Live Sync", suffix: "", label: "Per schermi e telefoni del pubblico" },
  ],
};

export const bento = {
  title: "Un solo Sténtor.<br/>Due modi di lavorare.",
  description:
    "Inizia con l’app leggera multipiattaforma, poi passa all’ambiente professionale quando prove, schermi, timeline, pubblico e audio-descrizione richiedono un flusso live dedicato.",
  cards: {
    types: { title: "Sténtor Lite: inizia ovunque", desc: "App gratuita Tauri per macOS, Windows e Linux, pensata per rendere accessibili preparazione del testo, soprattitoli e traduzioni senza barriera di licenza." },
    p95: { title: "Sténtor: cabina di regia", desc: "App professionale per prove e spettacoli, con cueing, timeline, schermi, dispositivi del pubblico e audio-descrizione su piattaforme desktop." },
    edge: { title: "Telefoni del pubblico sincronizzati", desc: "Le persone in sala possono collegarsi con il proprio smartphone e seguire soprattitoli, traduzioni o audio-descrizioni in sincronia con la regia." },
    auth: { title: "Un progetto, conoscenza condivisa", desc: "Tieni insieme testo originale, traduzioni, soprattitoli, note di audio-descrizione, metadati di progetto e feedback di ricerca." },
    cron: { title: "Importare, esportare, far circolare", desc: "Importa file Word, TXT, SRT, WebVTT, CSV o JSON, poi condividi i materiali per prove, archivio, tournée e studio." },
    migrations: { title: "Vista regia chiara", desc: "Avanza tra i cue durante lo spettacolo con un’interfaccia progettata per timing, concentrazione e sicurezza." },
    deploys: { title: "Beta privata per Pro", desc: "Durante il testing, l’accesso Pro resta controllato per offrire supporto, licenze e istruzioni di attivazione in modo sicuro." },
  },
};

export const testimonials = {
  title: "Uno strumento modellato da<br/>spettacoli reali.",
  description:
    "Sténtor si sviluppa con chi lo usa: artiste, operatori, traduttrici, teatri e pubblico. Lite mantiene l’accesso aperto; Pro cresce attraverso beta test in contesti reali e non sarà limitato a un solo sistema operativo.",
  quotes: [
    { text: "Usa Lite per iniziare a preparare i materiali e capire il flusso di lavoro prima di portare Sténtor in produzione.", av: "01", name: "Inizia con Lite", role: "App gratuita · macOS, Windows, Linux" },
    { text: "Usa Pro quando lo spettacolo richiede vista regia, timeline, schermi, dispositivi del pubblico e un setup live professionale.", av: "02", name: "Passa a Pro", role: "App professionale · accesso beta" },
    { text: "Note da prove, pubblico e operatori aiutano a progettare strumenti migliori per lo spettacolo dal vivo.", av: "03", name: "Migliora la ricerca", role: "Feedback · prodotto" },
  ],
};

const liteFeatures = ["App desktop gratuita", "Sviluppata con Tauri", "Per macOS, Windows e Linux", "Preparazione testi, soprattitoli e traduzioni", "Download senza licenza Pro"];
const proFeatures = ["App desktop professionale", "Prevista per macOS, Windows e Linux", "Timeline, cueing e vista regia live", "Schermi e telefoni del pubblico", "Audio-descrizione e strumenti di accessibilità", "Licenza beta privata e attivazione"];
const institutionFeatures = ["Per teatri, festival e scuole", "Licenze di prova e multi-postazione", "Supporto durante testing e prove", "Guida alla configurazione in spazi reali", "Area account pronta per il futuro acquisto online"];

export const pricingPreview = {
  title: "Scegli il percorso<br/>Sténtor giusto.",
  comparisonLink: { href: "/it/download", label: "Confronta Lite e Pro →" },
  plans: [
    { name: "Sténtor Lite", tag: "Gratis", price: "Lite", cycle: "/multipiattaforma", tagline: "Per iniziare, preparare e sperimentare senza barriera di licenza.", features: liteFeatures, cta: { href: "/it/download", label: "Scarica Lite", variant: "ghost" as const }, highlighted: false },
    { name: "Sténtor", tag: "Beta", tagAccent: true, price: "Pro", cycle: "/multipiattaforma", tagline: "Per produzione live professionale, ora disponibile in beta controllata.", features: proFeatures, cta: { href: "/it/richiedi-prova", label: "Richiedi accesso Pro", variant: "primary" as const }, highlighted: true },
    { name: "Istituzioni", tag: "Team", price: "Team", cycle: "/spazi", tagline: "Per teatri, festival, scuole e organizzazioni che preparano un uso reale.", features: institutionFeatures, cta: { href: "/it/contact", label: "Parliamone", variant: "ghost" as const }, highlighted: false },
  ],
};

export const finalCta = {
  variant: "borderY" as const,
  paddingY: "py-24 md:py-[120px]",
  gap: "gap-6",
  eyebrow: "Sténtor Lite · Sténtor Pro",
  title: "Inizia liberamente. Vai in scena professionalmente.",
  body: "Scarica Sténtor Lite per iniziare su macOS, Windows o Linux. Richiedi accesso a Sténtor Pro quando serve un ambiente professionale per prove e spettacoli.",
  ctas: [
    { href: "/it/download", label: "Scarica Sténtor", variant: "primary" as const },
    { href: "/it/richiedi-prova", label: "Accedi alla beta Pro", variant: "ghost" as const },
  ],
};