import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { SiUpwork } from 'react-icons/si';
import { site } from '@/content/site';

const links = [
  { label: 'GitHub', href: site.socials.github, Icon: FaGithub },
  { label: 'LinkedIn', href: site.socials.linkedin, Icon: FaLinkedinIn },
  { label: 'Upwork', href: site.socials.upwork, Icon: SiUpwork },
];

export function SocialLinks({ variant }: { variant?: 'round' } = {}) {
  return (
    <ul className={variant === 'round' ? 'social social--round' : 'social'}>
      {links.map(({ label, href, Icon }) => (
        <li key={label}>
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
            <Icon size={18} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
