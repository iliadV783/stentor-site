const leonardoProfileUrl = "https://www.studium.unito.it/do/docenti.pl/Show?_id=lmancini";
const eticaProjectUrl = "https://unifind.unito.it/resource/project/MANL_PE_ATENEO_25_01";
const inlineLinkClass = "text-text underline decoration-stentor/60 underline-offset-4 hover:text-stentor transition-colors";
const leonardoProfileLink = `<a href="${leonardoProfileUrl}" target="_blank" rel="noopener noreferrer" class="${inlineLinkClass}">Leonardo Mancini</a>`;
const eticaProjectLink = `<a href="${eticaProjectUrl}" target="_blank" rel="noopener noreferrer" class="${inlineLinkClass}">ETICA</a>`;

export const about = {
  hero: {
    eyebrow: "Über Sténtor",
    title:
      'Live-Performance braucht <em class="not-italic text-stentor">lebendige Worte</em>.<br/>Für jedes Publikum.',
    description:
      "Sténtor ist ein plattformübergreifendes Werkzeug für Übertitel, Übersetzung und Audiodeskription in der Live-Performance.",
    credit:
      `Konzipiert und entwickelt von ${leonardoProfileLink} (Universität Turin, Italien), im Rahmen des Public-Engagement-Projekts ${eticaProjectLink}.`,
  },
  story: {
    eyebrow: "Ursprung",
    title: "Warum es Sténtor gibt",
    paragraphs: [
      "Sténtor entsteht aus einem praktischen Problem: Live-Performance braucht oft mehr als eine Textebene. Eine Produktion kann Übertitel, Übersetzungen, Audiodeskriptionsnotizen, Operator-Cues, Saalbildschirme und Publikumsgeräte benötigen — während die Aufführung in Echtzeit stattfindet.",
      "Der Name verweist auf Stentor aus der griechischen Mythologie: eine Figur, die für eine Stimme aus Bronze bekannt ist. Sténtor überträgt dieses Bild in ein Theaterwerkzeug: nicht lauteren Klang, sondern klarere Übertragung von Worten, Sprachen und Beschreibungen.",
      `Das Projekt wird von ${leonardoProfileLink} (Universität Turin, Italien) im Rahmen des Public-Engagement-Projekts ${eticaProjectLink} als forschungsorientierte Software für Live-Performance entwickelt. Es hält zentrale Werkzeuge zugänglich und lädt Nutzerinnen und Nutzer ein, Feedback, Nutzungsnotizen, Publikumsreaktionen und Forschungsdaten beizutragen, damit die Software durch reale Aufführungen wachsen kann.`,
    ],
    pullQuote: {
      text: "Text in der Live-Performance sollte klar reisen: vom Skript zum Operator, von der Bühne zu den Bildschirmen, vom Raum zu jedem Gerät im Publikum.",
      author: "Sténtor",
      role: "Projektprinzip",
    },
  },
  numbers: {
    title: "Ein anderes Softwaremodell",
    description:
      "Sténtor ist um Zugang, Forschung und Live-Nutzung herum aufgebaut — nicht um gesperrte Funktionen oder Enterprise-Stufen.",
    items: [
      { value: "3", label: "zentrale Ebenen: Übertitel, Übersetzung, Audiodeskription" },
      { value: "∞", label: "Projekte, Sprachen und Cues in jedem Plan" },
      { value: "3", label: "Desktop-Plattformen: macOS und Windows" },
      { value: "Free", label: "kostenloser Download und kostenlose Aktivierung" },
    ],
  },
} as const;
