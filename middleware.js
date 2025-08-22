import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  
  const protectedPaths = ["/dashboard/add-product"]; //protected page route

  const url = req.nextUrl.clone();
  
  // request path protectedPaths
  if (protectedPaths.some((path) => url.pathname.startsWith(path))) {
  
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!token) {
      // logged out user → redirect to login
      url.pathname = "/Login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}


export const config = {
  matcher: ["/dashboard/add-product/:path*"], // 
};
