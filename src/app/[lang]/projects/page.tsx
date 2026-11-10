import { notFound } from 'next/navigation';
import { getDictionary } from '@/dictionaries';
import { isLocale } from '@/lib/i18n';
import { projects, toSummary } from '@/content/projects';
import { PageHead } from '@/components/ui/PageHead';
import { ProjectsGrid } from '@/components/sections/ProjectsGrid';

export default async function ProjectsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <PageHead title={dict.pages.projects.title} lead={dict.pages.projects.lead} />
      <ProjectsGrid
        projects={projects.map(toSummary)}
        locale={lang}
        viewLabel={dict.ui.viewProject}
        paginationLabel={dict.ui.paginationLabel}
        previousLabel={dict.ui.previousPage}
        nextLabel={dict.ui.nextPage}
        pageLabel={dict.ui.page}
        ofLabel={dict.ui.of}
      />
    </>
  );
}
