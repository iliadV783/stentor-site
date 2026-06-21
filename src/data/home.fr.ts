/**
 * French homepage content for Stentor.
 */

export const hero = {
  eyebrow: "Mise a jour v0.1.74 · Audiodescription en direct",
  title:
    'Surtitres, traduction <em class="not-italic text-text-3 font-medium">et audiodescription.</em><br class="hidden sm:inline" /> En direct.',
  description:
    "Un environnement de regie pour preparer les textes, coordonner langues et audiodescriptions, synchroniser ecrans et dispositifs du public, recueillir des questionnaires et travailler dans le cloud pendant repetitions et spectacles.",
  ctas: [
    { href: "/fr/download", label: "Telecharger Stentor", variant: "primary" as const },
    { href: "/fr/demander-essai", label: "Acceder a la beta Pro", variant: "ghost" as const, icon: "play" as const },
  ],
  trust: [
    { label: "Lite : app gratuite multiplateforme", live: true },
    { label: "Pro : app professionnelle pour macOS, Windows et Linux" },
    { label: "Surtitres · traduction · audiodescription · public" },
  ],
  mock: {
    workspace: { name: "Macbett", env: "Repetition live · reseau local" },
    user: { name: "Regie", email: "18 telephones du public synchronises" },
    title: "Vue regie",
    timeframe: { prefix: "projet / ", value: "Macbett" },
    stats: [
      { label: "Cue actuel", value: "024", trend: "live", trendColor: "green" as const },
      { label: "Telephones", value: "18", trend: "suivent", trendColor: "green" as const },
      { label: "Ecrans", value: "2", trend: "sync", trendColor: "green" as const },
      { label: "Langues", value: "IT · EN", trend: "pretes", trendColor: "green" as const },
    ],
    currentCue: { label: "Cue actuel", text: "O my country, poor country!", meta: "Surtitres anglais · ecran 1" },
    nextCue: { label: "Cue suivant", text: "What hands are here?", meta: "Source italienne · apercu regie" },
    logs: [
      { t: "12:04:21", lvl: "ok", code: "cue", m: "024 envoye aux ecrans · ", s: "live" },
      { t: "12:04:22", lvl: "ok", code: "web", m: "18 telephones du public · ", s: "sync" },
      { t: "12:04:24", lvl: "info", code: "AD", m: "note d audiodescription · ", s: "prete" },
      { t: "12:04:30", lvl: "ok", code: "fb", m: "canal de retour · ", s: "ouvert" },
      { t: "12:04:34", lvl: "warn", code: "next", m: "apercu cue 025 · ", s: "attente" },
    ],
  },
};

export const logoCloud = {
  label: "UN ECOSYSTEME, DEUX APPS DESKTOP",
  bigNumber: "3 OS",
  logos: [
    { name: "Stentor Lite", glyph: "rounded-full" },
    { name: "Sténtor", glyph: "rotate-45" },
    { name: "macOS", glyph: "" },
    { name: "Windows", glyph: "[clip-path:polygon(50%_0,100%_100%,0_100%)]" },
    { name: "Linux", glyph: "rounded" },
    { name: "Web public", glyph: "rounded-full border-2 border-zinc-300 bg-transparent" },
  ],
};

export const metrics = {
  title: "Concu pour<br/>le spectacle vivant.",
  description:
    "Stentor organise le texte de scene de la preparation a la regie live, avec des outils pour ecrans, telephones du public, accessibilite et travail multilingue.",
  items: [
    { value: "Lite", suffix: "", label: "App gratuite pour macOS, Windows et Linux" },
    { value: "5", suffix: "", label: "langues sur le site ; app pensee pour une interface multilingue etendue" },
    { value: "Live Sync", suffix: "", label: "Pour ecrans et telephones du public" },
  ],
};

