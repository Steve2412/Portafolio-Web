'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { href, routeKeyFromPath, type Locale, type RouteKey } from '@/lib/i18n';
import type { Dictionary } from '@/dictionaries/es';
import { ThemeToggle } from './ThemeToggle';
import { LangSwitch } from './LangSwitch';

const items: RouteKey[] = ['home', 'about', 'projects', 'experience', 'contact'];

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Cierra el menú móvil al navegar.
  useEffect(() => setOpen(false), [pathname]);

  const currentKey = routeKeyFromPath(pathname);
  const isActive = (key: RouteKey) => key === currentKey;

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href={`/${locale}`} className="logo">
          <span>~/</span>stefano
        </Link>

        <nav aria-label="Principal">
          <ul className="nav-links" data-open={open}>
            {items.map((key) => (
              <li key={key}>
                <Link
                  href={href(locale, key)}
                  className="nav-link"
                  aria-current={isActive(key) ? 'page' : undefined}
                >
                  {dict.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <LangSwitch locale={locale} label={dict.ui.toggleLang} />
          <ThemeToggle label={dict.ui.toggleTheme} />
          <button
            type="button"
            className="icon-btn menu-btn"
            aria-expanded={open}
            aria-label={dict.ui.menu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? '×' : '≡'}
          </button>
        </div>
      </div>
    </header>
  );
}
