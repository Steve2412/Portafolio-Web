export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';
export const LANG_COOKIE = 'lang';

/** Países de habla hispana (código ISO 3166-1 alpha-2). */
export const spanishCountries = new Set([
  'AR', 'BO', 'CL', 'CO', 'CR', 'CU', 'DO', 'EC', 'ES', 'GQ',
  'GT', 'HN', 'MX', 'NI', 'PA', 'PE', 'PR', 'PY', 'SV', 'UY', 'VE',
]);

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

/** Claves de ruta y su slug en cada idioma. */
export const routes = {
  home: { es: '', en: '' },
  about: { es: 'sobre-mi', en: 'about' },
  projects: { es: 'proyectos', en: 'projects' },
  experience: { es: 'experiencia', en: 'experience' },
  contact: { es: 'contacto', en: 'contact' },
} as const;

export type RouteKey = keyof typeof routes;

/**
 * Clave de ruta a la que pertenece un pathname, sin importar el idioma del slug.
 * Next puede exponer el path interno (/es/about) o la URL visible (/es/sobre-mi);
 * ambos resuelven a la misma clave.
 */
export function routeKeyFromPath(pathname: string): RouteKey | null {
  const segment = pathname.split('/')[2] ?? '';
  if (segment === '') return 'home';
  for (const key of Object.keys(routes) as RouteKey[]) {
    if (key !== 'home' && (routes[key].es === segment || routes[key].en === segment)) return key;
  }
  return null;
}

/** Construye una URL localizada: href('es', 'projects') -> /es/proyectos */
export function href(locale: Locale, key: RouteKey): string {
  const base = routes[key][locale];
  const parts = [locale, base].filter(Boolean);
  return '/' + parts.join('/');
}

/** URL de la página de detalle de un proyecto: projectHref('es', 'cambiapp') -> /es/proyectos/cambiapp */
export function projectHref(locale: Locale, id: string): string {
  return `${href(locale, 'projects')}/${id}`;
}

/** Traduce una ruta actual a su equivalente en otro idioma, conservando el resto del path. */
export function switchLocalePath(pathname: string, to: Locale): string {
  const [, , segment, ...rest] = pathname.split('/');
  let translated = segment ?? '';
  if (segment) {
    for (const key of Object.keys(routes) as RouteKey[]) {
      const r = routes[key];
      if (r.es === segment || r.en === segment) {
        translated = r[to];
        break;
      }
    }
  }
  return '/' + [to, translated, ...rest].filter(Boolean).join('/');
}

/** Orden de decisión: cookie > país > idioma del navegador > inglés. */
export function detectLocale(input: {
  cookie?: string;
  country?: string | null;
  acceptLanguage?: string | null;
}): Locale {
  if (isLocale(input.cookie)) return input.cookie;

  if (input.country) {
    return spanishCountries.has(input.country.toUpperCase()) ? 'es' : 'en';
  }

  const primary = input.acceptLanguage?.split(',')[0]?.trim().slice(0, 2).toLowerCase();
  if (isLocale(primary)) return primary;

  return defaultLocale;
}
