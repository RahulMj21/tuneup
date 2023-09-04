import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({});

export const config = {
    matcher: [
        "/boards",
        "/boards/(.*)",
        "/chat",
        "/chat/(.*)",
        "/dashboard",
        "/events",
        "/hours",
        "/settings",
        "/team",
    ],
};
