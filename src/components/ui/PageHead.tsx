import { Reveal } from '@/components/motion/Reveal';

export function PageHead({ eyebrow, title, lead }: { eyebrow?: string; title: string; lead: string }) {
  return (
    <header className="page-head">
      {eyebrow && (
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={eyebrow ? 0.08 : 0}>
        <h1>{title}</h1>
      </Reveal>
      <Reveal delay={eyebrow ? 0.16 : 0.08}>
        <p className="lead">{lead}</p>
      </Reveal>
    </header>
  );
}
