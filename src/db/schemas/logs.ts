import { jsonb, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { readAllPublic } from "../policies";
import { ContentLogType } from "@/types/content-log-type";

export const logs = pgTable(
  "logs",
  {
    id: serial("id").primaryKey(),
    title: text("title"),
    type: text("type"),
    content: jsonb("content").$type<ContentLogType[]>(),
    createdAt: timestamp("created_at", {
      withTimezone: true,
      mode: "string",
    }).defaultNow(),
  },
  () => [readAllPublic],
);

export type LogsInsertType = typeof logs.$inferInsert;
