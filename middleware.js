import { NextResponse } from "next/server";
import { isLoggedIn } from "./actions/authAction";

export async function middleware(request /* NextRequest */) {
    const isLogin = await isLoggedIn()
    const pathname = request.nextUrl.pathname
    if (pathname.startsWith("/userpanel") && !isLogin) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    console.log(pathname);
    // return NextResponse.redirect(new URL('/home', request.url))
}

export const config = {
    matcher: ['/userpanel/:path*', "/login"],
}