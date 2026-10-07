/**
 * Las carpetas de src/app/[lang] usan nombres en inglés.
 * Estas reescrituras permiten URLs en español sin duplicar páginas:
 *   /es/sobre-mi  ->  /es/about   (la URL visible no cambia)
 */
const esRoutes = [
  ['sobre-mi', 'about'],
  ['proyectos', 'projects'],
  ['experiencia', 'experience'],
  ['contacto', 'contact'],
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return esRoutes.flatMap(([es, en]) => [
      { source: `/es/${es}`, destination: `/es/${en}` },
      { source: `/es/${es}/:path*`, destination: `/es/${en}/:path*` },
    ]);
  },
};

export default nextConfig;
