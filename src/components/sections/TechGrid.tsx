import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/dictionaries/es';
import { techGroups } from '@/content/tech';

export function TechGrid({
  locale,
  titles,
}: {
  locale: Locale;
  titles: Dictionary['home']['what']['groups'];
}) {
  return (
    <div className="tech-groups">
      {techGroups.map(({ key, items }) => (
        <div key={key} className="tech-group">
          <h3>{titles[key]}</h3>
          <ul className="tech-grid">
            {items.map(({ name, Icon, detail }) => {
              const label = typeof name === 'string' ? name : name[locale];

              if (detail) {
                return (
                  <li key={label} className="tech-item tech-item--wide">
                    <Icon size={32} aria-hidden="true" />
                    <div className="tech-detail">
                      <span>{label}</span>
                      <ul className="tags">
                        {detail.map((d) => (
                          <li key={d} className="tag">
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              }

              return (
                <li key={label} className="tech-item">
                  <Icon size={32} aria-hidden="true" />
                  <span>{label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
