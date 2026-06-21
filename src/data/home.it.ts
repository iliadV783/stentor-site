/**
 * Italian homepage content for Sténtor.
 */

export const hero = {
  eyebrow: "Aggiornamento v0.1.75 · Audiodescrizione dal vivo e prima infrastruttura cloud reale",
  title:
    'Soprattitoli, traduzione <em class="not-italic text-text-3 font-medium">e audiodescrizioni.</em><br class="hidden sm:inline" /> Dal vivo.',
  description:
    "Un ambiente di regia per preparare i testi, coordinare lingue e audiodescrizioni, sincronizzare schermi e dispositivi del pubblico, raccogliere questionari e lavorare in cloud durante prove e spettacoli.",
  ctas: [
    { href: "/it/download", label: "Scarica Sténtor", variant: "primary" as const },
    { href: "/it/richiedi-prova", label: "Attiva gratuitamente", variant: "ghost" as const, icon: "play" as const },
  ],
  trust: [
    { label: "Uso gratuito", live: true },
    { label: "Disponibile per Mac, Windows e Linux" },
    { label: "Progettato per la ricerca" },
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
      { t: "12:04:24", lvl: "info", code: "AD", m: "nota di audiodescrizione · ", s: "pronta" },
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
    "Sténtor organizza il testo di scena dalla preparazione alla regia live, con strumenti per schermi, telefoni del pubblico, accessibilità e lavoro in più lingue.",
  items: [
    { value: "Free", suffix: "", label: "Sténtor è gratuito per macOS, Windows e Linux" },
    { value: "5", suffix: "", label: "lingue disponibili sul sito; app progettata per interfaccia multilingue" },
    { value: "Live Sync", suffix: "", label: "Per schermi e telefoni del pubblico" },
  ],
};

export const bento = {
  title: "Un solo Sténtor.<br/>Due modi di lavorare.",
  description:
    "Inizia con l’app leggera multipiattaforma, poi attiva gratuitamente l’ambiente completo quando prove, schermi, timeline, pubblico e audiodescrizioni richiedono un flusso live dedicato.",
  cards: {
    types: { title: "Sténtor Lite: inizia ovunque", desc: "App gratuita Tauri per macOS, Windows e Linux, pensata per rendere accessibili preparazione del testo, soprattitoli e traduzioni senza barriera di licenza." },
    p95: { title: "Sténtor: cabina di regia", desc: "App completa e gratuita per prove e spettacoli, con cueing, timeline, schermi, dispositivi del pubblico e audiodescrizioni su piattaforme desktop." },
    edge: { title: "Telefoni del pubblico sincronizzati", desc: "Le persone in sala possono collegarsi con il proprio smartphone e seguire soprattitoli, traduzioni o audiodescrizioni in sincronia con la regia." },
    auth: { title: "Sito in 5 lingue", desc: "Il sito è disponibile in italiano, inglese, francese, spagnolo e tedesco. L’app Sténtor è progettata per un’interfaccia multilingue estesa." },
    cron: { title: "Importare, esportare, far circolare", desc: "Importa file Word, TXT, SRT, WebVTT, CSV o JSON, poi condividi i materiali per prove, archivio, tournée e studio." },
    migrations: { title: "Vista regia chiara", desc: "Avanza tra i cue durante lo spettacolo con un’interfaccia progettata per timing, concentrazione e sicurezza." },
    deploys: { title: "Attivazione gratuita", desc: "L’attivazione gratuita ci aiuta a capire dove Sténtor viene usato, dare supporto e continuare lo sviluppo in modo sostenibile." },
  },
};

export const testimonials = {
  title: "Uno strumento modellato da<br/>spettacoli reali.",
  description:
    "Sténtor si sviluppa con chi lo usa: artiste, operatori, traduttrici, teatri e pubblico. L’accesso resta gratuito; l’attivazione serve a seguire il progetto, raccogliere feedback e migliorare gli strumenti nei contesti reali.",
  quotes: [
    { text: "Usa Lite per iniziare a preparare i materiali e capire il flusso di lavoro senza alcuna barriera economica.", av: "01", name: "Inizia con Lite", role: "App gratuita · macOS, Windows, Linux" },
    { text: "Attiva gratuitamente Sténtor quando lo spettacolo richiede vista regia, timeline, schermi, dispositivi del pubblico e un setup live professionale.", av: "02", name: "Attiva Sténtor", role: "Accesso gratuito · uso completo" },
    { text: "Note da prove, pubblico e operatori aiutano a progettare strumenti migliori per lo spettacolo dal vivo.", av: "03", name: "Migliora la ricerca", role: "Feedback · sviluppo" },
  ],
};

const liteFeatures = ["App desktop gratuita", "Sviluppata con Tauri", "Per macOS, Windows e Linux", "Preparazione testi, soprattitoli e traduzioni", "Download libero, senza pagamento"];
const stentorFeatures = ["App desktop completa gratuita", "Attivazione gratuita", "Prevista per macOS, Windows e Linux", "Timeline, cueing e vista regia live", "Schermi e telefoni del pubblico", "Audiodescrizioni e strumenti di accessibilità"];
const institutionFeatures = ["Per teatri, festival e scuole", "Attivazioni gratuite per più postazioni", "Supporto durante testing e prove", "Guida alla configurazione in spazi reali", "Feedback utile allo sviluppo del progetto"];

export const pricingPreview = {
  title: "Sténtor è gratuito.<br/>Attivalo per aiutarci a svilupparlo.",
  comparisonLink: { href: "/it/download", label: "Perché chiediamo l’attivazione →" },
  plans: [
    { name: "Sténtor Lite", tag: "Gratis", price: "Lite", cycle: "/multipiattaforma", tagline: "Per iniziare, preparare e sperimentare senza barriere.", features: liteFeatures, cta: { href: "/it/download", label: "Scarica Lite", variant: "ghost" as const }, highlighted: false },
    { name: "Sténtor", tag: "Gratis", tagAccent: true, price: "Completo", cycle: "/attivazione", tagline: "Per la produzione live: resta gratuito, chiediamo solo un’attivazione per seguire e sostenere lo sviluppo.", features: stentorFeatures, cta: { href: "/it/richiedi-prova", label: "Attiva gratuitamente", variant: "primary" as const }, highlighted: true },
    { name: "Istituzioni", tag: "Supporto", price: "Spazi", cycle: "/uso reale", tagline: "Per teatri, festival, scuole e organizzazioni che vogliono usare Sténtor in contesti reali.", features: institutionFeatures, cta: { href: "/it/contact", label: "Scrivici", variant: "ghost" as const }, highlighted: false },
  ],
};

export const finalCta = {
  variant: "borderY" as const,
  paddingY: "py-24 md:py-[120px]",
  gap: "gap-6",
  eyebrow: "Sténtor Lite · Sténtor",
  title: "Scarica liberamente. Attiva gratuitamente.",
  body: "Sténtor resta gratuito per tutte e tutti. L’attivazione gratuita ci aiuta a seguire l’uso reale, dare supporto e continuare lo sviluppo.",
  ctas: [
    { href: "/it/download", label: "Scarica Sténtor", variant: "primary" as const },
    { href: "/it/richiedi-prova", label: "Attiva gratuitamente", variant: "ghost" as const },
  ],
};