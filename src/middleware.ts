import { NextRequest } from "next/server";

const locales = ["en", "ar"];

// Get the locale from the pathname
function getLocale(request: NextRequest) {
  return "en";
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  console.log(pathname);
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
