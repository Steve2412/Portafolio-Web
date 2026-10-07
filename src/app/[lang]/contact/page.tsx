import { notFound } from 'next/navigation';
import { FaLocationDot } from 'react-icons/fa6';
import { getDictionary } from '@/dictionaries';
import { isLocale } from '@/lib/i18n';
import { PageHead } from '@/components/ui/PageHead';
import { Reveal } from '@/components/motion/Reveal';
import { ContactCards } from '@/components/sections/ContactCards';

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const { contact } = dict.pages;
  const { reach } = dict.home;

  return (
    <>
      <PageHead title={contact.title} lead={contact.lead} />
      <Reveal delay={0.12}>
        <ContactCards t={contact} />
        <div className="contact-meta">
          <p className="reach-meta">
            <FaLocationDot aria-hidden="true" />
            {reach.location}
          </p>
          <p className="reach-meta">
            <span className="status-dot" aria-hidden="true" />
            <span>
              {reach.openLabel}: <strong>{reach.openValue}</strong>
            </span>
          </p>
        </div>
      </Reveal>
    </>
  );
}
