import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

import { readAllPublic } from "@/db/policies";

export const dota2Patches = pgTable.withRLS(
  "dota_2_patches",
  {
    id: serial("id").primaryKey(),
    patchId: text("patch_id").notNull().unique(),
    name: text("name"),
    releaseDate: timestamp("release_date", { mode: "string" }),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
      .defaultNow()
      .notNull(),
  },
  (t) => [readAllPublic],
);

export type Dota2PatchesInsert = typeof dota2Patches.$inferInsert;
export type Dota2PatchesSelect = typeof dota2Patches.$inferSelect;
