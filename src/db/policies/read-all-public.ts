import { sql } from "drizzle-orm";
import { pgPolicy } from "drizzle-orm/pg-core";

export const readAllPublic = pgPolicy("Read all, public", {
  as: "permissive",
  for: "select",
  to: "public",
  using: sql`(true)`,
});
