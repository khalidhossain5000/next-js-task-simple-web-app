import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // প্রোটেক্ট করা route path
  const protectedPaths = ["/dashboard/add-product"]; // তোমার protected page route

  const url = req.nextUrl.clone();
  
  // যদি request করা path protectedPaths এর মধ্যে থাকে
  if (protectedPaths.some((path) => url.pathname.startsWith(path))) {
    // getToken দিয়ে session check করা
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!token) {
      // logged out user → redirect to login
      url.pathname = "/Login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

// কোন path এ middleware apply হবে সেটা configure
export const config = {
  matcher: ["/dashboard/add-product/:path*"], // এখানে protected routes গুলো উল্লেখ
};
