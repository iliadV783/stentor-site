/**
 * Italian homepage content for Sténtor.
 * Same data shape as src/data/home.ts, so the visual structure can remain identical.
 */

export const hero = {
  eyebrow: "v. 0.1.64 – Live Sync",
  title:
    'Sopratitoli, traduzione <em class="not-italic text-text-3 font-medium">e audio descrizione.</em><br class="hidden sm:inline" /> Dal vivo.',
  description:
    "Sténtor offre a teatri, artiste, artisti e gruppi di spettacolo dal vivo un modo semplice per preparare e condividere sopratitoli, traduzioni e audio descrizioni — con gli stessi strumenti essenziali disponibili per tutti.",
  ctas: [
    { href: "/it/download", label: "Scarica Sténtor", variant: "primary" as const },
    { href: "/it/docs", label: "Leggi il flusso di lavoro", variant: "ghost" as const, icon: "play" as const },
  ],
  trust: [
    { label: "Gratis da provare · nessun account richiesto", live: true },
    { label: "App desktop multipiattaforma" },
    { label: "Client web per il pubblico · Live Sync · Ricerca" },
  ],
  mock: {
    workspace: { name: "Macbett", env: "Prova live · rete locale" },
    user: { name: "Regia", email: "18 telefoni del pubblico sincronizzati" },
    title: "Vista regia",
    timeframe: { prefix: "progetto / ", value: "Macbett" },
    stats: [
      { label: "Cue corrente", value: "024", trend: "live", trendColor: "green" as const },
      { label: "Telefoni", value: "18", trend: "seguono", trendColor: "green" as const },
      { label: "Schermi", value: "2", trend: "sincronizzati", trendColor: "green" as const },
      { label: "Lingue", value: "IT · EN", trend: "pronte", trendColor: "green" as const },
    ],
    currentCue: {
      label: "Cue corrente",
      text: "O my country, poor country!",
      meta: "Sopratitoli inglesi · schermo 1",
    },
    nextCue: {
      label: "Cue successivo",
      text: "What hands are here?",
      meta: "Fonte italiana · anteprima regia",
    },
    logs: [
      { t: "12:04:21", lvl: "ok", code: "cue", m: "024 inviato agli schermi · ", s: "live" },
      { t: "12:04:22", lvl: "ok", code: "web", m: "18 telefoni del pubblico · ", s: "sync" },
      { t: "12:04:24", lvl: "info", code: "AD", m: "nota di audio descrizione · ", s: "pronta" },
      { t: "12:04:30", lvl: "ok", code: "fb", m: "canale feedback · ", s: "aperto" },
      { t: "12:04:34", lvl: "warn", code: "next", m: "anteprima cue 025 · ", s: "attesa" },
    ],
  },
};

export const logoCloud = {
  label: "UN TESTO, MOLTI MODI DI RICEVERLO",
  bigNumber: "10,000+",
  logos: [
    { name: "Sopratitoli", glyph: "rounded-full" },
    { name: "Traduzione", glyph: "rotate-45" },
    { name: "Audio descrizione", glyph: "" },
    { name: "Schermi", glyph: "[clip-path:polygon(50%_0,100%_100%,0_100%)]" },
    { name: "Telefoni del pubblico", glyph: "rounded" },
    { name: "Feedback", glyph: "rounded-full border-2 border-zinc-300 bg-transparent" },
  ],
};

export const metrics = {
  title: "Pensato per<br/>lo spettacolo dal vivo.",
  description:
    "Dalla preparazione del copione alla regia live, Sténtor tiene ogni livello del testo di scena in un unico luogo.",
  items: [
    { value: "Illimitati", suffix: "", label: "Progetti, lingue e cue" },
    { value: "3", suffix: " livelli", label: "Sopratitoli, traduzione, audio descrizione" },
    { value: "Live Sync", suffix: "", label: "Per schermi e telefoni del pubblico" },
  ],
};

