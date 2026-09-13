import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

import { readAllPublic } from "@/db/policies";
import { dota2Patches } from "..";
import { dota2MechanicsFormulas } from "./mechanics-formulas";
import { MechanicsFormulasIdType } from "@/features/dota-2/types/mechanics-formulas-id-type";

export const dota2MechanicsFormulasValue = pgTable.withRLS(
  "dota_2_mechanics_formulas_value",
  {
    id: serial("id").primaryKey(),
    patchId: text("patch_id")
      .notNull()
      .references(() => dota2Patches.patchId),
    mechanicFormulaId: text("mechanic_formula_id")
      .notNull()
      .references(() => dota2MechanicsFormulas.mechanicFormulaId)
      .$type<MechanicsFormulasIdType>(),
    value: text("value"),
    valueType: text("value_type"),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
      .defaultNow()
      .notNull(),
  },
  () => [readAllPublic],
);

export type Dota2MechanicsFormulasValueInsertType =
  typeof dota2MechanicsFormulasValue.$inferInsert;
