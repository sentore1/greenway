import { NextRequest, NextResponse } from "next/server";

const SESSION_TOKEN = "gw-admin-session-ok";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Let the login page and API through unconditionally
  if (
    pathname === "/blog/admin/login" ||
    pathname.startsWith("/api/admin-login")
  ) {
    return NextResponse.next();
  }

  // Guard everything else under /blog/admin
  if (pathname.startsWith("/blog/admin")) {
    const cookie = req.cookies.get("admin_auth");

    if (!cookie || cookie.value !== SESSION_TOKEN) {
      const loginUrl = new URL("/blog/admin/login", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/blog/admin/:path*", "/api/admin-login"],
};
