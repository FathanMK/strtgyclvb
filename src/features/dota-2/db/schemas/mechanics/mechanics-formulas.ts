import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

import { readAllPublic } from "@/db/policies";
import { MechanicsFormulasIdType } from "@/features/dota-2/types/mechanics-formulas-id-type";

export const dota2MechanicsFormulas = pgTable.withRLS(
  "dota_2_mechanics_formulas",
  {
    id: serial("id").primaryKey(),
    mechanicFormulaId: text("mechanic_formula_id")
      .notNull()
      .unique()
      .$type<MechanicsFormulasIdType>(),
    name: text("name"),
    descriptions: text("descriptions").array(),
    category: text("category"),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
      .defaultNow()
      .notNull(),
  },
  () => [readAllPublic],
);

export type Dota2MechanicsFormulasInsertType =
  typeof dota2MechanicsFormulas.$inferInsert;
export type Dota2MechanicsFormulasSelectType =
  typeof dota2MechanicsFormulas.$inferSelect;
