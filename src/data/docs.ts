/**
 * Navigazione della documentazione: gruppi laterali + indice della pagina.
 * Il corpo della pagina documentazione vive in docs.astro.
 */

export type DocsSidebarItem = {
  label: string;
  href: string;
  active?: boolean;
  badge?: string;
  badgeNew?: boolean;
};

export type DocsSidebarGroup = {
  title: string;
  items: DocsSidebarItem[];
};

export const sidebarGroups: DocsSidebarGroup[] = [
  {
    title: "Da qui",
    items: [
      { label: "Panoramica", href: "#overview", active: true },
      { label: "Che cos’è Sténtor", href: "#what-it-is" },
      { label: "Stato della beta", href: "#version", badge: "macOS", badgeNew: true },
    ],
  },
  {
    title: "Preparazione",
    items: [
      { label: "Progetti", href: "#projects" },
      { label: "Importazione del testo", href: "#import", badge: "Nuovo" },
      { label: "Testo e lingue", href: "#text" },
      { label: "Audio-descrizione", href: "#audio" },
    ],
  },
  {
    title: "Esecuzione",
    items: [
      { label: "Linea del tempo", href: "#timeline" },
      { label: "Regia", href: "#stage-desk" },
      { label: "Schermi", href: "#screens" },
      { label: "Viste per il pubblico", href: "#audience" },
    ],
  },
  {
    title: "File e rilascio",
    items: [
      { label: "Importazione ed esportazione", href: "#files" },
      { label: "Applicazione macOS", href: "#desktop" },
      { label: "Funzioni previste", href: "#planned" },
    ],
  },
];

export const tocItems = [
  { label: "Panoramica", href: "#overview", active: true },
  { label: "Che cos’è Sténtor", href: "#what-it-is" },
  { label: "Stato della beta", href: "#version" },
  { label: "Progetti", href: "#projects" },
  { label: "Importazione del testo", href: "#import" },
  { label: "Testo e lingue", href: "#text" },
  { label: "Audio-descrizione", href: "#audio" },
  { label: "Linea del tempo", href: "#timeline" },
  { label: "Regia", href: "#stage-desk" },
  { label: "Schermi", href: "#screens" },
  { label: "Viste per il pubblico", href: "#audience" },
  { label: "Importazione ed esportazione", href: "#files" },
  { label: "Applicazione macOS", href: "#desktop" },
  { label: "Funzioni previste", href: "#planned" },
];

export const tocActions = [
  { href: "/download", label: "Scarica Sténtor", icon: "playground" as const },
  { href: "/contact", label: "Condividi note dal campo", icon: "message-circle" as const },
  { href: "/features", label: "Vedi le funzioni", icon: "edit" as const },
];

export const pageMeta = {
  breadcrumb: [
    { href: "#", label: "Documentazione" },
    { href: "#", label: "Prodotto" },
    { label: "Sténtor" },
  ],
  maintainer: "Documentazione Sténtor",
  lastUpdated: "Aggiornata per la beta desktop",
  readingTime: "Tempo di lettura: 7 min",
};
