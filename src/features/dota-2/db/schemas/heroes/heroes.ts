import { readAllPublic } from "@/db/policies";
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const dota2Heroes = pgTable(
  "dota_2_heroes",
  {
    id: serial("id").primaryKey(),
    heroId: text("hero_id").notNull().unique(),
    name: text("name"),
    fullName: text("full-name"),
    descriptions: text("descriptions").array(),
    createdAt: timestamp("created_at", {
      withTimezone: true,
      mode: "string",
    }).defaultNow(),
  },
  () => [readAllPublic],
);

export type Dota2HeroesInsertType = typeof dota2Heroes.$inferInsert;
