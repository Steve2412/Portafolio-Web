import type { IconType } from 'react-icons';
import { FaDatabase, FaJava } from 'react-icons/fa6';
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiPhp,
  SiGit,
  SiDocker,
  SiShopify,
} from 'react-icons/si';
import type { Locale } from '@/lib/i18n';

export type GroupKey = 'frontend' | 'backend' | 'database' | 'tools';

export type Tech = {
  name: string | Record<Locale, string>;
  Icon: IconType;
  /** Si existe, la ficha se muestra ampliada con estas etiquetas (p. ej. los motores de base de datos). */
  detail?: string[];
};

export const techGroups: { key: GroupKey; items: Tech[] }[] = [
  {
    key: 'frontend',
    items: [
      { name: 'React', Icon: SiReact },
      { name: 'Next.js', Icon: SiNextdotjs },
    ],
  },
  {
    key: 'backend',
    items: [
      { name: 'Node.js', Icon: SiNodedotjs },
      { name: 'Python', Icon: SiPython },
      { name: 'PHP', Icon: SiPhp },
      { name: 'Java', Icon: FaJava },
    ],
  },
  {
    key: 'database',
    items: [
      {
        name: { es: 'Relacionales (SQL)', en: 'Relational (SQL)' },
        Icon: FaDatabase,
        detail: ['MySQL', 'SQL Server'],
      },
    ],
  },
  {
    key: 'tools',
    items: [
      { name: 'Git', Icon: SiGit },
      { name: 'Docker', Icon: SiDocker },
      { name: 'Shopify', Icon: SiShopify },
    ],
  },
];
