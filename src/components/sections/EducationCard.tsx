import Image from 'next/image';
import { FaLanguage, FaLocationDot, FaRegCalendar } from 'react-icons/fa6';
import type { Dictionary } from '@/dictionaries/es';
import { educationLogos } from '@/content/education';

type Education = Dictionary['pages']['about']['education']['items'][number];

export function EducationCard({ edu }: { edu: Education }) {
  const logo = educationLogos[edu.id];

  return (
    <article className="edu">
      <div
        className={!logo ? 'edu-logo edu-logo--icon' : logo.bg ? 'edu-logo edu-logo--full' : 'edu-logo'}
        style={logo?.bg ? { background: logo.bg, borderColor: logo.bg } : undefined}
      >
        {logo ? (
          <Image src={logo.src} alt={edu.logoAlt} width={210} height={210} />
        ) : (
          <FaLanguage aria-hidden="true" />
        )}
      </div>
      <div className="edu-body">
        <div className="edu-title">
          <h3>{edu.degree}</h3>
          <span className="tag">{edu.level}</span>
        </div>
        <p className="edu-inst">{edu.institution}</p>
        <ul className="edu-meta">
          <li>
            <FaLocationDot aria-hidden="true" />
            {edu.location}
          </li>
          <li>
            <FaRegCalendar aria-hidden="true" />
            {edu.period}
          </li>
        </ul>
        {edu.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
        {edu.subjects && (
          <ul className="tags edu-subjects">
            {edu.subjects.map((s) => (
              <li key={s} className="tag">
                {s}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
