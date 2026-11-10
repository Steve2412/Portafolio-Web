import type { IconType } from 'react-icons';
import {
  FaDatabase,
  FaJava,
  FaKey,
  FaGears,
  FaArrowsRotate,
  FaGaugeHigh,
  FaUserShield,
  FaLock,
  FaBug,
  FaUserGear,
  FaSitemap,
  FaArrowRightArrowLeft,
  FaDiagramProject,
  FaVial,
  FaPuzzlePiece,
  FaListCheck,
} from 'react-icons/fa6';
import {
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiPhp,
  SiDotnet,
  SiSupabase,
  SiGit,
  SiDocker,
  SiShopify,
  SiClaude,
  SiVercel,
} from 'react-icons/si';
import { TbApi, TbBrandCSharp } from 'react-icons/tb';
import type { Locale } from '@/lib/i18n';

export type GroupKey =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'tools'
  | 'api'
  | 'security'
  | 'modeling'
  | 'testing';

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
      { name: 'HTML', Icon: SiHtml5 },
      { name: 'CSS', Icon: SiCss },
      { name: 'JavaScript', Icon: SiJavascript },
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
      { name: 'C#', Icon: TbBrandCSharp },
      { name: '.NET', Icon: SiDotnet },
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
      { name: 'Supabase', Icon: SiSupabase },
    ],
  },
  {
    key: 'tools',
    items: [
      { name: 'Git', Icon: SiGit },
      { name: 'Docker', Icon: SiDocker },
      { name: 'Shopify', Icon: SiShopify },
      { name: 'Claude Code', Icon: SiClaude },
      { name: 'Vercel', Icon: SiVercel },
    ],
  },
  {
    key: 'api',
    items: [
      { name: { es: 'API RESTful', en: 'RESTful API' }, Icon: TbApi },
      { name: { es: 'Gestión de APIs', en: 'API Management' }, Icon: FaGears },
      { name: { es: 'Autenticación y API keys', en: 'Authentication & API keys' }, Icon: FaKey },
      { name: { es: 'Idempotencia', en: 'Idempotency' }, Icon: FaArrowsRotate },
      { name: 'Rate limiting · CORS', Icon: FaGaugeHigh },
    ],
  },
  {
    key: 'security',
    items: [
      { name: { es: 'Autenticación segura', en: 'Secure authentication' }, Icon: FaUserShield },
      { name: { es: 'Cifrado de datos sensibles', en: 'Sensitive data encryption' }, Icon: FaLock },
      { name: { es: 'Vulnerabilidades web (OWASP)', en: 'Web vulnerabilities (OWASP)' }, Icon: FaBug },
    ],
  },
  {
    key: 'modeling',
    items: [
      { name: { es: 'Casos de uso', en: 'Use cases' }, Icon: FaUserGear },
      { name: { es: 'Diagramas de clases', en: 'Class diagrams' }, Icon: FaSitemap },
      { name: { es: 'Diagramas de secuencia', en: 'Sequence diagrams' }, Icon: FaArrowRightArrowLeft },
      { name: { es: 'Entidad-relación', en: 'Entity-relationship' }, Icon: FaDiagramProject },
    ],
  },
  {
    key: 'testing',
    items: [
      { name: { es: 'Pruebas unitarias', en: 'Unit testing' }, Icon: FaVial },
      { name: { es: 'Pruebas de integración', en: 'Integration testing' }, Icon: FaPuzzlePiece },
      { name: { es: 'Pruebas funcionales', en: 'Functional testing' }, Icon: FaListCheck },
    ],
  },
];
