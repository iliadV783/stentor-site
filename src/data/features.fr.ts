import { secondaryBento as baseSecondaryBento, codeTabs as baseCodeTabs } from "./features";

export const hero = {
  eyebrow: "Fonctionnalités Sténtor 0.3.40",
  title: "Texte live multilingue,<br/>du script à la salle.",
  description:
    "Sténtor réunit surtitres, traduction, audiodescription, écrans, téléphones du public et accès QR foyer dans un même workflow local-first pour théâtres, festivals et lieux du spectacle vivant.",
};

export const showcase = [
  {
    number: "01",
    eyebrow: "01 — Espace projet",
    title: "Un projet pour toutes les couches du texte live.",
    description:
      "Préparez le script original, les traductions, les surtitres, les notes d’audiodescription, les métadonnées, les langues et la configuration des écrans dans un même projet éditable.",
    bullets: [
      "Importer Word, TXT, SRT, WebVTT, CSV ou JSON",
      "Configurer les langues une seule fois pour les écrans, les téléphones et le foyer",
      "Garder titre, compagnie, notes, cues, traductions et audiodescription ensemble",
    ],
    cta: { href: "/fr/docs", label: "Voir le workflow" },
    illustration: "schemas" as const,
  },
  {
    number: "02",
    eyebrow: "02 — Régie / Stage desk",
    title: "Un poste live pour l’opérateur, pas un outil de slides générique.",
    description:
      "Pendant la répétition ou la représentation, la régie garde visibles le cue actuel, le cue suivant, le noir, le timing, la distribution aux écrans, les appareils connectés et l’état de l’audiodescription.",
    bullets: [
      "Avancer, revenir et passer au noir depuis une vue live concentrée",
      "Suivre cue actuel, cue suivant, timers, notes et appareils connectés",
      "Privilégier le contrôle manuel, avec timing répété quand il est utile",
    ],
    cta: { href: "/fr/docs#stage-desk", label: "Piloter un spectacle" },
    illustration: "trace" as const,
  },
  {
    number: "03",
    eyebrow: "03 — Salle et public",
    title: "Écrans, foyer et téléphones suivent le même état live.",
    description:
      "Sténtor peut envoyer le cue live aux écrans de salle, à une page foyer avec QR code et aux spectateurs connectés avec leur propre téléphone.",
    bullets: [
      "Écrans multiples avec aperçus, langue et style",
      "Client web public pour surtitres, traduction, audiodescription ou les deux",
      "Mode réseau local pour tester en salle sans dépendre d’internet",
    ],
    cta: { href: "/fr/docs#audience", label: "Voir le public" },
    illustration: "regions" as const,
  },
];

export const secondaryBento = {
  ...baseSecondaryBento,
  title: "Construit pour le vrai workflow théâtral.",
  description:
    "Des outils pratiques pour préparer, piloter, projeter, décrire et partager le texte live multilingue.",
  cards: [
    { ...baseSecondaryBento.cards[0], title: "Audiodescription comme couche du projet", desc: "Préparez les notes d’audiodescription près du script, liez-les aux cues, ajoutez de l’audio pour les tests et exportez le matériel de répétition." },
    { ...baseSecondaryBento.cards[1], title: "Import et export", desc: "Importez scripts et fichiers de sous-titres, puis exportez du matériel structuré pour répétition, archive, tournée ou relecture." },
    { ...baseSecondaryBento.cards[2], title: "Configuration multilingue", desc: "Configurez les langues du projet une seule fois, puis réutilisez-les dans le texte, les écrans, les téléphones et le foyer QR." },
    { ...baseSecondaryBento.cards[3], title: "Téléphones du public", desc: "Les spectateurs scannent un QR code et suivent surtitres, traductions, audiodescription ou les deux pendant le spectacle." },
    { ...baseSecondaryBento.cards[4], title: "Desktop-first, local-first", desc: "Sténtor évolue vers une application desktop native, avec des vues web légères pour les écrans et le public sur réseau local." },
    { ...baseSecondaryBento.cards[5], title: "Notes de terrain après usage", desc: "Sténtor ne demande pas de questionnaire avant téléchargement. Les retours sont invités après répétition ou représentation." },
  ],
};

export const codeTabs = {
  ...baseCodeTabs,
  title: "Un fichier projet lisible, pas une boîte noire.",
  description:
    "Sténtor garde le texte de performance structuré : métadonnées, langues, cues, traductions, audiodescription, écrans et état live restent compréhensibles et portables.",
};

export const finalCta = {
  eyebrow: "Gratuit à essayer · aucun compte requis",
  title: "Téléchargez d’abord.<br/>Partagez vos retours ensuite.",
  body: "Utilisez Sténtor pour porter surtitres, traductions et audiodescriptions du script à la salle, aux écrans, au foyer et aux téléphones du public.",
  ctas: [
    { href: "/fr/download", label: "Télécharger Sténtor", variant: "primary" as const },
    { href: "/fr/docs", label: "Lire le workflow", variant: "ghost" as const },
  ],
};
