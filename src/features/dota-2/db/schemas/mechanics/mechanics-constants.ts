import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

import { readAllPublic } from "@/db/policies";
import { MechanicsConstantsIdType } from "@/features/dota-2/types/mechanics-constants-id-type";

export const dota2MechanicsConstants = pgTable.withRLS(
  "dota_2_mechanics_constants",
  {
    id: serial("id").primaryKey(),
    mechanicConstantId: text("mechanic_constant_id")
      .notNull()
      .unique()
      .$type<MechanicsConstantsIdType>(),
    name: text("name"),
    descriptions: text("descriptions").array(),
    category: text("category"),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
      .defaultNow()
      .notNull(),
  },
  () => [readAllPublic],
);

export type Dota2MechanicsConstantsInsertType =
  typeof dota2MechanicsConstants.$inferInsert;
export type Dota2MechanicsConstantsSelectType =
  typeof dota2MechanicsConstants.$inferSelect;
