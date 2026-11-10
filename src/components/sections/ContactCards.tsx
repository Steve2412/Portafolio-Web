import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { SiUpwork } from 'react-icons/si';
import type { Dictionary } from '@/dictionaries/es';
import { site } from '@/content/site';
import { CopyButton } from '@/components/ui/CopyButton';

export function ContactCards({ t }: { t: Dictionary['pages']['contact'] }) {
  const channels = [
    {
      key: 'email',
      Icon: FaEnvelope,
      label: t.emailLabel,
      value: site.email,
      href: `mailto:${site.email}`,
      external: false,
    },
    {
      key: 'linkedin',
      Icon: FaLinkedinIn,
      label: 'LinkedIn',
      value: 'in/stefano-casa-full-stack-developer',
      href: site.socials.linkedin,
      external: true,
    },
    {
      key: 'upwork',
      Icon: SiUpwork,
      label: 'Upwork',
      value: t.upworkValue,
      href: site.socials.upwork,
      external: true,
    },
    {
      key: 'github',
      Icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/steve2412',
      href: site.socials.github,
      external: true,
    },
  ];

  return (
    <ul className="contact-grid">
      {channels.map(({ key, Icon, label, value, href, external }) => (
        <li key={key} className="contact-card">
          <span className="contact-icon" aria-hidden="true">
            <Icon size={17} />
          </span>
          <div className="contact-info">
            <p className="contact-label">{label}</p>
            <a
              className="contact-value"
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {value}
            </a>
          </div>
          {key === 'email' ? (
            <CopyButton
              text={site.email}
              label={t.copy}
              copiedLabel={t.copied}
              ariaLabel={t.copyAria}
            />
          ) : (
            <span className="contact-arrow" aria-hidden="true">
              ↗
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
