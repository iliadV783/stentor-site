export const hero = {
  eyebrow: "Soutien · Don · mêmes fonctions",
  title: "Les mêmes outils pour tout le monde.<br/>Soutenez selon votre échelle.",
  description:
    "Sténtor ne bloque pas les fonctions essentielles derrière des niveaux supérieurs. Free, Pro et Venues incluent les mêmes outils de base. La contribution suggérée reflète simplement qui utilise le logiciel, ses moyens et l’ampleur du contexte d’usage.",
  toggle: {
    monthlyLabel: "Don",
    annualLabel: "Soutien",
    annualBadge: "mêmes fonctions",
  },
};

const sharedFeatures = [
  "Projets illimités",
  "Langues illimitées",
  "Cues illimités",
  "Surtitres, traductions et notes d’audiodescription",
  "Import Word, TXT, SRT, WebVTT, CSV et JSON",
  "Scripts prêts à exporter pour répétition, archive, tournée et étude",
  "Client web public et workflow Live Sync",
  "Retours et échange de recherche encouragés",
];

export const plans = [
  {
    id: "free",
    name: "Free",
    tag: "Indépendant",
    price: { annual: "€0", monthly: "€0" },
    cycle: { annual: "/an", monthly: "/an" },
    tagline: "Pour artistes indépendants, étudiant·es, petites expérimentations et personnes qui ont besoin d’un accès sans demander d’autorisation.",
    cta: { href: "/fr/download", label: "Utiliser gratuitement", variant: "ghost" as const },
    featuresHeader: "MÊMES FONCTIONS INCLUSES",
    features: sharedFeatures,
  },
  {
    id: "pro",
    name: "Pro",
    tag: "Suggéré",
    tagAccent: true,
    highlighted: true,
    price: { annual: "€19", monthly: "€19" },
    cycle: {
      annual: "/an · soutien suggéré",
      monthly: "/an · don suggéré",
    },
    tagline: "Pour compagnies, collectifs, projets professionnels et productions en tournée qui peuvent contribuer un peu plus.",
    cta: { href: "/fr/download", label: "Soutenir comme Pro", variant: "primary" as const },
    featuresHeader: "MÊMES FONCTIONS INCLUSES",
    features: sharedFeatures,
  },
  {
    id: "enterprise",
    name: "Venues",
    tag: "Théâtres",
    price: { annual: "€99", monthly: "€99" },
    cycle: { annual: "/an · soutien suggéré", monthly: "/an · don suggéré" },
    tagline: "Pour théâtres, festivals, institutions et lieux utilisant Sténtor dans des contextes publics plus larges.",
    cta: { href: "/fr/contact", label: "Soutenir comme lieu", variant: "ghost" as const },
    featuresHeader: "MÊMES FONCTIONS INCLUSES",
    features: sharedFeatures,
  },
];

export const compareTable = {
  title: "Pas de fonctions bloquées. Seulement différentes manières de contribuer.",
  groups: [
    {
      title: "Outils essentiels",
      rows: [
        ["Projets", "Illimité", "Illimité", "Illimité"],
        ["Langues", "Illimité", "Illimité", "Illimité"],
        ["Cues", "Illimité", "Illimité", "Illimité"],
        ["Surtitres", "●", "●", "●"],
        ["Traductions", "●", "●", "●"],
        ["Notes d’audiodescription", "●", "●", "●"],
      ],
    },
    {
      title: "Préparation et partage",
      rows: [
        ["Import Word, TXT, SRT, WebVTT, CSV et JSON", "●", "●", "●"],
        ["Scripts prêts à exporter", "●", "●", "●"],
        ["Client web public", "●", "●", "●"],
        ["Workflow Live Sync", "●", "●", "●"],
        ["Direction desktop multiplateforme", "●", "●", "●"],
      ],
    },
    {
      title: "Échange de connaissance",
      rows: [
        ["Questionnaires et retours", "Bienvenus", "Bienvenus", "Bienvenus"],
        ["Réponses du public", "Bienvenues", "Bienvenues", "Bienvenues"],
        ["Notes d’usage pour la recherche", "Bienvenues", "Bienvenues", "Bienvenues"],
        ["Modèle open source EUPL", "●", "●", "●"],
      ],
    },
    {
      title: "Contribution suggérée",
      rows: [
        ["Artistes indépendants et très petites équipes", "€0/an", "Optionnel", "Optionnel"],
        ["Compagnies, collectifs et tournées", "Possible", "€19/an", "Optionnel"],
        ["Théâtres, festivals et institutions", "Possible", "Possible", "€99/an"],
        ["Toutes les fonctions essentielles", "Identiques", "Identiques", "Identiques"],
      ],
    },
  ],
};

export const faq = {
  title: "Questions, réponses claires.",
  items: [
    {
      q: "Free, Pro et Venues sont-ils des versions différentes du logiciel ?",
      a: "Non. Les fonctions essentielles sont les mêmes. Sténtor n’est pas organisé autour de fonctions bloquées. Les niveaux de contribution reflètent différents contextes d’usage, pas un accès différent aux outils essentiels.",
    },
    {
      q: "Pourquoi demander une contribution ?",
      a: "Sténtor demande du temps, de la maintenance, des tests et de la documentation. Les contributions aident à garder le logiciel disponible tout en permettant à des artistes, compagnies et lieux aux ressources différentes de participer équitablement.",
    },
    {
      q: "Est-ce un prix, un don ou un soutien ?",
      a: "Il vaut mieux le comprendre comme un soutien annuel suggéré. Choisissez le niveau qui correspond à votre situation : accès gratuit si vous en avez besoin, petite contribution pour usage professionnel, contribution plus importante pour lieux et institutions.",
    },
    {
      q: "Que puis-je donner si je ne peux pas contribuer financièrement ?",
      a: "Les retours sont précieux. Questionnaires, notes pratiques, réactions du public, captures d’écran de workflows réels et commentaires d’opérateurs ou de spectateurs aident à améliorer le projet.",
    },
    {
      q: "Proposez-vous un support payant ou des garanties de service ?",
      a: "Non. Les contributions ne donnent pas accès à un support prioritaire, à des garanties ou à un traitement préférentiel. Elles soutiennent le développement et la maintenance du projet.",
    },
    {
      q: "Un théâtre ou un festival peut-il contribuer davantage ?",
      a: "Oui. Les institutions qui peuvent soutenir le projet plus généreusement sont invitées à nous contacter, surtout lorsque Sténtor est utilisé dans des programmes publics, festivals, projets de recherche ou saisons récurrentes.",
    },
  ],
};

export const finalCta = {
  eyebrow: "Utilisez-le, soutenez-le, améliorez-le",
  title: "Mêmes fonctions.<br/>Responsabilité partagée.",
  body:
    "Utilisez Sténtor au niveau qui correspond à votre contexte. Si vous pouvez contribuer financièrement, soutenez le projet. Si vous pouvez contribuer par l’expérience, partagez retours, questionnaires et réponses du public.",
  ctas: [
    { href: "/fr/download", label: "Utiliser Sténtor", variant: "primary" as const },
    { href: "/fr/contact", label: "Partager un retour", variant: "ghost" as const },
  ],
};
