import type { Dictionary } from '@/dictionaries/es';
import { site } from '@/content/site';

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="site-footer">
      <div className="container mono">
        © {new Date().getFullYear()} {site.name}. {dict.ui.rights}
      </div>
    </footer>
  );
}
