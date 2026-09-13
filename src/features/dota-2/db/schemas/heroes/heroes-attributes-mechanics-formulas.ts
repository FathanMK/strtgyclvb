import { readAllPublic } from "@/db/policies";
import { HeroesAttributesIdType } from "@/features/dota-2/types/heroes-attributes-id-type";
import { MechanicsFormulasIdType } from "@/features/dota-2/types/mechanics-formulas-id-type";
import { pgTable, primaryKey, text } from "drizzle-orm/pg-core";

export const dota2HeroesAttributesMechanicsFormulas = pgTable(
  "dota_2_heroes_attributes_mechanics_formulas",
  {
    attributeId: text("attribute_id").notNull().$type<HeroesAttributesIdType>(),
    mechanicFormulaId: text("mechanic_formula_id")
      .notNull()
      .$type<MechanicsFormulasIdType>(),
  },
  (t) => [
    primaryKey({ columns: [t.attributeId, t.mechanicFormulaId] }),
    readAllPublic,
  ],
);

export type Dota2HeroesAttributesMechanicsFormulasInsertType =
  typeof dota2HeroesAttributesMechanicsFormulas.$inferInsert;
