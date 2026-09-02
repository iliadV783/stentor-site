/**
 * German homepage content for Sténtor.
 */

export const hero = {
  eyebrow: "Update v0.1.74 · Live-Audiodeskription",
  title:
    'Übertitel, Übersetzung <em class="not-italic text-stentor font-medium">und Audiodeskriptionen.</em><br class="hidden sm:inline" /> Live.',
  description:
    "Eine Regieumgebung zum Vorbereiten von Texten, Koordinieren von Sprachen und Audiodeskriptionen, Synchronisieren von Bildschirmen und Publikumsgeräten, Sammeln von Fragebögen und Arbeiten in der Cloud während Proben und Aufführungen.",
  ctas: [
    { href: "/de/download", label: "Sténtor herunterladen", variant: "primary" as const },
    { href: "/de/testzugang", label: "Pro-Beta öffnen", variant: "ghost" as const, icon: "play" as const },
  ],
  trust: [
    { label: "Lite: kostenlose plattformübergreifende App", live: true },
    { label: "Pro: professionelle App für macOS und Windows" },
    { label: "Übertitel · Übersetzung · Audiodeskription · Publikum" },
  ],
  mock: {
    workspace: { name: "Macbett", env: "Live-Probe · lokales Netzwerk" },
    user: { name: "Regie", email: "18 Publikumstelefone synchronisiert" },
    title: "Regieansicht",
    timeframe: { prefix: "projekt / ", value: "Macbett" },
    stats: [
      { label: "Aktueller Cue", value: "024", trend: "live", trendColor: "green" as const },
      { label: "Telefone", value: "18", trend: "folgen", trendColor: "green" as const },
      { label: "Bildschirme", value: "2", trend: "sync", trendColor: "green" as const },
      { label: "Sprachen", value: "DE · IT", trend: "bereit", trendColor: "green" as const },
    ],
    currentCue: { label: "Aktueller Cue", text: "Sie wollen in uns leben!", meta: "Deutsche Übertitel · Bildschirm 1" },
    nextCue: { label: "Nächster Cue", text: "Vogliono vivere in noi!", meta: "Italienische Quelle · Vorschau" },
    logs: [
      { t: "12:04:21", lvl: "ok", code: "cue", m: "024 an Bildschirme gesendet · ", s: "live" },
      { t: "12:04:22", lvl: "ok", code: "web", m: "18 Publikumstelefone · ", s: "sync" },
      { t: "12:04:24", lvl: "info", code: "AD", m: "Audiodeskriptionsnotiz · ", s: "bereit" },
      { t: "12:04:30", lvl: "ok", code: "fb", m: "Feedback-Kanal · ", s: "offen" },
      { t: "12:04:34", lvl: "warn", code: "next", m: "Cue 025 Vorschau · ", s: "wartet" },
    ],
  },
};

export const logoCloud = {
  label: "EIN ÖKOSYSTEM, ZWEI DESKTOP-APPS",
  bigNumber: "3 OS",
  logos: [
    { name: "Sténtor Lite", glyph: "rounded-full" },
    { name: "Sténtor", glyph: "rotate-45" },
    { name: "macOS", glyph: "" },
    { name: "Windows", glyph: "[clip-path:polygon(50%_0,100%_100%,0_100%)]" },
    { name: "Linux", glyph: "rounded" },
    { name: "Publikumstelefone", glyph: "rounded-full border-2 border-zinc-300 bg-transparent" },
  ],
};

export const metrics = {
  title: "Entwickelt für<br/>Live-Aufführungen.",
  description:
    "Sténtor organisiert den Aufführungstext von der Vorbereitung bis zur Live-Regie, mit Werkzeugen für Bildschirme, Publikumstelefone, Barrierefreiheit und mehrsprachige Arbeit.",
  items: [
    { value: "Lite", suffix: "", label: "Kostenlose App für macOS und Windows" },
    { value: "5", suffix: "", label: "Sprachen auf der Website; App für eine breitere mehrsprachige Oberfläche ausgelegt" },
    { value: "Live Sync", suffix: "", label: "Für Bildschirme und Publikumstelefone" },
  ],
};

