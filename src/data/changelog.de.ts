/**
 * German changelog page content for Sténtor.
 */

export const ui = { jumpTo: "Springen zu", milestone: "Meilenstein", patch: "Patch", new: "Neu", improvements: "Verbesserungen", fixes: "Korrekturen", releaseStats: "Release-Statistiken" };

export const hero = {
  eyebrow: "Projektlog",
  title: "Was sich in Sténtor geändert hat.",
  description: "Ein öffentliches Log des wachsenden Softwareprojekts: Apple-Beta-Verteilung, Windows-Entwicklung, Live Sync, Web-App für das Publikum, Import/Export, Audiodeskriptionswerkzeuge und forschungsbezogene Verbesserungen.",
  emailPlaceholder: "du@example.com",
  subscribeLabel: "Updates verfolgen",
  subscribeLinks: [
    { href: "#", label: "RSS", icon: "rss" as const },
    { href: "mailto:info@stentor.live?subject=Sténtor changelog", label: "Email", icon: "mail" as const },
    { href: "/de/contact", label: "Feedback", icon: "discord" as const },
  ],
};

export const filters = [
  { id: "all", label: "Alle", count: 8 },
  { id: "major", label: "Meilensteine", count: 4 },
  { id: "new", label: "Neu", count: 3 },
  { id: "improvements", label: "Verbesserungen", count: 4 },
  { id: "fixes", label: "Korrekturen", count: 2 },
];

export const versionTag = "v0.1.71 · DOCX-Parser + Performance";
export const versionRange = "· aktueller Prototyp";
export const years = [{ y: "2026", n: 8, on: true }, { y: "Forschung", n: 1 }];

