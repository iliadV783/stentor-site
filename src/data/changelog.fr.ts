/**
 * French changelog page content for Sténtor.
 */

export const ui = { jumpTo: "Aller à", milestone: "Jalon", patch: "Patch", new: "Nouveautés", improvements: "Améliorations", fixes: "Corrections", releaseStats: "Statistiques des versions" };

export const hero = {
  eyebrow: "Journal de projet",
  title: "Ce qui a changé dans Sténtor.",
  description: "Un journal public du logiciel en cours de développement : distribution bêta Apple, développement Windows, Live Sync, application web pour le public, import/export, outils d’audiodescription et améliorations liées à la recherche.",
  emailPlaceholder: "vous@example.com",
  subscribeLabel: "Suivre les mises à jour",
  subscribeLinks: [
    { href: "#", label: "RSS", icon: "rss" as const },
    { href: "mailto:info@stentor.live?subject=Changelog Sténtor", label: "Email", icon: "mail" as const },
    { href: "/fr/contact", label: "Feedback", icon: "discord" as const },
  ],
};

export const filters = [
  { id: "all", label: "Tout", count: 7 },
  { id: "major", label: "Jalons", count: 3 },
  { id: "new", label: "Nouveautés", count: 3 },
  { id: "improvements", label: "Améliorations", count: 3 },
  { id: "fixes", label: "Corrections", count: 1 },
];

export const versionTag = "v0.1.70 · TestFlight + Windows";
export const versionRange = "· prototype actuel";
export const years = [{ y: "2026", n: 7, on: true }, { y: "Recherche", n: 1 }];

export const entries = [
  { version: "0.1.70", date: "2026-06-17", type: "major", title: "La distribution bêta Apple et le développement Windows avancent", body: "Sténtor progresse sur deux fronts : la version Apple est préparée pour une distribution via TestFlight, tandis qu’une édition Windows native est maintenant en développement actif avec C#.", changes: { new: [ { title: "Parcours Apple TestFlight", body: "Le travail macOS/iOS inclut maintenant le parcours de publication pour les tests bêta via Apple TestFlight." }, { title: "Édition Windows en C#", body: "Une version dédiée à Windows est développée en C#, en passant des maquettes à une vraie interface desktop dans l’esprit Windows 11." }, { title: "Contrôles accessibles du texte", body: "L’orientation de l’éditeur comprend des avertissements sobres pour les répliques et surtitres trop longs, afin d’aider les opérateurs à rester dans des limites lisibles en direct." } ], improvements: [ { title: "Logique d’import des personnages et de l’AD", body: "L’import des scripts est affiné pour que des marqueurs comme AD soient traités comme du matériel d’audiodescription, et non comme des noms de personnages." }, { title: "Feuille de route multiplateforme", body: "La direction produit est plus claire : bêta Apple, desktop Windows et appareils du public restent les parties d’un même écosystème d’accessibilité live." } ] } },
  { version: "0.1.64", date: "2026-06-05", type: "major", title: "Live Sync devient le centre du workflow en salle", body: "Le prototype actuel relie la vue opérateur, les écrans et les téléphones du public autour d’un état de cue live partagé.", changes: { new: [ { title: "Téléphones du public", body: "Les spectateurs peuvent se connecter avec leur propre smartphone et suivre les surtitres, traductions ou audiodescriptions." }, { title: "Mode salle locale", body: "Le projet peut être partagé sur un réseau local pour les tests en théâtre et les répétitions." } ], improvements: [ { title: "Concentration de l’opérateur", body: "La vue live est simplifiée autour du cue courant, du cue suivant, du blackout et des appareils connectés." } ] } },
  { version: "0.1.61", date: "2026-06-02", type: "minor", title: "L’application web du public est affinée pour la représentation", body: "La page du public évolue vers une vue live plus claire, surtout sur mobile et en orientation paysage.", changes: { improvements: [ { title: "Moins de bruit d’interface", body: "Moins de texte technique pendant la représentation, avec les réglages et l’état de connexion gardés discrets." }, { title: "Changement de langue", body: "La langue de l’interface et la langue des surtitres sont traitées comme des parties de l’expérience du public." } ], fixes: [ { title: "Viewport mobile", body: "Le bas de page est ajusté pour éviter d’être masqué par les contrôles du navigateur sur smartphone." } ] } },
  { version: "0.1.50", date: "2026-05-30", type: "minor", title: "Préparation du script et modèle de métadonnées", body: "La structure de projet reflète des besoins de production réels : titre, compagnie ou collectif, langues, cues, notes et matériel d’audiodescription.", changes: { new: [ { title: "Métadonnées de projet", body: "Le titre et la compagnie/le collectif sont disponibles comme champs au niveau du projet." }, { title: "Champs personnage vides", body: "Le champ speaker ou personnage peut rester vide quand il n’est pas utile au script." } ], improvements: [ { title: "Panneau central du script", body: "L’espace de travail du script est ajusté pour mieux utiliser la largeur disponible." } ] } },
  { version: "0.1.40", date: "2026-05-26", type: "major", title: "Direction desktop-first confirmée", body: "Sténtor est développé comme application desktop pour le travail théâtral, avec des vues web pour les écrans et les appareils du public.", changes: { new: [ { title: "Direction multiplateforme", body: "L’objectif est un outil desktop-first pour macOS, Windows et Linux." }, { title: "Architecture orientée salle", body: "L’application est pensée autour des salles de répétition, des lieux, des réseaux locaux et de l’opération live." } ] } },
  { version: "0.1.30", date: "2026-05-22", type: "minor", title: "Bases de l’import et de l’export", body: "Le premier travail import/export se concentre sur des formats théâtraux pratiques plutôt que d’imposer un format source unique.", changes: { new: [ { title: "Imports pris en charge", body: "Word, TXT, SRT, WebVTT, CSV et JSON font partie du workflow de préparation." } ], improvements: [ { title: "Scripts prêts à l’export", body: "Les exports sont pensés comme matériaux de répétition, d’archive, de tournée et de recherche." } ] } },
  { version: "0.1.20", date: "2026-05-18", type: "patch", title: "Boucle de feedback de recherche ajoutée à la logique du projet", body: "Le site et le workflow intègrent feedback, questionnaires et notes de terrain dans l’échange autour de Sténtor.", changes: { improvements: [ { title: "Connaissance partagée", body: "L’usage du logiciel est relié aux retours pratiques des opérateurs, publics, artistes et lieux." } ] } },
];

export const sideStats = { thisYear: { title: "Focus actuel", rows: [ { label: "Prototype", value: "0.1.70", accent: true }, { label: "Apple TestFlight", value: "publication" }, { label: "Windows C#", value: "en développement" }, { label: "Boucle feedback", value: "ouverte" } ] }, cadence: { title: "Rythme de développement", bars: [28,46,34,62,54,70,48,76,66,88,58,100], rangeStart: "mai 26", rangeEnd: "juin 26" }, status: { title: "Statut", rows: [ { label: "App Apple", value: "● TestFlight", color: "green" as const }, { label: "App Windows", value: "développement C#" }, { label: "Prochaine priorité", value: "feedback bêta" } ] } };
export const loadMore = "D’autres notes de projet bientôt";
