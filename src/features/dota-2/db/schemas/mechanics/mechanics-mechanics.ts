import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

import { readAllPublic } from "@/db/policies";
import { dota2Mechanics } from "./mechanics";
import { MechanicsIdType } from "@/features/dota-2/types/mechanics-id-type";

export const dota2MechanicsMechanics = pgTable.withRLS(
  "dota_2_mechanics_mechanics",
  {
    id: serial("id").primaryKey(),
    mechanicId: text("mechanic_id")
      .notNull()
      .references(() => dota2Mechanics.mechanicId)
      .$type<MechanicsIdType>(),
    secondMechanicId: text("second_mechanic_id")
      .notNull()
      .references(() => dota2Mechanics.mechanicId)
      .$type<MechanicsIdType>(),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
      .defaultNow()
      .notNull(),
  },
  () => [readAllPublic],
);

export type Dota2MechanicsMechanicsInsertType =
  typeof dota2MechanicsMechanics.$inferInsert;
export type Dota2MechanicsMechanicsSelectType =
  typeof dota2MechanicsMechanics.$inferSelect;
