import { appRouter } from "@/server";
import { httpBatchLink } from "@trpc/client";

export const serverClient = appRouter.createCaller({
    links: [
        httpBatchLink({
            url: `${process.env.NEXT_PUBLIC_APP_URL}/api/trpc`,
        }),
    ],
});
