import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDictionary } from '@/dictionaries';
import { isLocale, locales } from '@/lib/i18n';
import { getProject, projects } from '@/content/projects';
import { ProjectDetail } from '@/components/sections/ProjectDetail';

type Params = Promise<{ lang: string; id: string }>;

export function generateStaticParams() {
  return locales.flatMap((lang) => projects.map((p) => ({ lang, id: p.id })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang, id } = await params;
  const project = getProject(id);
  if (!isLocale(lang) || !project) return {};
  return {
    title: `${project.title[lang]} — ${getDictionary(lang).meta.title}`,
    description: project.summary[lang],
  };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { lang, id } = await params;
  const project = getProject(id);
  if (!isLocale(lang) || !project) notFound();

  const index = projects.indexOf(project);

  return (
    <ProjectDetail
      project={project}
      locale={lang}
      t={getDictionary(lang).pages.project}
      previous={projects[index - 1]}
      next={projects[index + 1]}
    />
  );
}