export const bento = {
  title: "Ein Sténtor.<br/>Zwei Arbeitsweisen.",
  description:
    "Beginne mit der leichten plattformübergreifenden App und wechsle zur professionellen Umgebung, wenn Proben, Bildschirme, Timeline, Publikum und Audiodeskription einen eigenen Live-Workflow brauchen.",
  cards: {
    types: { title: "Sténtor Lite: überall beginnen", desc: "Kostenlose App für macOS und Windows, um Textvorbereitung, Übertitel und Übersetzungen ohne Lizenzbarriere zugänglich zu machen." },
    p95: { title: "Sténtor: Regiekabine", desc: "Professionelle App für Proben und Vorstellungen, mit Cueing, Timeline, Bildschirmen, Publikumsgeräten und Audiodeskription auf Desktop-Plattformen." },
    edge: { title: "Synchronisierte Publikumstelefone", desc: "Menschen im Saal können sich mit dem eigenen Smartphone verbinden und Übertitel, Übersetzungen oder Audiodeskriptionen synchron zur Regie verfolgen." },
    auth: { title: "Audiodeskription und Barrierefreiheit", desc: "Bereite Hinweise neben dem Text vor und synchronisiere barrierefreie Inhalte mit dem Ablauf der Vorstellung." },
    cron: { title: "Importieren, exportieren, weitergeben", desc: "Importiere Word-, TXT-, SRT-, WebVTT-, CSV- oder JSON-Dateien und teile Materialien für Proben, Archiv, Tournee und Studium." },
    migrations: { title: "Klare Regieansicht", desc: "Bewege dich während der Vorstellung durch Cues mit einer Oberfläche, die für Timing, Konzentration und Sicherheit gestaltet ist." },
    deploys: { title: "Beta für Pro", desc: "Während der Testphase bleibt der Pro-Zugang organisiert, damit Support, Hinweise und Aktivierung sicher bereitgestellt werden." },
  },
};

export const testimonials = {
  title: "Ein Werkzeug aus<br/>realen Aufführungen.",
  description:
    "Sténtor wird mit den Menschen entwickelt, die es nutzen: Künstlerinnen, Operatoren, Übersetzerinnen, Theater und Publikum. Lite hält den Zugang offen; Pro wächst durch Beta-Tests in realen Kontexten.",
  quotes: [
    { text: "Nutze Lite, um Materialien vorzubereiten und den Workflow zu verstehen, bevor Sténtor in die Produktion geht.", av: "01", name: "Mit Lite beginnen", role: "Kostenlose App · macOS, Windows" },
    { text: "Nutze Pro, wenn die Vorstellung Regieansicht, Timeline, Bildschirme, Publikumsgeräte und ein professionelles Live-Setup braucht.", av: "02", name: "Zu Pro wechseln", role: "Professionelle App · Beta-Zugang" },
    { text: "Notizen aus Proben, Publikum und Operatoren helfen, bessere Werkzeuge für Live-Aufführungen zu gestalten.", av: "03", name: "Forschung verbessern", role: "Feedback · Produkt" },
  ],
};

const liteFeatures = ["Kostenlose Desktop-App", "Für macOS und Windows", "Textvorbereitung, Übertitel und Übersetzungen", "Download ohne Pro-Lizenz", "Website in 5 Sprachen"];
const proFeatures = ["Professionelle Desktop-App", "Für macOS und Windows vorgesehen", "Timeline, Cueing und Live-Regieansicht", "Bildschirme und Publikumstelefone", "Audiodeskription und Barrierefreiheitswerkzeuge", "Beta-Lizenz und Aktivierung"];
const institutionFeatures = ["Für Theater, Festivals und Schulen", "Test- und Mehrplatzlizenzen", "Support während Tests und Proben", "Einrichtungshilfe in realen Räumen", "Account-Bereich für künftige Nutzung vorbereitet"];

export const pricingPreview = {
  title: "Wähle den passenden<br/>Sténtor-Weg.",
  comparisonLink: { href: "/de/download", label: "Lite und Pro vergleichen →" },
  plans: [
    { name: "Sténtor Lite", tag: "Kostenlos", price: "Lite", cycle: "/plattformübergreifend", tagline: "Zum Beginnen, Vorbereiten und Experimentieren ohne Lizenzbarriere.", features: liteFeatures, cta: { href: "/de/download", label: "Lite herunterladen", variant: "ghost" as const }, highlighted: false },
    { name: "Sténtor", tag: "Beta", tagAccent: true, price: "Pro", cycle: "/plattformübergreifend", tagline: "Für professionelle Live-Produktion, aktuell als kontrollierte Beta verfügbar.", features: proFeatures, cta: { href: "/de/testzugang", label: "Pro-Zugang anfragen", variant: "primary" as const }, highlighted: true },
    { name: "Institutionen", tag: "Team", price: "Team", cycle: "/räume", tagline: "Für Theater, Festivals, Schulen und Organisationen, die einen realen Einsatz vorbereiten.", features: institutionFeatures, cta: { href: "/de/contact", label: "Sprechen wir", variant: "ghost" as const }, highlighted: false },
  ],
};

export const finalCta = {
  variant: "borderY" as const,
  paddingY: "py-24 md:py-[120px]",
  gap: "gap-6",
  eyebrow: "Sténtor Lite · Sténtor Pro",
  title: "Frei beginnen. Professionell auf die Bühne gehen.",
  body: "Lade Sténtor Lite herunter, um auf macOS oder Windows zu beginnen. Frage Sténtor Pro an, wenn du eine professionelle Umgebung für Proben und Vorstellungen brauchst.",
  ctas: [
    { href: "/de/download", label: "Sténtor herunterladen", variant: "primary" as const },
    { href: "/de/testzugang", label: "Pro-Beta öffnen", variant: "ghost" as const },
  ],
};
