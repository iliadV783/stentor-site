const leonardoProfileUrl = "https://www.studium.unito.it/do/docenti.pl/Show?_id=lmancini";
const eticaProjectUrl = "https://unifind.unito.it/resource/project/MANL_PE_ATENEO_25_01";
const inlineLinkClass = "text-text underline decoration-stentor/60 underline-offset-4 hover:text-stentor transition-colors";
const leonardoProfileLink = `<a href="${leonardoProfileUrl}" target="_blank" rel="noopener noreferrer" class="${inlineLinkClass}">Leonardo Mancini</a>`;
const eticaProjectLink = `<a href="${eticaProjectUrl}" target="_blank" rel="noopener noreferrer" class="${inlineLinkClass}">ETICA</a>`;

export const about = {
  hero: {
    eyebrow: "À propos de Sténtor",
    title:
      'Le spectacle vivant a besoin de <em class="not-italic text-stentor">mots vivants</em>.<br/>Pour chaque public.',
    description:
      "Sténtor est un outil multiplateforme pour surtitres, traduction et audiodescription dans le spectacle vivant.",
    credit:
      `Créé et développé par ${leonardoProfileLink} (Université de Turin, Italie), dans le cadre du projet d’engagement public ${eticaProjectLink}.`,
  },
  story: {
    eyebrow: "Origine",
    title: "Pourquoi Sténtor existe",
    paragraphs: [
      "Sténtor part d’un problème pratique : le spectacle vivant a souvent besoin de plusieurs couches de texte. Une production peut demander des surtitres, des traductions, des notes d’audiodescription, des cues de régie, des écrans de salle et des téléphones du public — pendant que le spectacle se déroule en temps réel.",
      "Le nom renvoie à Stentor dans la mythologie grecque : non pas comme image de combat, mais comme figure connue pour sa voix de bronze. Sténtor transforme cette image en outil pour le théâtre : non pas un son plus fort, mais une transmission plus claire des mots, des langues et des descriptions.",
      `Le projet est développé par ${leonardoProfileLink} (Université de Turin, Italie) dans le cadre du projet d’engagement public ${eticaProjectLink}, comme logiciel de recherche pour le spectacle vivant. Il garde les outils essentiels accessibles et invite les utilisateurs à contribuer des retours, des notes d’usage, des réactions du public et des données de recherche qui peuvent faire grandir le logiciel à partir de performances réelles.`,
    ],
    pullQuote: {
      text: "Le texte du spectacle vivant doit circuler clairement : du script à la régie, de la scène aux écrans, de la salle à chaque appareil du public.",
      author: "Sténtor",
      role: "Principe du projet",
    },
  },
  numbers: {
    title: "Un autre modèle logiciel",
    description:
      "Sténtor est construit autour de l’accès, de la recherche et de l’usage live plutôt qu’autour de fonctions bloquées ou de niveaux enterprise.",
    items: [
      { value: "3", label: "couches centrales : surtitres, traduction, audiodescription" },
      { value: "∞", label: "projets, langues et cues dans chaque formule" },
      { value: "3", label: "plateformes desktop : macOS et Windows" },
      { value: "Free", label: "téléchargement et activation gratuits" },
    ],
  },
} as const;
