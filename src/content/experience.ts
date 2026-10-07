import type { IconType } from 'react-icons';
import { FaLaptopCode } from 'react-icons/fa6';
import type { Locale } from '@/lib/i18n';
import { site } from './site';

type L = Record<Locale, string>;

export type Experience = {
  id: string;
  /** Nombre que aparece en la franja superior de la tarjeta. */
  org: L;
  /** Ruta del logo en /public para el sello circular. */
  logoSrc?: string;
  /** Iniciales para el sello circular, si no hay icono ni logo. */
  initials?: string;
  Icon?: IconType;
  role: L;
  period: L;
  location?: L;
  summary: L;
  tags: Record<Locale, string[]>;
  current?: boolean;
  link?: { href: string; label: L };
};

// Orden cronológico inverso: lo más reciente primero.
export const experiences: Experience[] = [
  {
    id: 'freelance',
    org: { es: 'Freelance', en: 'Freelance' },
    Icon: FaLaptopCode,
    role: { es: 'Desarrollador de software freelance', en: 'Freelance software developer' },
    period: { es: 'Actualidad', en: 'Present' },
    summary: {
      es: 'Trabajo actualmente como freelancer, desarrollando software de forma independiente y a través de la plataforma Upwork.',
      en: 'I currently work as a freelancer, building software independently and through the Upwork platform.',
    },
    tags: { es: ['Independiente', 'Upwork'], en: ['Independent', 'Upwork'] },
    current: true,
    link: {
      href: site.socials.upwork,
      label: { es: 'Ver perfil en Upwork', en: 'View Upwork profile' },
    },
  },
  {
    id: 'ticvenca',
    org: { es: 'Ticvenca', en: 'Ticvenca' },
    logoSrc: '/images/ticvenca.png',
    initials: 'T',
    role: { es: 'Pasante universitario', en: 'College Intern' },
    period: { es: 'Abr 2024 – Jul 2024 · 4 meses', en: 'Apr 2024 – Jul 2024 · 4 months' },
    location: { es: 'Maracaibo, Zulia, Venezuela', en: 'Maracaibo, Zulia, Venezuela' },
    summary: {
      es: 'Desarrollo de un sistema de gestión de ventas de vehículos durante mi pasantía académica, aplicando metodologías de análisis, diseño e implementación de software para optimizar procesos de negocio.',
      en: 'Developed a vehicle sales management system during my academic internship, applying software analysis, design and implementation methodologies to optimize business processes.',
    },
    tags: {
      es: ['Análisis de software', 'Diseño', 'Implementación', 'Procesos de negocio'],
      en: ['Software analysis', 'Design', 'Implementation', 'Business processes'],
    },
  },
];
