import type { ContactChannel, ContactDepartment } from "./contact";

export const contact = {
  eyebrow: "Contact",
  title: "Partagez votre expérience avec Sténtor.",
  description:
    "Sténtor se développe grâce aux usages réels. Si vous testez le logiciel en répétition, en salle, avec un public ou dans un contexte de recherche, vos retours, réponses aux questionnaires et notes pratiques sont précieux.",

  channels: [
    {
      icon: "info",
      label: "Questionnaires",
      description:
        "Utilisez ce canal pour partager un retour structuré après une répétition, un test public, un atelier ou une représentation.",
      href: "mailto:info@stentor.live?subject=Sténtor feedback questionnaire",
      cta: "Demander un questionnaire",
    },
    {
      icon: "mail",
      label: "Retours de recherche",
      description:
        "Racontez ce qui s’est passé dans la salle : ce qui a fonctionné, ce qui était peu clair, ce que le public a utilisé et ce qui doit s’améliorer.",
      href: "mailto:leonardo.mancini@unito.it?subject=Sténtor research feedback",
      cta: "leonardo.mancini@unito.it",
    },
    {
      icon: "discord",
      label: "Expérience utilisateur",
      description:
        "Partagez les commentaires des opérateurs, surtitreurs, traducteurs, audiodescripteurs, techniciens, équipes de salle ou spectateurs.",
      href: "mailto:info@stentor.live?subject=Sténtor user experience",
      cta: "info@stentor.live",
    },
    {
      icon: "shield-check",
      label: "Notes techniques",
      description:
        "Signalez les problèmes d’installation, le comportement de Live Sync, les imports/exports, la compatibilité des appareils et les tests réseau local.",
      href: "mailto:info@stentor.live?subject=Sténtor technical notes",
      cta: "Envoyer des notes techniques",
    },
  ] as ContactChannel[],

  form: {
    title: "Envoyer un retour",
    description: "Utilisez ce formulaire pour des commentaires, notes de test ou suites de questionnaire.",
    namePlaceholder: "Votre nom",
    emailPlaceholder: "nom@example.com",
    messagePlaceholder:
      "Dites-nous comment vous avez utilisé Sténtor, qui était impliqué, ce qui a fonctionné, ce qui n’a pas fonctionné, et quels retours sont venus des opérateurs ou du public.",
    submitLabel: "Envoyer le retour",
    successTitle: "Retour reçu",
    successBody:
      "Merci. Votre expérience nous aide à améliorer Sténtor et à comprendre comment le texte live est utilisé dans des salles réelles.",
    departments: [
      { value: "questionnaire", label: "Questionnaire / retour structuré" },
      { value: "performance", label: "Répétition ou test en représentation" },
      { value: "audience", label: "Retour du public" },
      { value: "operator", label: "Régie / notes techniques" },
      { value: "research", label: "Collaboration de recherche" },
      { value: "other", label: "Autre" },
    ] as ContactDepartment[],
  },

  enterprise: {
    eyebrow: "Échange de recherche",
    title: "Utilisez le logiciel, partagez l’expérience.",
    description:
      "Au lieu d’un processus commercial, Sténtor invite les utilisateurs à contribuer des observations, questionnaires et retours issus d’usages réels. Chaque réponse aide à améliorer l’outil et la recherche qui l’accompagne.",
    cta: { label: "Envoyer un retour", href: "mailto:info@stentor.live?subject=Sténtor feedback" },
    stats: [
      { value: "Use", label: "tester en contexte" },
      { value: "Share", label: "envoyer un retour" },
      { value: "Grow", label: "améliorer l’outil" },
    ],
  },
} as const;
