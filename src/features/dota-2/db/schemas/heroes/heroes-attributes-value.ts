import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

import { readAllPublic } from "@/db/policies";
import { dota2HeroesAttributes, dota2Heroes, dota2Patches } from "../";
import { HeroesAttributesIdType } from "@/features/dota-2/types";

export const dota2HeroesAttributesValue = pgTable.withRLS(
  "dota_2_heroes_attributes_value",
  {
    id: serial("id").primaryKey(),
    patchId: text("patch_id")
      .notNull()
      .references(() => dota2Patches.patchId),
    heroId: text("hero_id")
      .notNull()
      .references(() => dota2Heroes.heroId),
    attributeId: text("attribute_id")
      .notNull()
      .references(() => dota2HeroesAttributes.attributeId)
      .$type<HeroesAttributesIdType>(),
    value: text("value"),
    valueType: text("value_type"),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
      .defaultNow()
      .notNull(),
  },
  () => [readAllPublic],
);

export type Dota2HeroesAttributesValueInsertType =
  typeof dota2HeroesAttributesValue.$inferInsert;
