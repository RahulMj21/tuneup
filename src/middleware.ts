// import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";

// export default authMiddleware({
//     debug: true,
//     afterAuth(auth, req) {
//         if (!auth.userId && !auth.isPublicRoute) {
//             return redirectToSignIn({ returnBackUrl: req.url });
//         }
//     },
// });

// export const config = {
//     matcher: [
//         "/boards",
//         "/boards/(.*)",
//         "/chat",
//         "/chat/(.*)",
//         "/dashboard",
//         "/events",
//         "/hours",
//         "/settings",
//         "/team",
//     ],
// };

import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ["/"],
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
