import { notFound } from 'next/navigation';
import { getDictionary } from '@/dictionaries';
import { isLocale } from '@/lib/i18n';
import { PageHead } from '@/components/ui/PageHead';
import { Reveal } from '@/components/motion/Reveal';
import { EducationCard } from '@/components/sections/EducationCard';

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const { about } = dict.pages;

  return (
    <>
      <PageHead title={about.title} lead={about.lead} />

      <section className="section" aria-labelledby="edu-title">
        <Reveal>
          <h2 id="edu-title" className="section-title">
            {about.education.title}
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="edu-wrap">
          <EducationCard edu={about.education} />
        </Reveal>
      </section>
    </>
  );
}
