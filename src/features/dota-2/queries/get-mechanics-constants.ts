import { getDbAsync } from "@/db";
import { dota2MechanicsConstants } from "../db/schemas";
import { asc } from "drizzle-orm";
import { cache } from "react";

export const getMechanicsConstants = cache(async () => {
  const db = await getDbAsync();
  const data = await db
    .select()
    .from(dota2MechanicsConstants)
    .orderBy(asc(dota2MechanicsConstants.name));

  return data;
});
