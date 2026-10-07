import { NextResponse, type NextRequest } from 'next/server';
import { LANG_COOKIE, detectLocale, isLocale } from '@/lib/i18n';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split('/')[1];

  // Ya tiene prefijo de idioma: continuar.
  if (isLocale(firstSegment)) return NextResponse.next();

  const locale = detectLocale({
    cookie: request.cookies.get(LANG_COOKIE)?.value,
    // Vercel agrega este encabezado con el país del visitante.
    country: request.headers.get('x-vercel-ip-country'),
    acceptLanguage: request.headers.get('accept-language'),
  });

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Excluye archivos estáticos, _next y api.
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
