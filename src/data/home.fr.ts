/**
 * French homepage content for Sténtor.
 * Same data shape as src/data/home.ts, so the visual structure can remain identical.
 */

export const hero = {
  eyebrow: "v. 0.1.64 – Live Sync",
  title:
    'Surtitres, traduction <em class="not-italic text-text-3 font-medium">et audiodescription.</em><br class="hidden sm:inline" /> En direct.',
  description:
    "Sténtor offre aux théâtres, aux artistes et aux équipes du spectacle vivant une manière simple de préparer et partager surtitres, traductions et audiodescriptions — avec les mêmes outils essentiels pour tout le monde.",
  ctas: [
    { href: "/download", label: "Télécharger Sténtor", variant: "primary" as const },
    { href: "/docs", label: "Lire le workflow", variant: "ghost" as const, icon: "play" as const },
  ],
  trust: [
    { label: "Gratuit à essayer · aucun compte requis", live: true },
    { label: "Application desktop multiplateforme" },
    { label: "Client web public · Live Sync · Recherche" },
  ],
  mock: {
    workspace: { name: "Macbett", env: "Répétition live · réseau local" },
    user: { name: "Régie", email: "18 téléphones du public synchronisés" },
    title: "Vue régie",
    timeframe: { prefix: "projet / ", value: "Macbett" },
    stats: [
      { label: "Cue actuel", value: "024", trend: "live", trendColor: "green" as const },
      { label: "Téléphones", value: "18", trend: "suivent", trendColor: "green" as const },
      { label: "Écrans", value: "2", trend: "synchronisés", trendColor: "green" as const },
      { label: "Langues", value: "IT · EN", trend: "prêtes", trendColor: "green" as const },
    ],
    currentCue: {
      label: "Cue actuel",
      text: "O my country, poor country!",
      meta: "Surtitres anglais · écran 1",
    },
    nextCue: {
      label: "Cue suivant",
      text: "What hands are here?",
      meta: "Source italienne · aperçu régie",
    },
    logs: [
      { t: "12:04:21", lvl: "ok", code: "cue", m: "024 envoyé aux écrans · ", s: "live" },
      { t: "12:04:22", lvl: "ok", code: "web", m: "18 téléphones du public · ", s: "sync" },
      { t: "12:04:24", lvl: "info", code: "AD", m: "note d’audiodescription · ", s: "prête" },
      { t: "12:04:30", lvl: "ok", code: "fb", m: "canal de retour · ", s: "ouvert" },
      { t: "12:04:34", lvl: "warn", code: "next", m: "aperçu cue 025 · ", s: "attente" },
    ],
  },
};

export const logoCloud = {
  label: "UN TEXTE, PLUSIEURS MANIÈRES DE LE RECEVOIR",
  bigNumber: "10,000+",
  logos: [
    { name: "Surtitres", glyph: "rounded-full" },
    { name: "Traduction", glyph: "rotate-45" },
    { name: "Audiodescription", glyph: "" },
    { name: "Écrans", glyph: "[clip-path:polygon(50%_0,100%_100%,0_100%)]" },
    { name: "Téléphones du public", glyph: "rounded" },
    { name: "Retours", glyph: "rounded-full border-2 border-zinc-300 bg-transparent" },
  ],
};

export const metrics = {
  title: "Conçu pour<br/>le spectacle vivant.",
  description:
    "De la préparation du script au pilotage en direct, Sténtor garde chaque couche du texte de performance au même endroit.",
  items: [
    { value: "Illimité", suffix: "", label: "Projets, langues et cues" },
    { value: "3", suffix: " couches", label: "Surtitres, traduction, audiodescription" },
    { value: "Live Sync", suffix: "", label: "Pour les écrans et les téléphones du public" },
  ],
};

