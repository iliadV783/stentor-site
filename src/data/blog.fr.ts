import type { BlogPost } from "./blog";

const author = { name: "Leonardo Mancini", role: "Créateur et développeur de Sténtor", initials: "LM" };

const categoryStyles = {
  research: { dot: "bg-blue-400", text: "text-blue-400", tag: "bg-blue-400/[0.08] text-blue-400 border-blue-400/25" },
  practice: { dot: "bg-stentor", text: "text-stentor", tag: "bg-stentor/[0.08] text-stentor border-stentor/25" },
  product: { dot: "bg-amber-400", text: "text-amber-400", tag: "bg-amber-400/[0.08] text-amber-400 border-amber-400/25" },
  fieldnotes: { dot: "bg-green-400", text: "text-green-400", tag: "bg-green-400/[0.08] text-green-400 border-green-400/25" },
} as const;

export const blog = {
  hero: {
    eyebrow: "Carnet",
    title: "Notes sur le texte live, le théâtre et les appareils du public.",
    description: "Notes de recherche, mises à jour de développement et réflexions pratiques sur les surtitres, la traduction, l’audiodescription et le savoir partagé autour du spectacle vivant.",
    primaryCta: { href: "/fr/contact", label: "Partager une note de terrain" },
    secondaryCta: { href: "/fr/changelog/", label: "Lire le changelog" },
  },
  categories: [
    { id: "all", label: "Toutes les notes" },
    { id: "research", label: "Recherche" },
    { id: "practice", label: "Pratique" },
    { id: "product", label: "Produit" },
    { id: "fieldnotes", label: "Notes de terrain" },
  ],
  categoryLabels: { research: "recherche", practice: "pratique", product: "produit", fieldnotes: "notes de terrain" },
  categoryStyles,
  posts: [
    { id: "why-stentor-starts-from-the-room", title: "Pourquoi Sténtor part de la salle", description: "Une note sur la conception des surtitres, traductions et audiodescriptions depuis les salles de répétition, le rythme live et la présence du public.", date: "2026-06-05", category: "research", readingTime: "4 min", cover: "region-map", featured: true, author },
    { id: "same-tools-shared-responsibility", title: "Mêmes outils, responsabilité partagée", description: "Pourquoi Sténtor utilise un modèle de soutien et de don plutôt que de bloquer les outils essentiels du théâtre derrière des niveaux payants.", date: "2026-06-03", category: "practice", readingTime: "3 min", cover: "policy-hexagon", author },
    { id: "audience-phones-as-performance-infrastructure", title: "Les téléphones du public comme infrastructure de représentation", description: "Les appareils personnels peuvent faire partie d’un système de texte live sans remplacer le théâtre : ils étendent la façon dont le public reçoit langue, accès et contexte.", date: "2026-06-01", category: "research", readingTime: "5 min", cover: "p95-ring", author },
    { id: "audio-description-next-to-the-script", title: "Garder l’audiodescription près du script", description: "Les notes d’audiodescription sont plus faciles à préparer, corriger et déclencher lorsqu’elles restent attachées au texte du spectacle et à sa structure live.", date: "2026-05-29", category: "practice", readingTime: "4 min", cover: "iso-types", author },
    { id: "live-sync-notes-from-a-local-network-test", title: "Live Sync : notes d’un test sur réseau local", description: "Premières observations sur la connexion entre vue opérateur, écrans et téléphones du public via un réseau local en salle.", date: "2026-05-26", category: "fieldnotes", readingTime: "3 min", cover: "traffic-line-chart", author },
    { id: "from-word-files-to-cues", title: "Des fichiers Word aux cues", description: "Une note pratique de développement sur l’import des scripts et la conservation de la structure théâtrale utile sans imposer un format rigide.", date: "2026-05-24", category: "product", readingTime: "4 min", cover: "iso-postgres", author },
  ] satisfies BlogPost[],
  loadMore: "D’autres notes bientôt",
  loadMoreHref: "/fr/contact",
  relatedTitle: "Continuer à lire",
  finalCta: {
    eyebrow: "Partager des notes de terrain",
    title: "Vous avez utilisé Sténtor en salle ? Racontez-nous ce qui s’est passé.",
    body: "De courtes notes issues de répétitions, de tests publics et de représentations live aident à orienter le logiciel et la recherche. Pas de newsletter : écrivez-nous simplement quand il y a quelque chose d’utile à partager.",
    primaryCta: { href: "/fr/contact", label: "Envoyer une note" },
    secondaryCta: { href: "mailto:info@stentor.live?subject=Note de terrain Sténtor", label: "Nous écrire" },
    fineprint: "Le blog et le changelog restent publics ; pour l’instant, le contact direct suffit.",
  },
} as const;