export const bento = {
  title: "Un seul Stentor.<br/>Deux facons de travailler.",
  description:
    "Commencez avec l app legere multiplateforme, puis passez a l environnement professionnel lorsque repetitions, ecrans, timeline, public et audiodescription demandent un workflow live dedie.",
  cards: {
    types: { title: "Stentor Lite : commencer partout", desc: "App gratuite Tauri pour macOS, Windows et Linux, pensee pour rendre preparation du texte, surtitres et traductions accessibles sans barriere de licence." },
    p95: { title: "Sténtor : cabine de regie", desc: "App professionnelle pour repetitions et spectacles, avec cueing, timeline, ecrans, dispositifs du public et audiodescription sur plateformes desktop." },
    edge: { title: "Telephones du public synchronises", desc: "Les spectateurs peuvent se connecter avec leur smartphone et suivre surtitres, traductions ou audiodescriptions en synchronisation avec la regie." },
    auth: { title: "Site en 5 langues", desc: "Le site est disponible en italien, anglais, francais, espagnol et allemand. L app Stentor est pensee pour une interface multilingue plus etendue." },
    cron: { title: "Importer, exporter, faire circuler", desc: "Importez Word, TXT, SRT, WebVTT, CSV ou JSON, puis partagez les scripts pour repetition, archive, tournee et etude." },
    migrations: { title: "Vue regie claire", desc: "Avancez dans les cues pendant le spectacle avec une interface concue pour le timing, la concentration et la confiance." },
    deploys: { title: "Beta privee pour Pro", desc: "Pendant le testing, l acces Pro reste controle afin de fournir support, licences et instructions d activation en securite." },
  },
};

export const testimonials = {
  title: "Un outil faconne par<br/>des spectacles reels.",
  description:
    "Stentor se developpe avec celles et ceux qui l utilisent : artistes, operateurs, traductrices, theatres et publics. Lite garde l acces ouvert ; Pro grandit par beta test dans de vrais lieux et ne sera pas limite a un seul systeme.",
  quotes: [
    { text: "Utilisez Lite pour commencer a preparer les materiaux et comprendre le workflow avant de porter Stentor en production.", av: "01", name: "Commencer avec Lite", role: "App gratuite · macOS, Windows, Linux" },
    { text: "Utilisez Pro lorsque le spectacle demande vue regie, timeline, ecrans, dispositifs du public et setup live professionnel.", av: "02", name: "Passer a Pro", role: "App professionnelle · acces beta" },
    { text: "Les notes de repetition, les retours du public et des operateurs aident a concevoir de meilleurs outils pour le spectacle vivant.", av: "03", name: "Ameliorer la recherche", role: "Feedback · produit" },
  ],
};

const liteFeatures = ["App desktop gratuite", "Developpee avec Tauri", "Pour macOS, Windows et Linux", "Preparation textes, surtitres et traductions", "Telechargement sans licence Pro"];
const proFeatures = ["App desktop professionnelle", "Prevue pour macOS, Windows et Linux", "Timeline, cueing et vue regie live", "Ecrans et telephones du public", "Audiodescription et outils d accessibilite", "Licence beta privee et activation"];
const institutionFeatures = ["Pour theatres, festivals et ecoles", "Licences d essai et multi-postes", "Support pendant testing et repetitions", "Aide a la configuration dans de vrais lieux", "Espace compte pret pour l achat en ligne futur"];

export const pricingPreview = {
  title: "Choisir le bon<br/>parcours Stentor.",
  comparisonLink: { href: "/fr/download", label: "Comparer Lite et Pro →" },
  plans: [
    { name: "Stentor Lite", tag: "Gratuit", price: "Lite", cycle: "/multiplateforme", tagline: "Pour commencer, preparer et experimenter sans barriere de licence.", features: liteFeatures, cta: { href: "/fr/download", label: "Telecharger Lite", variant: "ghost" as const }, highlighted: false },
    { name: "Sténtor", tag: "Beta", tagAccent: true, price: "Pro", cycle: "/multiplateforme", tagline: "Pour production live professionnelle, actuellement disponible en beta controlee.", features: proFeatures, cta: { href: "/fr/demander-essai", label: "Demander l acces Pro", variant: "primary" as const }, highlighted: true },
    { name: "Institutions", tag: "Equipes", price: "Team", cycle: "/lieux", tagline: "Pour theatres, festivals, ecoles et organisations preparant un usage reel.", features: institutionFeatures, cta: { href: "/fr/contact", label: "Parlons-en", variant: "ghost" as const }, highlighted: false },
  ],
};

export const finalCta = {
  variant: "borderY" as const,
  paddingY: "py-24 md:py-[120px]",
  gap: "gap-6",
  eyebrow: "Stentor Lite · Sténtor",
  title: "Commencer librement. Passer en scene professionnellement.",
  body: "Telechargez Stentor Lite pour commencer sur macOS, Windows ou Linux. Demandez l acces a Sténtor quand il faut un environnement professionnel pour repetitions et spectacles.",
  ctas: [
    { href: "/fr/download", label: "Telecharger Stentor", variant: "primary" as const },
    { href: "/fr/demander-essai", label: "Acceder a la beta Pro", variant: "ghost" as const },
  ],
};