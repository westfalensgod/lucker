import { NextRequest, NextResponse } from "next/server";

export const config = {
    matcher: [
        /*
         * Match all paths except for:
         * 1. /api routes
         * 2. /_next (Next.js internals)
         * 3. /_static (inside /public)
         * 4. all root files inside /public (e.g. /favicon.ico)
         */
        "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
    ],
};

export default async function middleware(req: NextRequest) {
    // const url = req.nextUrl;
    //
    // const hostname = req.headers
    //     .get("host")!
    //     .replace(".localhost:3001", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);
    //
    // const path = url.pathname;
    //
    // if (hostname == `notes.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) {
    //     return NextResponse.rewrite(
    //         new URL(`/notes${path === "/" ? "" : path}`, req.url),
    //     );
    // }
    //
    // if (
    //     hostname === "localhost:3001" ||
    //     hostname === process.env.NEXT_PUBLIC_ROOT_DOMAIN
    // ) {
    //     return NextResponse.rewrite(new URL(req.url));
    // }
    //
    // return NextResponse.rewrite(new URL(`/${hostname}${path}`, req.url));
}