import Image from 'next/image';
import Link from 'next/link';
import { projectHref, type Locale } from '@/lib/i18n';
import type { ProjectSummary } from '@/content/projects';

export function ProjectCard({
  project,
  locale,
  viewLabel,
}: {
  project: ProjectSummary;
  locale: Locale;
  viewLabel: string;
}) {
  const title = project.title[locale];
  const summary = project.summary[locale];

  return (
    <article className="card">
      <div className={`card-media ${project.imageFit === 'contain' ? 'card-media--contain' : ''}`}>
        <Image
          src={project.image}
          alt={`${title} ${locale === 'es' ? 'vista previa del proyecto' : 'project preview'}`}
          fill
          loading="eager"
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
        />
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{summary}</p>
        <ul className="tags">
          {project.tech.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>
        <Link className="card-link" href={projectHref(locale, project.id)}>
          {viewLabel} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
