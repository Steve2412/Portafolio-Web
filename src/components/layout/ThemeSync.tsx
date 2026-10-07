'use client';

import { useEffect, useLayoutEffect } from 'react';
import { resolveTheme } from '@/lib/theme';

const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * Al cambiar de idioma, Next vuelve a crear el <html> y el atributo data-theme
 * (puesto fuera de React por el script del <head>) se pierde. Este componente lo
 * restablece antes del pintado, así idioma y tema son acciones independientes.
 */
export function ThemeSync() {
  useIsoLayoutEffect(() => {
    const root = document.documentElement;
    if (!root.hasAttribute('data-theme')) {
      root.setAttribute('data-theme', resolveTheme());
    }
  });
  return null;
}
