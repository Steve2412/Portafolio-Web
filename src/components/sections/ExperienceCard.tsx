import Image from 'next/image';
import { FaLocationDot } from 'react-icons/fa6';
import type { Locale } from '@/lib/i18n';
import type { Experience } from '@/content/experience';

export function ExperienceCard({
  item,
  locale,
  currentLabel,
}: {
  item: Experience;
  locale: Locale;
  currentLabel: string;
}) {
  const { Icon } = item;

  return (
    <article className="xp-card">
      <div className="xp-band">
        <span className="mono">{item.org[locale]}</span>
        {item.current && (
          <span className="xp-badge">
            <span className="status-dot" aria-hidden="true" />
            {currentLabel}
          </span>
        )}
      </div>
      <div className={`xp-mark ${item.logoSrc ? 'xp-mark--logo' : ''}`} aria-hidden="true">
        {item.logoSrc ? (
          <Image src={item.logoSrc} alt="" width={52} height={52} className="xp-logo" />
        ) : Icon ? (
          <Icon size={28} />
        ) : (
          <span>{item.initials}</span>
        )}
      </div>
      <div className="xp-body">
        <h3>{item.role[locale]}</h3>
        <p className="xp-period">{item.period[locale]}</p>
        {item.location && (
          <p className="xp-loc">
            <FaLocationDot aria-hidden="true" />
            {item.location[locale]}
          </p>
        )}
        <p className="xp-summary">{item.summary[locale]}</p>
        <ul className="tags">
          {item.tags[locale].map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>
        {item.link && (
          <a
            className="card-link"
            href={item.link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.link.label[locale]} <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}
