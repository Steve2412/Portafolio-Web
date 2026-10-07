import Image from 'next/image';
import { FaLocationDot, FaRegCalendar } from 'react-icons/fa6';
import type { Dictionary } from '@/dictionaries/es';

export function EducationCard({ edu }: { edu: Dictionary['pages']['about']['education'] }) {
  return (
    <article className="edu">
      <div className="edu-logo">
        <Image src="/images/urbe-logo.png" alt={edu.logoAlt} width={210} height={210} />
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
      </div>
    </article>
  );
}
