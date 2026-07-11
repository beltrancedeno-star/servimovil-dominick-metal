import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicAdminRoutes = ["/admin/login", "/admin/forgot-password", "/admin/reset-password"];

function hasSupabaseAuthCookie(request: NextRequest) {
  const cookieNames = request.cookies.getAll().map((cookie) => cookie.name);

  return cookieNames.some((name) => name.startsWith("sb-") && name.includes("auth-token"));
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const isPublicAdminRoute = publicAdminRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`));

  if (isPublicAdminRoute) {
    if (hasSupabaseAuthCookie(request)) {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }

    return NextResponse.next();
  }

  if (!hasSupabaseAuthCookie(request)) {
    const redirectUrl = new URL("/admin/login", request.url);
    redirectUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