export const bento = {
  title: "Tutto per il testo.<br/>Niente che intralci.",
  description:
    "Prepara copioni, traduzioni, sopratitoli e note di audio descrizione in uno spazio di lavoro concentrato, poi mandali in scena dal vivo su schermi e telefoni del pubblico.",
  cards: {
    types: {
      title: "Flusso di lavoro centrato sul copione",
      desc: "Importa un copione, dividilo in cue, aggiungi traduzioni e tieni insieme le note senza perdere la struttura del testo di scena.",
    },
    p95: {
      title: "Telefoni del pubblico sincronizzati dal vivo",
      desc: "Le persone in sala possono collegarsi con il proprio smartphone e seguire sopratitoli, traduzioni o audio descrizioni in sincronia con i cue della regia.",
    },
    edge: {
      title: "Pensato per gli spazi dal vivo",
      desc: "Un flusso di lavoro essenziale per sale prova, teatri e festival — dalla preparazione del copione alla regia live e ai dispositivi del pubblico.",
    },
    auth: {
      title: "Un progetto, conoscenza condivisa",
      desc: "Tieni insieme testo originale, traduzioni, sopratitoli, note di audio descrizione, metadati di progetto e feedback di ricerca.",
    },
    cron: {
      title: "Importare, esportare, far circolare",
      desc: "Importa file Word, TXT, SRT, WebVTT, CSV o JSON, poi condividi i materiali per prove, archivio, tournée e studio.",
    },
    migrations: {
      title: "Vista regia chiara",
      desc: "Avanza tra i cue durante lo spettacolo con un’interfaccia progettata per timing, concentrazione e sicurezza.",
    },
    deploys: {
      title: "Stessi strumenti, pratica condivisa",
      desc: "Gli strumenti essenziali per lo spettacolo dal vivo restano disponibili. Il supporto economico dipende dal contesto, mentre i feedback aiutano tutto il progetto a crescere.",
    },
  },
};

export const testimonials = {
  title: "Uno strumento modellato da<br/>spettacoli reali.",
  description:
    "Sténtor si sviluppa insieme alle persone che lo usano. Manteniamo il software accessibile e chiediamo in cambio note d’uso, osservazioni pratiche e risposte del pubblico quando possono aiutare la ricerca.",
  quotes: [
    {
      text: "Raccontaci come Sténtor ha funzionato in prova, durante lo spettacolo e nella relazione tra regia, scena e pubblico.",
      av: "01",
      name: "Condividi la tua esperienza",
      role: "Ricerca · creatrici e creatori",
    },
    {
      text: "Le risposte del pubblico aiutano a capire come sopratitoli, traduzioni e audio descrizioni vengono vissuti sui dispositivi personali.",
      av: "02",
      name: "Raccogli feedback dal pubblico",
      role: "Ricerca · pubblico",
    },
    {
      text: "Note d’uso anonime e osservazioni concrete ci aiutano a progettare strumenti migliori senza chiudere le funzioni dietro piani superiori.",
      av: "03",
      name: "Migliora la ricerca",
      role: "Ricerca · prodotto",
    },
  ],
};

const fullFeatureSet = [
  "Stesse funzioni essenziali per tutti",
  "Progetti, lingue e cue illimitati",
  "Sopratitoli, traduzioni e note di audio descrizione",
  "Import da Word, TXT, SRT, WebVTT, CSV e JSON",
  "Copioni pronti per l’esportazione",
  "Feedback e scambio di ricerca benvenuti",
];

export const pricingPreview = {
  title: "Stesse funzioni.<br/>Sostieni in base alla tua scala.",
  comparisonLink: { href: "/it/pricing", label: "Vedi il modello di supporto →" },
  plans: [
    {
      name: "Free",
      tag: "Indipendente",
      price: "€0",
      cycle: "/anno",
      tagline: "Per artiste e artisti indipendenti, studenti e team molto piccoli che hanno prima di tutto bisogno di accesso.",
      features: fullFeatureSet,
      cta: { href: "/it/download", label: "Scarica gratis", variant: "ghost" as const },
      highlighted: false,
    },
    {
      name: "Pro",
      tag: "Suggerito",
      tagAccent: true,
      price: "€19",
      cycle: "/anno · supporto",
      tagline: "Per compagnie, collettivi e produzioni in tournée che possono contribuire un po’ di più.",
      features: fullFeatureSet,
      cta: { href: "/it/download", label: "Scarica e sostieni", variant: "primary" as const },
      highlighted: true,
    },
    {
      name: "Venues",
      tag: "Teatri",
      price: "€99",
      cycle: "/anno · supporto",
      tagline: "Per teatri, festival, istituzioni e spazi dello spettacolo dal vivo.",
      features: fullFeatureSet,
      cta: { href: "/it/contact", label: "Sostieni come spazio", variant: "ghost" as const },
      highlighted: false,
    },
  ],
};

export const finalCta = {
  variant: "borderY" as const,
  paddingY: "py-24 md:py-[120px]",
  gap: "gap-6",
  eyebrow: "Stessi strumenti · responsabilità condivisa",
  title: "Porta le parole vive a ogni pubblico.",
  body: "Sténtor rende sopratitoli, traduzioni e audio descrizioni semplici da preparare, mandare in scena e condividere. Scaricalo liberamente, usalo in prova o in spettacolo e condividi feedback solo quando hai qualcosa di utile da raccontarci.",
  ctas: [
    { href: "/it/download", label: "Scarica Sténtor", variant: "primary" as const },
    { href: "/it/contact", label: "Condividi note dal campo", variant: "ghost" as const },
  ],
};
