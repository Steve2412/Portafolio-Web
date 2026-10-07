'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/dictionaries';
import { defaultLocale, href, isLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion/Reveal';

// Client component: not-found.tsx no recibe params, así que el idioma se deduce de la URL.
export function NotFoundContent() {
  const pathname = usePathname() ?? '/';
  const first = pathname.split('/')[1];
  const lang = isLocale(first) ? first : defaultLocale;
  const t = getDictionary(lang).notFound;

  return (
    <section className="nf">
      <Reveal>
        <p className="nf-code" aria-hidden="true">
          {t.code}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <p className="eyebrow">Error {t.code}</p>
        <h1>{t.title}</h1>
        <p className="lead">{t.lead}</p>
      </Reveal>
      <Reveal delay={0.16}>
        <div className="terminal" aria-hidden="true">
          <div className="terminal-bar">
            <span />
            <span />
            <span />
          </div>
          <div className="terminal-body">
            <p>
              <span className="prompt">{t.prompt}</span> cd {pathname}
            </p>
            <p className="err">
              bash: cd: {pathname}: {t.error}
            </p>
            <p>
              <span className="prompt">{t.prompt}</span> <span className="cursor" />
            </p>
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.24}>
        <div className="hero-actions">
          <Link href={href(lang, 'home')} className="btn btn-primary">
            {t.home}
          </Link>
          <Link href={href(lang, 'projects')} className="btn btn-ghost">
            {t.projects}
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
