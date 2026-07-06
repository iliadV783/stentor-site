/**
 * Navigazione della documentazione: gruppi laterali + indice della pagina.
 * Il corpo della pagina documentazione vive in src/pages/it/docs/index.astro.
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
      { label: "Stato della beta", href: "#version", badge: "2026", badgeNew: true },
      { label: "Flusso consigliato", href: "#workflow" },
    ],
  },
  {
    title: "Preparazione",
    items: [
      { label: "Progetti e archivio", href: "#projects" },
      { label: "Importazione", href: "#import" },
      { label: "Testo e lingue", href: "#text" },
      { label: "Stile delle battute", href: "#cue-style", badge: "Nuovo" },
      { label: "Audio-descrizione", href: "#audio" },
    ],
  },
  {
    title: "Esecuzione",
    items: [
      { label: "Linea del tempo", href: "#timeline" },
      { label: "Regia", href: "#stage-desk", badge: "Nuovo" },
      { label: "Schermi", href: "#screens" },
      { label: "Pubblico", href: "#audience" },
      { label: "Questionari", href: "#surveys", badge: "Beta" },
    ],
  },
  {
    title: "Sistema",
    items: [
      { label: "Connessione", href: "#connection" },
      { label: "Impostazioni", href: "#settings" },
      { label: "Importazione ed esportazione", href: "#files" },
      { label: "macOS e Windows", href: "#desktop" },
      { label: "Ricerca e sviluppo", href: "#research" },
    ],
  },
];

export const tocItems = [
  { label: "Panoramica", href: "#overview", active: true },
  { label: "Stato della beta", href: "#version" },
  { label: "Flusso consigliato", href: "#workflow" },
  { label: "Progetti e archivio", href: "#projects" },
  { label: "Importazione", href: "#import" },
  { label: "Testo e lingue", href: "#text" },
  { label: "Stile delle battute", href: "#cue-style" },
  { label: "Audio-descrizione", href: "#audio" },
  { label: "Linea del tempo", href: "#timeline" },
  { label: "Regia", href: "#stage-desk" },
  { label: "Schermi", href: "#screens" },
  { label: "Pubblico", href: "#audience" },
  { label: "Questionari", href: "#surveys" },
  { label: "Connessione", href: "#connection" },
  { label: "Impostazioni", href: "#settings" },
  { label: "File", href: "#files" },
  { label: "macOS e Windows", href: "#desktop" },
  { label: "Ricerca e sviluppo", href: "#research" },
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
    { label: "Guida italiana" },
  ],
  maintainer: "Documentazione Sténtor",
  lastUpdated: "Aggiornata alle funzioni beta attuali",
  readingTime: "Tempo di lettura: 10 min",
};
