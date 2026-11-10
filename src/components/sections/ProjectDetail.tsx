import Image from 'next/image';
import Link from 'next/link';
import { FaArrowDown, FaArrowLeft, FaArrowRight, FaGithub } from 'react-icons/fa6';
import type { Dictionary } from '@/dictionaries/es';
import type { ContentBlock, Project } from '@/content/projects';
import { href, projectHref, type Locale } from '@/lib/i18n';
import { Reveal } from '@/components/motion/Reveal';

function Blocks({ blocks }: { blocks: ContentBlock[] }) {
  return blocks.map((block, i) => {
    if (typeof block === 'string') return <p key={i}>{block}</p>;
    const List = block.ordered ? 'ol' : 'ul';
    return (
      <List key={i}>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </List>
    );
  });
}

/** Plantilla de la página de detalle de un proyecto; todo el contenido sale de `content/projects.ts`. */
export function ProjectDetail({
  project,
  locale,
  t,
  previous,
  next,
}: {
  project: Project;
  locale: Locale;
  t: Dictionary['pages']['project'];
  previous?: Project;
  next?: Project;
}) {
  const title = project.title[locale];
  const details = project.details[locale];

  return (
    <>
      <header className="pd-hero">
        <Reveal>
          <Link href={href(locale, 'projects')} className="pd-back">
            <FaArrowLeft aria-hidden="true" /> {t.back}
          </Link>
        </Reveal>
        <div className="pd-hero-row">
          <div>
            <Reveal delay={0.06}>
              <h1>{title}</h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="lead">{project.summary[locale]}</p>
            </Reveal>
          </div>
          <Reveal delay={0.18}>
            <a href="#project-content" className="pd-scroll" aria-label={t.scrollToContent}>
              <FaArrowDown aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </header>

      <Reveal delay={0.2}>
        <div className={`pd-cover ${project.imageFit === 'contain' ? 'pd-cover--contain' : ''}`}>
          <Image
            src={project.image}
            alt={`${t.coverAlt}: ${title}`}
            fill
            priority
            sizes="(max-width: 1100px) 100vw, 1100px"
          />
        </div>
      </Reveal>

      <div id="project-content" className="pd-layout">
        <aside className="pd-aside">
          <dl>
            <div>
              <dt>{t.client}</dt>
              <dd>{project.client[locale]}</dd>
            </div>
            <div>
              <dt>{t.service}</dt>
              <dd>{project.service[locale]}</dd>
            </div>
            <div>
              <dt>{t.technologies}</dt>
              <dd>
                <ul className="tags">
                  {project.tech.map((tech) => (
                    <li key={tech} className="tag">
                      {tech}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
            <div>
              <dt>{t.repository}</dt>
              <dd>
                <a className="pd-repo" href={project.repository} target="_blank" rel="noopener noreferrer">
                  <FaGithub aria-hidden="true" /> {t.viewOnGithub} <span aria-hidden="true">↗</span>
                </a>
              </dd>
            </div>
          </dl>
        </aside>

        <article className="pd-body">
          <h2>{t.about}</h2>
          <Blocks blocks={details.about} />
          <h3>{t.goal}</h3>
          <Blocks blocks={details.goal} />
          <h2>{t.execution}</h2>
          <Blocks blocks={details.execution} />
          <h2>{t.results}</h2>
          <Blocks blocks={details.results} />

          {project.gallery && project.gallery.length > 0 && (
            <div className="pd-gallery">
              {project.gallery.map((img) => (
                <figure key={img.src}>
                  <div className={`pd-shot ${img.fit === 'contain' ? 'pd-cover--contain' : ''}`}>
                    <Image
                      src={img.src}
                      alt={img.caption?.[locale] ?? `${t.coverAlt}: ${title}`}
                      fill
                      sizes="(max-width: 820px) 100vw, 360px"
                    />
                  </div>
                  {img.caption && <figcaption>{img.caption[locale]}</figcaption>}
                </figure>
              ))}
            </div>
          )}
        </article>
      </div>

      {(previous || next) && (
        <nav className="pd-nav" aria-label={t.navLabel}>
          {previous ? (
            <Link href={projectHref(locale, previous.id)} className="pd-nav-link">
              <span className="pd-nav-label">
                <FaArrowLeft aria-hidden="true" /> {t.previous}
              </span>
              <span className="pd-nav-title">{previous.title[locale]}</span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link href={projectHref(locale, next.id)} className="pd-nav-link pd-nav-link--next">
              <span className="pd-nav-label">
                {t.next} <FaArrowRight aria-hidden="true" />
              </span>
              <span className="pd-nav-title">{next.title[locale]}</span>
            </Link>
          )}
        </nav>
      )}
    </>
  );
}
