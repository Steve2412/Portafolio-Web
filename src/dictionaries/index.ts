import type { Locale } from '@/lib/i18n';
import { es, type Dictionary } from './es';
import { en } from './en';

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
