import { getDbAsync } from "@/db";
import { dota2MechanicsFormulas } from "../db/schemas";
import { asc } from "drizzle-orm";
import { cache } from "react";

export const getMechanicsFormulas = cache(async () => {
  const db = await getDbAsync();
  const data = await db
    .select()
    .from(dota2MechanicsFormulas)
    .orderBy(asc(dota2MechanicsFormulas.name));

  return data;
});
