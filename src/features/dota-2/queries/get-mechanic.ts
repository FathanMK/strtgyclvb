import { getDbAsync } from "@/db";
import { dota2Mechanics } from "../db/schemas";
import { eq } from "drizzle-orm";
import { cache } from "react";
import { MechanicsIdType } from "../types/mechanics-id-type";

export const getMechanic = cache(async (mechanicId: MechanicsIdType) => {
  const db = await getDbAsync();
  const data = (
    await db
      .select()
      .from(dota2Mechanics)
      .where(eq(dota2Mechanics.mechanicId, mechanicId))
      .limit(1)
  ).at(0);

  return data;
});
