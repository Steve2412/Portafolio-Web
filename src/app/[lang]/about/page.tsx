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
    <div className="about">
      <PageHead title={about.title} />
      <Reveal delay={0.16}>
        <div className="about-intro">
          {about.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Reveal>

      <section className="section" aria-labelledby="edu-title">
        <Reveal>
          <h2 id="edu-title" className="section-title">
            {about.education.title}
          </h2>
        </Reveal>
        <ol className="edu-timeline">
          {about.education.items.map((edu, i) => (
            <li key={edu.id} className="tl-item">
              <div className="tl-marker">
                <span className="tl-year">{edu.year}</span>
                <span className="tl-duration">{edu.duration}</span>
              </div>
              <Reveal delay={0.08 + i * 0.06}>
                <EducationCard edu={edu} />
              </Reveal>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
