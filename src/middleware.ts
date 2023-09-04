import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";

export default authMiddleware({
    afterAuth(auth, req) {
        if (!auth.userId && !auth.isPublicRoute) {
            return redirectToSignIn({ returnBackUrl: req.url });
        }
    },
    publicRoutes: ["/", "/pricing", "/support", "/contact"],
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
