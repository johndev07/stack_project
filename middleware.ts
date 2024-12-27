import type { NextRequest } from "next/server";
import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

export default function middleware(req: NextRequest) {
  return withAuth(req, {
    isReturnToCurrentPage: true,
  });
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - auth
     * - favicon.ico (favicon file)
     * - robots.txt
     * - images
     * - login
     * - homepage (represented with $ after beginning /)
     */
    "/((?!api|_next/static|_next/image|auth|favicon.ico|robots.txt|images|login|$).*)",
  ],
};