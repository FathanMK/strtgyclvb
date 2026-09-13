import { readAllPublic } from "@/db/policies";
import { MechanicsConstantsIdType } from "@/features/dota-2/types/mechanics-constants-id-type";
import { MechanicsFormulasIdType } from "@/features/dota-2/types/mechanics-formulas-id-type";
import { pgTable, primaryKey, text } from "drizzle-orm/pg-core";

export const dota2MechanicsConstantsMechanicsFormulas = pgTable(
  "dota_2_mechanics_constants_mechanics_formulas",
  {
    mechanicConstantId: text("mechanic_constant_id")
      .notNull()
      .$type<MechanicsConstantsIdType>(),
    mechanicFormulaId: text("mechanic_formula_id")
      .notNull()
      .$type<MechanicsFormulasIdType>(),
  },
  (t) => [
    primaryKey({ columns: [t.mechanicConstantId, t.mechanicFormulaId] }),
    readAllPublic,
  ],
);

export type Dota2MechanicsConstantsMechanicsFormulasInsertType =
  typeof dota2MechanicsConstantsMechanicsFormulas.$inferInsert;
