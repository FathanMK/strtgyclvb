import { getDbAsync } from "@/db";
import { dota2Mechanics } from "../db/schemas";
import { asc } from "drizzle-orm";
import { cache } from "react";

export const getMechanics = cache(async () => {
  const db = await getDbAsync();
  const data = await db
    .select()
    .from(dota2Mechanics)
    .orderBy(asc(dota2Mechanics.name));

  return data;
});
