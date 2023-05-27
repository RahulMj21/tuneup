import {
    index,
    int,
    mysqlTable,
    timestamp,
    varchar,
} from "drizzle-orm/mysql-core";

export const post = mysqlTable(
    "post",
    {
        id: int("id").autoincrement().primaryKey(),
        title: varchar("title", { length: 255 }).notNull(),
        description: varchar("description", { length: 255 }).notNull(),
        authorId: int("authorId").notNull(),
        createdAt: timestamp("createdAt").notNull().defaultNow(),
        updatedAt: timestamp("updatedAt").notNull().defaultNow().onUpdateNow(),
    },
    (post) => ({
        postAuthorIdx: index("postAuthorIdx").on(post.authorId),
    })
);
