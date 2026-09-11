import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

import { readAllPublic } from "@/db/policies";
import { MechanicsIdType } from "@/features/dota-2/types/mechanics-id-type";

export const dota2Mechanics = pgTable.withRLS(
  "dota_2_mechanics",
  {
    id: serial("id").primaryKey(),
    mechanicId: text("mechanic_id").notNull().unique().$type<MechanicsIdType>(),
    name: text("name"),
    descriptions: text("descriptions").array(),
    category: text("category"),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
      .defaultNow()
      .notNull(),
  },
  () => [readAllPublic],
);

export type Dota2MechanicsInsertType = typeof dota2Mechanics.$inferInsert;
export type Dota2MechanicsSelectType = typeof dota2Mechanics.$inferSelect;
