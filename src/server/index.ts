import { z } from "zod";

import { publicProcedure, router } from "@/server/trpc";

export const appRouter = router({
    getData: publicProcedure.query(async () => "getData"),
    setData: publicProcedure
        .input(z.string())
        .mutation(async ({ input }) => input),
});

export type AppRouter = typeof appRouter;
