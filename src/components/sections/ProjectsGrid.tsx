'use client';

import { useState } from 'react';
import type { Locale } from '@/lib/i18n';
import type { Project } from '@/content/projects';
import { Reveal } from '@/components/motion/Reveal';
import { ProjectCard } from '@/components/sections/ProjectCard';

const PAGE_SIZE = 6;

export function ProjectsGrid({
  projects,
  locale,
  viewLabel,
  paginationLabel,
  previousLabel,
  nextLabel,
  pageLabel,
  ofLabel,
}: {
  projects: Project[];
  locale: Locale;
  viewLabel: string;
  paginationLabel: string;
  previousLabel: string;
  nextLabel: string;
  pageLabel: string;
  ofLabel: string;
}) {
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(projects.length / PAGE_SIZE);
  const visibleProjects = projects.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <>
      <div className="cards">
        {visibleProjects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.06} className="card-cell">
            <ProjectCard project={project} locale={locale} viewLabel={viewLabel} />
          </Reveal>
        ))}
      </div>
      {pageCount > 1 && (
        <nav className="projects-pagination" aria-label={paginationLabel}>
          <button
            className="btn btn-ghost"
            type="button"
            onClick={() => setPage((currentPage) => currentPage - 1)}
            disabled={page === 1}
          >
            {previousLabel}
          </button>
          <span aria-live="polite">
            {pageLabel} {page} {ofLabel} {pageCount}
          </span>
          <button
            className="btn btn-ghost"
            type="button"
            onClick={() => setPage((currentPage) => currentPage + 1)}
            disabled={page === pageCount}
          >
            {nextLabel}
          </button>
        </nav>
      )}
    </>
  );
}
