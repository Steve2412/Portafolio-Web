import { notFound } from 'next/navigation';

// Captura cualquier ruta inexistente bajo /es o /en para mostrar el 404 con el diseño del sitio
// (not-found.tsx de un segmento dinámico solo se activa con notFound()).
export default function CatchAll() {
  notFound();
}
