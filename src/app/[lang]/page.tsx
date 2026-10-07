import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaLocationDot } from 'react-icons/fa6';
import { getDictionary } from '@/dictionaries';
import { href, isLocale } from '@/lib/i18n';
import { site } from '@/content/site';
import { latestProjects } from '@/content/projects';
import { Reveal } from '@/components/motion/Reveal';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { TechGrid } from '@/components/sections/TechGrid';
import { Capabilities } from '@/components/sections/Capabilities';
import { ProjectCard } from '@/components/sections/ProjectCard';

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <section className="hero hero-grid">
        <div>
          <Reveal>
            <p className="eyebrow">{dict.home.role}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1>{site.name}</h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="lead">{dict.home.lead}</p>
          </Reveal>
          <Reveal delay={0.22}>
            <SocialLinks />
          </Reveal>
          <Reveal delay={0.28}>
            <div className="hero-actions">
              <Link href={href(lang, 'contact')} className="btn btn-primary">
                {dict.home.ctaContact}
              </Link>
              <a href={`/cv/CV-${lang.toUpperCase()}.pdf`} className="btn btn-ghost" download>
                {dict.ui.downloadCv}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="portrait-wrap">
          <div className="portrait">
            <Image
              src="/images/stefano.png"
              alt={dict.ui.photoAlt}
              width={800}
              height={800}
              priority
              sizes="(max-width: 820px) 80vw, 380px"
            />
          </div>
        </Reveal>
      </section>

      <section className="section" aria-labelledby="what-title">
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
        <Reveal delay={0.12}>
          <Capabilities items={dict.home.what.capabilities} />
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
          <Reveal delay={0.1}>
            <div className="avatar">
              <Image
                src="/images/stefano.png"
                alt={dict.ui.photoAlt}
                width={500}
                height={500}
                sizes="250px"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
