'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LANG_COOKIE, switchLocalePath, type Locale } from '@/lib/i18n';

export function LangSwitch({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();
  const target: Locale = locale === 'es' ? 'en' : 'es';

  return (
    <Link
      href={switchLocalePath(pathname, target)}
      className="icon-btn"
      aria-label={label}
      title={label}
      hrefLang={target}
      onClick={() => {
        // Recuerda la elección manual durante un año.
        document.cookie = `${LANG_COOKIE}=${target}; path=/; max-age=31536000; samesite=lax`;
      }}
    >
      {target.toUpperCase()}
    </Link>
  );
}
