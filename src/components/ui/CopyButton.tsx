'use client';

import { useEffect, useRef, useState } from 'react';
import { FaCheck, FaRegCopy } from 'react-icons/fa6';

export function CopyButton({
  text,
  label,
  copiedLabel,
  ariaLabel,
}: {
  text: string;
  label: string;
  copiedLabel: string;
  ariaLabel: string;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      /* Clipboard access may be unavailable; the mail link remains usable. */
    }
  }

  return (
    <button type="button" className="copy-btn" onClick={copy} aria-label={ariaLabel}>
      {copied ? <FaCheck aria-hidden="true" /> : <FaRegCopy aria-hidden="true" />}
      <span aria-live="polite">{copied ? copiedLabel : label}</span>
    </button>
  );
}
