import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

import { readAllPublic } from "@/db/policies";
import { MechanicsIdType } from "@/features/dota-2/types/mechanics-id-type";
import { dota2Heroes } from "../heroes/heroes";

export const dota2MechanicsExamples = pgTable.withRLS(
  "dota_2_mechanics_examples",
  {
    id: serial("id").primaryKey(),
    mechanicId: text("mechanic_id").notNull().unique().$type<MechanicsIdType>(),
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
