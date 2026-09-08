import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

import { readAllPublic } from "@/db/policies";
import { HeroesAttributesIdType } from "@/features/dota-2/types/heroes-attributes-id-type";

export const dota2HeroesAttributes = pgTable.withRLS(
  "dota_2_heroes_attributes",
  {
    id: serial("id").primaryKey(),
    attributeId: text("attribute_id")
      .notNull()
      .unique()
      .$type<HeroesAttributesIdType>(),
    name: text("name"),
    descriptions: text("descriptions").array(),
    category: text("category"),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
      .defaultNow()
      .notNull(),
  },
  () => [readAllPublic],
);

export type Dota2HeroesAttributesInsertType =
  typeof dota2HeroesAttributes.$inferInsert;
