import type { Dictionary } from '@/dictionaries/es';
import { capabilities } from '@/content/capabilities';

export function Capabilities({ items }: { items: Dictionary['home']['what']['capabilities'] }) {
  return (
    <ul className="caps">
      {capabilities.map(({ key, Icon }) => (
        <li key={key} className="cap">
          <span className="cap-icon" aria-hidden="true">
            <Icon size={18} />
          </span>
          <div>
            <h3>{items[key].title}</h3>
            <p>{items[key].text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