export const entries = [
  { version: "0.1.71", date: "2026-06-18", type: "major", title: "Der DOCX-Import wird intelligenter für Theaterskripte", body: "Die Arbeit am 18. Juni konzentrierte sich auf den nativen Apple-Parser: saubererer DOCX-Import, bessere Audiodeskriptionslogik, natürlichere Zeilenumbrüche und erste Performance-Strategien für sehr lange Skripte.", changes: { improvements: [ { title: "Erkennung von Audiodeskription", body: "Marker wie AD werden als Audiodeskriptions-Cues und nicht als Figuren behandelt, während der importierte Text im richtigen Feld erhalten bleibt." }, { title: "Sauberere Figurenerkennung", body: "Technische Hinweise wie Licht, Lichter und Regieanweisungen werden beim DOCX-Import seltener mit Figurennamen verwechselt." }, { title: "Natürlichere Zeilenumbrüche", body: "Die automatische Textteilung zielt auf eine ausgewogenere Verteilung, vermeidet künstliche Brüche und respektiert den Theater-Rhythmus besser." }, { title: "Option für Klammertext", body: "Eine Parser-Option wurde vorbereitet, um Text in Klammern aus gesprochenen Zeilen zu entfernen, wenn die Produktion Dialog, interne Notizen und Bühnenhinweise trennen muss." } ], fixes: [ { title: "Reaktionsfähigkeit bei langen Skripten", body: "Verzögerungen im Texteditor bei Skripten mit mehr als 1300 Zeilen wurden analysiert, mit dem Ziel, Klicks, Auswahl und Scrollen unmittelbar zu halten." } ] } },
  { version: "0.1.70", date: "2026-06-17", type: "major", title: "Apple-Beta-Verteilung und Windows-Entwicklung kommen voran", body: "Sténtor entwickelt sich auf zwei Ebenen weiter: Die Apple-Version wird für die Verteilung über TestFlight vorbereitet, während eine native Windows-Edition jetzt aktiv mit C# entwickelt wird.", changes: { new: [ { title: "Apple-TestFlight-Pfad", body: "Die macOS/iOS-Arbeit umfasst jetzt den Veröffentlichungsweg für Betatests über Apple TestFlight." }, { title: "Windows-Edition in C#", body: "Eine dedizierte Windows-Version wird in C# entwickelt und geht von Mockups zu einer echten Desktop-Oberfläche im Windows-11-Stil über." }, { title: "Zugängliche Textprüfungen", body: "Die Ausrichtung des Editors umfasst dezente Warnungen für zu lange Zeilen und Übertitel, damit Operatoren in live lesbaren Grenzen bleiben." } ], improvements: [ { title: "Importlogik für Figuren und AD", body: "Der Skriptimport wird verfeinert, damit Marker wie AD als Audiodeskriptionsmaterial und nicht als Figurennamen behandelt werden." }, { title: "Plattformübergreifende Roadmap", body: "Die Produktrichtung ist klarer: Apple-Beta, Windows-Desktop und Publikumsgeräte bleiben Teile eines gemeinsamen Live-Accessibility-Ökosystems." } ] } },
  { version: "0.1.64", date: "2026-06-05", type: "major", title: "Live Sync wird zum Zentrum des Arbeitsablaufs im Raum", body: "Der aktuelle Prototyp verbindet Operator-Ansicht, Bildschirme und Publikums-Smartphones über einen gemeinsamen Live-Cue-Status.", changes: { new: [ { title: "Publikums-Smartphones", body: "Zuschauer können sich mit dem eigenen Smartphone verbinden und Übertitel, Übersetzungen oder Audiodeskriptionen verfolgen." }, { title: "Lokaler Raum-Modus", body: "Das Projekt kann über ein lokales Netzwerk für Theatertests und Proben geteilt werden." } ], improvements: [ { title: "Fokus für Operatoren", body: "Die Live-Ansicht wird um aktuellen Cue, nächsten Cue, Blackout und verbundene Geräte herum vereinfacht." } ] } },
  { version: "0.1.61", date: "2026-06-02", type: "minor", title: "Publikums-Web-App für den Aufführungseinsatz verfeinert", body: "Die Publikumsseite entwickelt sich zu einer klareren Live-Ansicht, besonders auf mobilen Geräten und im Querformat.", changes: { improvements: [ { title: "Weniger Interface-Rauschen", body: "Während der Aufführung erscheint weniger technischer Statustext; Einstellungen und Verbindungsstatus bleiben diskret." }, { title: "Sprachwechsel", body: "Interface-Sprache und Untertitelsprache werden als Teil der Publikumserfahrung behandelt." } ], fixes: [ { title: "Mobiler Viewport", body: "Der untere Seitenbereich wird angepasst, damit er auf Smartphones nicht durch Browser-Bedienelemente verdeckt wird." } ] } },
  { version: "0.1.50", date: "2026-05-30", type: "minor", title: "Skriptvorbereitung und Metadatenmodell", body: "Die Projektstruktur spiegelt reale Produktionsbedürfnisse wider: Titel, Kompanie oder Kollektiv, Sprachen, Cues, Notizen und Audiodeskriptionsmaterial.", changes: { new: [ { title: "Projektmetadaten", body: "Titel und Kompanie/Kollektiv stehen als Felder auf Projektebene zur Verfügung." }, { title: "Leere Sprecherfelder", body: "Das Sprecher- oder Figurenfeld kann leer bleiben, wenn es für das Skript nicht hilfreich ist." } ], improvements: [ { title: "Zentrales Skriptpanel", body: "Der Skriptarbeitsbereich wird angepasst, um die verfügbare Breite besser zu nutzen." } ] } },
  { version: "0.1.40", date: "2026-05-26", type: "major", title: "Desktop-first-Ausrichtung bestätigt", body: "Sténtor wird als Desktop-App für Theaterarbeit entwickelt, mit Web-Ansichten für Bildschirme und Publikumsgeräte.", changes: { new: [ { title: "Plattformübergreifende Ausrichtung", body: "Das Ziel ist ein Desktop-first-Werkzeug für macOS, Windows und Linux." }, { title: "Raumorientierte Architektur", body: "Die App ist auf Proberäume, Spielorte, lokale Netzwerke und Live-Betrieb ausgerichtet." } ] } },
  { version: "0.1.30", date: "2026-05-22", type: "minor", title: "Grundlagen für Import und Export", body: "Die frühen Import/Export-Arbeiten konzentrieren sich auf praktische Theaterformate, statt Nutzer in ein einziges Quellformat zu zwingen.", changes: { new: [ { title: "Unterstützte Importe", body: "Word, TXT, SRT, WebVTT, CSV und JSON sind Teil des Vorbereitungsworkflows." } ], improvements: [ { title: "Exportbereite Skripte", body: "Exporte werden als Materialien für Proben, Archiv, Tourneen und Forschung gedacht." } ] } },
  { version: "0.1.20", date: "2026-05-18", type: "patch", title: "Feedback-Schleife der Forschung zur Projektlogik hinzugefügt", body: "Website und Workflow machen Feedback, Fragebögen und Feldnotizen zu einem Teil des Austauschs rund um Sténtor.", changes: { improvements: [ { title: "Geteiltes Wissen", body: "Die Nutzung der Software ist mit praktischem Feedback von Operatoren, Publikum, Künstlern und Spielorten verbunden." } ] } },
];

export const sideStats = { thisYear: { title: "Aktueller Fokus", rows: [ { label: "Prototyp", value: "0.1.71", accent: true }, { label: "Apple-Parser", value: "DOCX-Import" }, { label: "Windows C#", value: "in Entwicklung" }, { label: "Feedback-Schleife", value: "offen" } ] }, cadence: { title: "Entwicklungsrhythmus", bars: [28,46,34,62,54,70,48,76,66,88,58,100], rangeStart: "Mai '26", rangeEnd: "Jun '26" }, status: { title: "Status", rows: [ { label: "Apple-App", value: "● Parser", color: "green" as const }, { label: "Windows-App", value: "C#-Entwicklung" }, { label: "Nächste Priorität", value: "Beta-Feedback" } ] } };
export const loadMore = "Weitere Projektnotizen bald";
