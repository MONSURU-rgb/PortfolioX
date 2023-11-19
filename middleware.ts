import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: [
    // "/dashboard",
    // "/portfolios",
    "/add-client",
    "/calls",
    "/industries",
    "/messages",
    "/transaction-history",
    "/customers",
  ],
};

export function middleware(request: NextRequest) {
  // Retrieve the user token from cookies
  const userToken = request.cookies.get("my-user")?.value as string;

  // Check if the user token exists
  if (userToken) {
    // Parse the user token to access its properties
    const auth = JSON.parse(userToken);

    // Check if the 'token' property exists in 'auth'
    if (auth && auth.token) {
      // User is authenticated, allow access to the protected route
      return null;
    }
  }

  // User is not authenticated, check if the current route is in the matcher
  const currentRoute = request.nextUrl.pathname;
  if (config.matcher.includes(currentRoute)) {
    // Redirect to the home page for unauthorized access to protected routes
    return NextResponse.redirect(new URL("/", request.url).toString());
  }

  // For non-protected routes, allow access
  return null;
}
