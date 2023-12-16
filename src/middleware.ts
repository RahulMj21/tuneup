import { NextResponse } from "next/server";

export default function middleware() {
    NextResponse.next();
}

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
