import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

import { readAllPublic } from "@/db/policies";
import { dota2Heroes } from "../heroes/heroes";
import { dota2Mechanics } from "./mechanics";

export const dota2MechanicsExamples = pgTable.withRLS(
  "dota_2_mechanics_examples",
  {
    id: serial("id").primaryKey(),
    mechanicId: text("mechanic_id")
      .notNull()
      .references(() => dota2Mechanics.mechanicId),
    heroId: text("hero_id")
      .notNull()
      .references(() => dota2Heroes.heroId),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
      .defaultNow()
      .notNull(),
  },
  () => [readAllPublic],
);

export type Dota2MechanicsExamplesInsertType =
  typeof dota2MechanicsExamples.$inferInsert;
export type Dota2MechanicsExamplesSelectType =
  typeof dota2MechanicsExamples.$inferSelect;
