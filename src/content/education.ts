/**
 * Logos de cada institución, por id de la entrada del diccionario. Sin logo se muestra un ícono.
 * `bg`: color de fondo del propio logo; si existe, el recuadro toma ese color y la imagen lo llena sin margen.
 */
export const educationLogos: Record<string, { src: string; bg?: string } | undefined> = {
  urbe: { src: '/images/urbe-logo.png' },
  'alexis-villanueva': { src: '/images/alexis-villanueva-logo.png', bg: '#011a5c' },
  cieni: { src: '/images/cieni-logo.png' },
};
