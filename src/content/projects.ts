import type { Locale } from '@/lib/i18n';
import { cambiappDetails, conavencaDetails, corblasercaDetails } from '@/content/project-details';

type Localized = Record<Locale, string>;

/** Párrafo de texto, o una lista (numerada si `ordered`). */
export type ContentBlock = string | { items: string[]; ordered?: boolean };

export type ProjectDetails = {
  about: ContentBlock[];
  goal: ContentBlock[];
  execution: ContentBlock[];
  results: ContentBlock[];
};

export type ProjectImage = {
  src: string;
  caption?: Localized;
  fit?: 'contain' | 'cover';
};

export type Project = {
  /** También es el slug de la página de detalle: /es/proyectos/{id}. */
  id: string;
  title: Localized;
  summary: Localized;
  client: Localized;
  service: Localized;
  tech: string[];
  image: string;
  imageFit?: 'contain' | 'cover';
  repository: string;
  details: Record<Locale, ProjectDetails>;
  /** Capturas adicionales que se muestran al final de la página de detalle. */
  gallery?: ProjectImage[];
};


export const projects: Project[] = [
  {
    id: 'cambiapp',
    title: { es: 'CambiApp', en: 'CambiApp' },
    summary: {
      es: 'Calculadora de divisas para Venezuela con tasas BCV y USDT P2P en tiempo real, caché offline y widget para la pantalla de inicio.',
      en: 'A currency calculator for Venezuela with real-time BCV and USDT P2P rates, offline caching, and a home screen widget.',
    },
    tech: [
      'Kotlin',
      'Jetpack Compose',
      'Material 3',
      'MVVM',
      'Clean Architecture',
      'Hilt',
      'Ktor',
      'JSoup',
      'Kotlinx Serialization',
      'Room',
      'Jetpack Glance',
      'WorkManager',
    ],
    image: '/projects/cambiapp.png',
    imageFit: 'contain',
    repository: 'https://github.com/Steve2412/CambiApp',
    client: { es: 'Proyecto personal', en: 'Personal project' },
    service: { es: 'Desarrollo de aplicaciones móviles (Android)', en: 'Mobile app development (Android)' },
    details: cambiappDetails,
  },
  {
    id: 'conavenca',
    title: { es: 'Conavenca', en: 'Conavenca' },
    summary: {
      es: 'Sistema de gestión de entregas con administración de paquetes y destinos, cálculo de tarifas, facturas PDF y seguimiento en tiempo real.',
      en: 'A delivery management system for packages and destinations, with rate calculation, PDF invoices, and real-time tracking.',
    },
    tech: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP', 'Bootstrap', 'MySQL', 'Leaflet', 'DomPDF', 'phpqrcode', 'ESP32', 'A9G'],
    image: '/projects/conavenca.jpg',
    repository: 'https://github.com/Steve2412/Conavenca',
    client: { es: 'Conavenca', en: 'Conavenca' },
    service: { es: 'Desarrollo web', en: 'Web development' },
    details: conavencaDetails,
  },
  {
    id: 'corblaserca',
    title: { es: 'Corblaserca', en: 'Corblaserca' },
    summary: {
      es: 'Plataforma de demostración para cursos de idiomas en línea, con gestión de usuarios, cursos, horarios, pagos y reportes PDF.',
      en: 'A demo platform for online language courses, with user, course, schedule, and payment management plus PDF reports.',
    },
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap', 'DomPDF'],
    image: '/projects/corblaserca.jpg',
    repository: 'https://github.com/Steve2412/Corblaserca',
    client: { es: 'Corblaserca', en: 'Corblaserca' },
    service: { es: 'Desarrollo web', en: 'Web development' },
    details: corblasercaDetails,
  },
];

/** Datos que necesita una tarjeta; evita enviar los textos de detalle a componentes de cliente. */
export type ProjectSummary = Pick<Project, 'id' | 'title' | 'summary' | 'tech' | 'image' | 'imageFit'>;

export function toSummary({ id, title, summary, tech, image, imageFit }: Project): ProjectSummary {
  return { id, title, summary, tech, image, imageFit };
}

export const latestProjects = projects.slice(0, 3);

export function getProject(id: string) {
  return projects.find((p) => p.id === id);
}
