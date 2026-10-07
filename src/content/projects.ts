import type { Locale } from '@/lib/i18n';

export type Project = {
  id: string;
  title: Record<Locale, string>;
  summary: Record<Locale, string>;
  tech: string[];
  image: string;
  imageFit?: 'contain' | 'cover';
  repository: string;
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
  },
  {
    id: 'conavenca',
    title: { es: 'Conavenca', en: 'Conavenca' },
    summary: {
      es: 'Sistema de gestión de entregas con administración de paquetes y destinos, cálculo de tarifas, facturas PDF y seguimiento en tiempo real.',
      en: 'A delivery management system for packages and destinations, with rate calculation, PDF invoices, and real-time tracking.',
    },
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'MySQL', 'ESP32', 'A9G'],
    image: '/projects/conavenca.jpg',
    repository: 'https://github.com/Steve2412/Conavenca',
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
  },
];

export const latestProjects = projects.slice(0, 3);
