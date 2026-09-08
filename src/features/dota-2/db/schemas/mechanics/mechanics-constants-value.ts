import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

import { readAllPublic } from "@/db/policies";
import { dota2MechanicsConstants, dota2Patches } from "..";
import { MechanicsConstantsIdType } from "@/features/dota-2/types/mechanics-constants-id-type";

export const dota2MechanicsConstantsValue = pgTable.withRLS(
  "dota_2_mechanics_constants_value",
  {
    id: serial("id").primaryKey(),
    patchId: text("patch_id")
      .notNull()
      .references(() => dota2Patches.patchId),
    mechanicConstantId: text("mechanic_constant_id")
      .notNull()
      .references(() => dota2MechanicsConstants.mechanicConstantId)
      .$type<MechanicsConstantsIdType>(),
    value: text("value"),
    valueType: text("value_type"),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
      .defaultNow()
      .notNull(),
  },
  () => [readAllPublic],
);

export type Dota2MechanicsConstantsValueInsert =
  typeof dota2MechanicsConstantsValue.$inferInsert;
