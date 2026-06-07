export const hero = {
  eyebrow: "Pour les théâtres, festivals et lieux",
  title:
    'Faire circuler le texte live multilingue <em class="not-italic text-text-3 font-medium">sans transformer le spectacle en projet technique.</em>',
  description:
    "Sténtor aide les lieux à préparer, piloter et partager surtitres, traductions et audiodescription dans un workflow local-first : une régie, plusieurs écrans, une page foyer QR et les téléphones du public si nécessaire.",
};

export const featured = {
  brand: { initial: "S", name: "Sténtor dans le lieu" },
  title:
    'Un workflow de salle pour <em class="text-red-500 not-italic">régie, écrans, foyer et téléphones.</em>',
  description:
    "Un théâtre peut préparer le texte avant le spectacle, piloter les cues depuis la régie, envoyer les surtitres aux écrans configurés, afficher un QR code dans le foyer et permettre aux spectateurs de suivre traduction ou audiodescription sur leurs propres téléphones.",
  stats: [
    { value: "1", label: "régie pilotée par l’opérateur" },
    { value: "3", label: "surtitres · traduction · audiodescription" },
    { value: "Local", label: "réseau de salle, sans internet requis" },
  ],
  link: { href: "/fr/docs", label: "Voir le workflow" },
  hudRows: [
    { method: "LIVE", path: "Régie / Stage desk", lat: "opérateur", emphasized: true },
    { method: "TXT", path: "écrans de salle", lat: "sync", emphasized: true },
    { method: "QR", path: "page foyer", lat: "prête", emphasized: false },
    { method: "WEB", path: "téléphones du public", lat: "suivent", emphasized: false },
    { method: "AD", path: "audiodescription", lat: "disponible", emphasized: false },
  ],
  pullQuote: {
    text:
      "Le même projet peut servir les personnes qui préparent le texte, l’opérateur qui le pilote en direct, les écrans de la salle, le QR du foyer et les spectateurs sur leurs propres appareils.",
    author: "Sténtor",
    role: "Workflow de lieu",
  },
};

export const cards = [
  {
    brand: "Accueil international",
    industry: "Traduction",
    glyph: "rounded-full",
    tint: "rgba(239,68,68,0.18)",
    illustration: "helio" as const,
    title: "Accueillir une production en langue étrangère avec surtitres multilingues.",
    description:
      "Préparez le texte original et une ou plusieurs traductions dans le même projet, puis envoyez la bonne langue au bon écran ou au bon appareil pendant la représentation.",
    stats: [
      { k: "2+", l: "Langues par projet" },
      { k: "Live", l: "Pilotage régie" },
    ],
  },
  {
    brand: "Festivals",
    industry: "Surtitres",
    glyph: "",
    tint: "rgba(96,165,250,0.10)",
    illustration: "constellate" as const,
    title: "Passer d’une production à l’autre sans reconstruire le dispositif chaque soir.",
    description:
      "Gardez chaque spectacle dans un projet séparé tout en réutilisant la même logique de régie, de configuration des écrans et de téléphones du public.",
    stats: [
      { k: "∞", l: "Projets et cues" },
      { k: "1", l: "Workflow live réutilisable" },
    ],
  },
  {
    brand: "Audiodescription",
    industry: "Audiodescription",
    glyph: "[clip-path:polygon(50%_0,100%_100%,0_100%)]",
    tint: "rgba(239,68,68,0.14)",
    illustration: "vector" as const,
    title: "Préparer l’audiodescription dans le même projet que le texte.",
    description:
      "Gardez descriptions, repères de cue et fichiers audio optionnels près du script, pour préparer, réviser, tester et partager sans workflow séparé.",
    stats: [
      { k: "AD", l: "Notes et audio" },
      { k: "Cue", l: "Contexte préservé" },
    ],
  },
  {
    brand: "Téléphones du public",
    industry: "Audience phones",
    glyph: "rounded",
    tint: "rgba(239,68,68,0.14)",
    illustration: "kettlebrook" as const,
    title: "Proposer du texte sur appareils personnels sans installer un système complexe.",
    description:
      "Les spectateurs scannent un QR code et suivent surtitres, traductions, audiodescription ou les deux sur leur propre smartphone, en synchronisation avec les cues de la régie.",
    stats: [
      { k: "QR", l: "Accès public" },
      { k: "Sync", l: "Avec la régie" },
    ],
  },
  {
    brand: "Productions en tournée",
    industry: "Tournée",
    glyph: "rounded-full bg-transparent border-2 border-zinc-300",
    tint: "rgba(96,165,250,0.10)",
    illustration: "orbital" as const,
    title: "Emporter le même projet texte de lieu en lieu.",
    description:
      "Une production peut voyager avec script, traductions, surtitres, notes d’audiodescription et métadonnées déjà structurés, puis adapter les sorties aux écrans et besoins du lieu.",
    stats: [
      { k: "Export", l: "Scripts prêts" },
      { k: "Local", l: "Réseau de salle" },
    ],
  },
  {
    brand: "Notes de terrain",
    industry: "Recherche",
    glyph: "rounded",
    tint: "rgba(239,68,68,0.16)",
    illustration: "tessera" as const,
    title: "Inviter les retours après l’usage, pas avant le téléchargement.",
    description:
      "Après une répétition ou un spectacle, opérateurs, compagnies et lieux peuvent partager notes pratiques ou retours du public. Sténtor reste libre à essayer sans questionnaire de traçage avant téléchargement.",
    stats: [
      { k: "Après", l: "Retour après usage" },
      { k: "Ouvert", l: "Aucun compte requis" },
    ],
  },
];

