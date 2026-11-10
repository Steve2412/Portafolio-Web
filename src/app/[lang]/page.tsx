import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaAnglesRight, FaChevronDown, FaDownload, FaLocationDot } from 'react-icons/fa6';
import { getDictionary } from '@/dictionaries';
import { href, isLocale } from '@/lib/i18n';
import { site } from '@/content/site';
import { latestProjects } from '@/content/projects';
import { Reveal } from '@/components/motion/Reveal';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { TechGrid } from '@/components/sections/TechGrid';
import { ProjectCard } from '@/components/sections/ProjectCard';

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <section className="hero hero-grid">
        <div className="hero-copy">
          <Reveal>
            <p className="available-badge">
              <span className="status-dot" aria-hidden="true" />
              {dict.home.available}
            </p>
          </Reveal>
          <Reveal>
            <p className="eyebrow">{dict.home.role}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="hero-title">{site.name}</h1>
          </Reveal>
          <Reveal delay={0.14} className="hero-after">
            <p className="hero-specialty">{dict.home.specialty}</p>
          </Reveal>
          <Reveal delay={0.22} className="hero-after">
            <SocialLinks variant="round" />
          </Reveal>
          <Reveal delay={0.28} className="hero-after">
            <div className="hero-actions">
              <Link href={href(lang, 'contact')} className="btn btn-primary btn-pill">
                {dict.home.ctaContact}
                <FaAnglesRight aria-hidden="true" />
              </Link>
              <a href={`/cv/CV-${lang.toUpperCase()}.pdf`} className="btn btn-ghost btn-pill" download>
                {dict.ui.downloadCv}
                <FaDownload aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="portrait-wrap">
          <Image
            src="/images/stefano-cutout.png"
            alt={dict.ui.photoAlt}
            width={900}
            height={893}
            priority
            sizes="(max-width: 820px) 320px, 720px"
            className="portrait"
          />
        </Reveal>

        <a href="#stack" className="scroll-cue" aria-label={dict.ui.scrollDown}>
          <FaChevronDown aria-hidden="true" />
        </a>
      </section>

      <section id="stack" className="section" aria-labelledby="what-title">
        <Reveal>
          <p className="eyebrow">{dict.home.what.eyebrow}</p>
          <h2 id="what-title" className="section-title">
            {dict.home.what.title}
          </h2>
          <p className="lead">{dict.home.what.tagline}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <TechGrid locale={lang} titles={dict.home.what.groups} />
        </Reveal>
      </section>

      <section className="section" aria-labelledby="latest-title">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">{dict.home.latest.eyebrow}</p>
              <h2 id="latest-title" className="section-title">
                {dict.home.latest.title}
              </h2>
            </div>
            <Link href={href(lang, 'projects')} className="btn btn-ghost">
              {dict.home.latest.more} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
        <div className="cards">
          {latestProjects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08} className="card-cell">
              <ProjectCard project={p} locale={lang} viewLabel={dict.ui.viewProject} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section reach" aria-labelledby="reach-title">
        <div className="reach-grid">
          <Reveal>
            <h2 id="reach-title" className="section-title">
              {dict.home.reach.title}
            </h2>
            <p className="lead">{dict.home.reach.lead}</p>
            <p className="reach-role">
              {site.name} <span>· {dict.home.role}</span>
            </p>
            <p className="reach-meta">
              <FaLocationDot aria-hidden="true" />
              {dict.home.reach.location}
            </p>
            <p className="reach-meta">
              <span className="status-dot" aria-hidden="true" />
              <span>
                {dict.home.reach.openLabel}: <strong>{dict.home.reach.openValue}</strong>
              </span>
            </p>
            <SocialLinks />
            <div className="hero-actions">
              <Link href={href(lang, 'contact')} className="btn btn-primary">
                {dict.home.reach.cta}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
