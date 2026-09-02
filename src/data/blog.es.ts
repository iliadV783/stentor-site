import type { BlogPost } from "./blog";

const author = { name: "Leonardo Mancini", role: "Creador y desarrollador de Sténtor", initials: "LM" };

const categoryStyles = {
  research: { dot: "bg-blue-400", text: "text-blue-400", tag: "bg-blue-400/[0.08] text-blue-400 border-blue-400/25" },
  practice: { dot: "bg-stentor", text: "text-stentor", tag: "bg-stentor/[0.08] text-stentor border-stentor/25" },
  product: { dot: "bg-amber-400", text: "text-amber-400", tag: "bg-amber-400/[0.08] text-amber-400 border-amber-400/25" },
  fieldnotes: { dot: "bg-green-400", text: "text-green-400", tag: "bg-green-400/[0.08] text-green-400 border-green-400/25" },
} as const;

export const blog = {
  hero: {
    eyebrow: "Cuaderno",
    title: "Notas sobre texto en vivo, teatro y dispositivos del público.",
    description: "Notas de investigación, actualizaciones de desarrollo y reflexiones prácticas sobre sobretítulos, traducción, audiodescripción y conocimiento compartido en las artes escénicas en vivo.",
    primaryCta: { href: "/es/contact", label: "Comparte una nota de campo" },
    secondaryCta: { href: "/es/changelog/", label: "Leer el changelog" },
  },
  categories: [
    { id: "all", label: "Todas las notas" },
    { id: "research", label: "Investigación" },
    { id: "practice", label: "Práctica" },
    { id: "product", label: "Producto" },
    { id: "fieldnotes", label: "Notas de campo" },
  ],
  categoryLabels: { research: "investigación", practice: "práctica", product: "producto", fieldnotes: "notas de campo" },
  categoryStyles,
  posts: [
    { id: "why-stentor-starts-from-the-room", title: "Por qué Sténtor empieza desde la sala", description: "Una nota sobre diseñar sobretítulos, traducciones y audiodescripciones desde la perspectiva de las salas de ensayo, el tiempo en vivo y la presencia del público.", date: "2026-06-05", category: "research", readingTime: "4 min", cover: "region-map", featured: true, author },
    { id: "same-tools-shared-responsibility", title: "Mismas herramientas, responsabilidad compartida", description: "Por qué Sténtor utiliza un modelo de apoyo y donación en lugar de bloquear las herramientas teatrales esenciales detrás de niveles de pago.", date: "2026-06-03", category: "practice", readingTime: "3 min", cover: "policy-hexagon", author },
    { id: "audience-phones-as-performance-infrastructure", title: "Los teléfonos del público como infraestructura de la función", description: "Los dispositivos personales pueden formar parte de un sistema de texto en vivo sin sustituir al teatro: amplían cómo el público recibe idioma, acceso y contexto.", date: "2026-06-01", category: "research", readingTime: "5 min", cover: "p95-ring", author },
    { id: "audio-description-next-to-the-script", title: "Mantener la audiodescripción junto al guion", description: "Las notas de audiodescripción son más fáciles de preparar, revisar y lanzar en cue cuando permanecen vinculadas al texto de la función y a su estructura en vivo.", date: "2026-05-29", category: "practice", readingTime: "4 min", cover: "iso-types", author },
    { id: "live-sync-notes-from-a-local-network-test", title: "Live Sync: notas de una prueba en red local", description: "Primeras observaciones sobre la conexión entre vista del operador, pantallas y teléfonos del público mediante una red local en sala.", date: "2026-05-26", category: "fieldnotes", readingTime: "3 min", cover: "traffic-line-chart", author },
    { id: "from-word-files-to-cues", title: "De archivos Word a cues", description: "Una nota práctica de desarrollo sobre importar guiones de función y conservar estructura teatral útil sin imponer un formato rígido.", date: "2026-05-24", category: "product", readingTime: "4 min", cover: "iso-postgres", author },
  ] satisfies BlogPost[],
  loadMore: "Más notas pronto",
  loadMoreHref: "/es/contact",
  relatedTitle: "Seguir leyendo",
  finalCta: {
    eyebrow: "Comparte notas de campo",
    title: "¿Has usado Sténtor en una sala? Cuéntanos qué ocurrió.",
    body: "Notas breves de ensayos, pruebas con público y funciones en vivo ayudan a orientar el software y la investigación. Sin newsletter: basta con escribir cuando haya algo útil que compartir.",
    primaryCta: { href: "/es/contact", label: "Enviar una nota" },
    secondaryCta: { href: "mailto:info@stentor.live?subject=Nota de campo Sténtor", label: "Escríbenos" },
    fineprint: "El blog y el changelog siguen públicos; por ahora el contacto directo es suficiente.",
  },
} as const;
