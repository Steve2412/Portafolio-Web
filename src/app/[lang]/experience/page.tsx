import { notFound } from 'next/navigation';
import { getDictionary } from '@/dictionaries';
import { isLocale } from '@/lib/i18n';
import { experiences } from '@/content/experience';
import { PageHead } from '@/components/ui/PageHead';
import { Reveal } from '@/components/motion/Reveal';
import { ExperienceCard } from '@/components/sections/ExperienceCard';

export default async function ExperiencePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const { experience } = dict.pages;

  return (
    <>
      <PageHead title={experience.title} lead={experience.lead} />
      <div className="xp-grid">
        {experiences.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.08} className="card-cell">
            <ExperienceCard item={item} locale={lang} currentLabel={experience.current} />
          </Reveal>
        ))}
      </div>
    </>
  );
}
