import { auth } from "./app/_lib/auth.js";
export const middleware = auth;

export const config = {
  // matcher: ["/tv"],
  matcher: ["/guest", "/guest/:path*"],
};
