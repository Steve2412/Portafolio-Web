export type Theme = 'light' | 'dark';
export const THEME_KEY = 'theme';

/** Preferencia manual guardada > hora local (claro de 7:00 a 19:00). */
export function resolveTheme(): Theme {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    /* almacenamiento no disponible */
  }
  const hour = new Date().getHours();
  return hour >= 7 && hour < 19 ? 'light' : 'dark';
}

/**
 * Script que se inyecta en <head> y corre antes del primer pintado.
 * Misma lógica que resolveTheme(), pero en texto plano para ejecutarse sin esperar a React.
 */
export const themeInitScript = `(function(){try{
var s=localStorage.getItem('${THEME_KEY}');
var t=(s==='light'||s==='dark')?s:((function(h){return h>=7&&h<19})(new Date().getHours())?'light':'dark');
document.documentElement.setAttribute('data-theme',t);
}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;
