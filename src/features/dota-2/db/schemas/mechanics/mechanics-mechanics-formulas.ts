import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

import { readAllPublic } from "@/db/policies";
import { dota2Mechanics } from "./mechanics";
import { dota2MechanicsFormulas } from "./mechanics-formulas";
import { MechanicsFormulasIdType } from "@/features/dota-2/types/mechanics-formulas-id-type";
import { MechanicsIdType } from "@/features/dota-2/types/mechanics-id-type";

export const dota2MechanicsMechanicsFormulas = pgTable.withRLS(
  "dota_2_mechanics_mechanics_formulas",
  {
    id: serial("id").primaryKey(),
    mechanicId: text("mechanic_id")
      .notNull()
      .references(() => dota2Mechanics.mechanicId)
      .$type<MechanicsIdType>(),
    mechanicFormulaId: text("mechanic_formula_id")
      .notNull()
      .references(() => dota2MechanicsFormulas.mechanicFormulaId)
      .$type<MechanicsFormulasIdType>(),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
      .defaultNow()
      .notNull(),
  },
  () => [readAllPublic],
);

export type Dota2MechanicsMechanicsFormulasInsertType =
  typeof dota2MechanicsMechanicsFormulas.$inferInsert;
export type Dota2MechanicsMechanicsFormulasSelectType =
  typeof dota2MechanicsMechanicsFormulas.$inferSelect;