export const bento = {
  title: "Tout pour le texte.<br/>Rien qui gêne.",
  description:
    "Préparez scripts, traductions, surtitres et notes d’audiodescription dans un espace de travail concentré, puis pilotez-les en direct vers les écrans et les téléphones du public.",
  cards: {
    types: {
      title: "Workflow centré sur le script",
      desc: "Importez un script, divisez-le en cues, ajoutez des traductions et gardez les notes ensemble sans perdre la structure du texte de performance.",
    },
    p95: {
      title: "Téléphones du public synchronisés en direct",
      desc: "Les spectateurs peuvent se connecter avec leur propre smartphone et suivre surtitres, traductions ou audiodescriptions en synchronisation avec les cues de la régie.",
    },
    edge: {
      title: "Conçu pour les salles de spectacle",
      desc: "Un workflow ciblé pour salles de répétition, théâtres et festivals — de la préparation du script au pilotage live et aux dispositifs du public.",
    },
    auth: {
      title: "Un projet, une connaissance partagée",
      desc: "Gardez ensemble texte original, traductions, surtitres, notes d’audiodescription, métadonnées et retours de recherche.",
    },
    cron: {
      title: "Importer, exporter, faire circuler",
      desc: "Importez Word, TXT, SRT, WebVTT, CSV ou JSON, puis partagez les scripts pour la répétition, l’archive, la tournée et l’étude.",
    },
    migrations: {
      title: "Vue régie claire",
      desc: "Avancez dans les cues pendant le spectacle avec une interface conçue pour le timing, la concentration et la confiance.",
    },
    deploys: {
      title: "Mêmes outils, pratique partagée",
      desc: "Les outils essentiels du spectacle vivant restent disponibles. Le soutien dépend du contexte, tandis que les retours aident tout le projet à grandir.",
    },
  },
};

export const testimonials = {
  title: "Un outil façonné par<br/>les performances réelles.",
  description:
    "Sténtor se développe avec les personnes qui l’utilisent. Nous gardons le logiciel accessible, et nous invitons en retour des notes d’usage, des retours pratiques et des réactions du public.",
  quotes: [
    {
      text: "Racontez-nous comment Sténtor a fonctionné en répétition, pendant le spectacle et dans la relation entre régie, scène et public.",
      av: "01",
      name: "Partager votre expérience",
      role: "Recherche · créateurs",
    },
    {
      text: "Les réponses des spectateurs aident à comprendre comment surtitres, traductions et audiodescriptions sont vécus sur les appareils personnels.",
      av: "02",
      name: "Recueillir les retours du public",
      role: "Recherche · publics",
    },
    {
      text: "Des notes d’usage anonymes et des observations concrètes nous aident à concevoir de meilleurs outils, sans enfermer les fonctions derrière des niveaux supérieurs.",
      av: "03",
      name: "Améliorer la recherche",
      role: "Recherche · produit",
    },
  ],
};

const fullFeatureSet = [
  "Mêmes fonctions essentielles pour tout le monde",
  "Projets, langues et cues illimités",
  "Surtitres, traductions et notes d’audiodescription",
  "Import Word, TXT, SRT, WebVTT, CSV et JSON",
  "Scripts prêts à exporter",
  "Retours et échange de recherche bienvenus",
];

export const pricingPreview = {
  title: "Mêmes fonctions.<br/>Soutenez selon votre échelle.",
  comparisonLink: { href: "/pricing", label: "Voir le modèle de soutien →" },
  plans: [
    {
      name: "Free",
      tag: "Indépendant",
      price: "€0",
      cycle: "/an",
      tagline: "Pour artistes indépendants, étudiant·es et très petites équipes qui ont d’abord besoin d’accès.",
      features: fullFeatureSet,
      cta: { href: "/download", label: "Télécharger gratuitement", variant: "ghost" as const },
      highlighted: false,
    },
    {
      name: "Pro",
      tag: "Suggéré",
      tagAccent: true,
      price: "€19",
      cycle: "/an · soutien",
      tagline: "Pour compagnies, collectifs et productions en tournée qui peuvent contribuer un peu plus.",
      features: fullFeatureSet,
      cta: { href: "/download", label: "Télécharger et soutenir", variant: "primary" as const },
      highlighted: true,
    },
    {
      name: "Venues",
      tag: "Théâtres",
      price: "€99",
      cycle: "/an · soutien",
      tagline: "Pour théâtres, festivals, institutions et lieux du spectacle vivant.",
      features: fullFeatureSet,
      cta: { href: "/contact", label: "Soutenir comme lieu", variant: "ghost" as const },
      highlighted: false,
    },
  ],
};

export const finalCta = {
  variant: "borderY" as const,
  paddingY: "py-24 md:py-[120px]",
  gap: "gap-6",
  eyebrow: "Mêmes outils · responsabilité partagée",
  title: "Faire parvenir les mots vivants à chaque public.",
  body: "Sténtor rend les surtitres, traductions et audiodescriptions simples à préparer, piloter et partager. Téléchargez-le librement, utilisez-le en répétition ou en représentation, puis partagez vos retours seulement lorsque vous avez quelque chose d’utile à nous dire.",
  ctas: [
    { href: "/download", label: "Télécharger Sténtor", variant: "primary" as const },
    { href: "/contact", label: "Partager des notes de terrain", variant: "ghost" as const },
  ],
};