export const logoWall = {
  title: "Conçu autour du travail théâtral, pas de catégories logicielles génériques.",
  description:
    "Sténtor accompagne différents moments et personnes d’une production : préparation, régie live, projection, foyer, appareils du public et notes de terrain après usage.",
  logos: [
    { name: "Théâtres", glyph: "rounded-full" },
    { name: "Festivals", glyph: "rotate-45" },
    { name: "Compagnies", glyph: "" },
    { name: "Tournée", glyph: "[clip-path:polygon(50%_0,100%_100%,0_100%)]" },
    { name: "Surtitreurs", glyph: "rounded" },
    { name: "Traducteurs", glyph: "rounded-full bg-transparent border-2 border-zinc-300" },
    { name: "Audiodescripteurs", glyph: "rounded" },
    { name: "Opérateurs", glyph: "rounded-full" },
    { name: "Techniciens", glyph: "" },
    { name: "Téléphones", glyph: "rotate-45" },
    { name: "Écrans", glyph: "rounded" },
    { name: "QR foyer", glyph: "rounded-full" },
  ],
};

export const stats = {
  title: "Un même dispositif peut servir plusieurs besoins théâtraux.",
  description:
    "Utilisez Sténtor comme outil de préparation, poste de régie live, système de sortie écran, page foyer QR, client pour téléphones du public et canal optionnel de notes de terrain.",
  items: [
    { value: "3", suffix: " couches", label: "Surtitres, traduction et audiodescription dans un même projet" },
    { value: "∞", suffix: " langues", label: "Multilingue par conception, non limité à une seule paire" },
    { value: "Live", suffix: " Sync", label: "Connexion pilotée par l’opérateur pour écrans, foyer et téléphones" },
  ],
};

export const quotes = [
  {
    stars: 5,
    text:
      "Un théâtre peut commencer par un besoin simple de surtitrage et ajouter ensuite traduction, audiodescription, QR foyer ou téléphones du public sans changer tout le workflow.",
    av: "01",
    name: "Commencer simplement",
    role: "Surtitres et écrans",
  },
  {
    stars: 5,
    text:
      "Un festival peut garder des projets séparés par production tout en utilisant la même logique de régie pour différentes salles, langues et configurations techniques.",
    av: "02",
    name: "Passer à l’échelle",
    role: "Festivals et saisons",
  },
  {
    stars: 5,
    text:
      "Un lieu peut inviter opérateurs, compagnies et spectateurs à partager des notes après usage, sans donner au téléchargement le sentiment d’être surveillé.",
    av: "03",
    name: "Apprendre de l’usage",
    role: "Notes de terrain et recherche",
  },
];

export const finalCta = {
  variant: "borderY" as const,
  title: "Faire entrer Sténtor dans votre théâtre.",
  body:
    "Utilisez-le pour une production, un festival, une tournée ou un pilote de recherche. Téléchargez d’abord, testez en salle, puis partagez vos notes quand vous avez quelque chose de concret à nous dire.",
  ctas: [
    { href: "/fr/download", label: "Télécharger Sténtor", variant: "primary" as const },
    { href: "/fr/contact", label: "Contact", variant: "ghost" as const },
  ],
};
