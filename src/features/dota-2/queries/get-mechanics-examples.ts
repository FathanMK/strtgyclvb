import { getDbAsync } from "@/db";
import { dota2MechanicsExamples } from "../db/schemas";
import { eq } from "drizzle-orm";
import { cache } from "react";
import { MechanicsIdType } from "../types/mechanics-id-type";
import { getHero } from "./get-hero";

export const getMechanicsExamples = cache(
  async (mechanicId: MechanicsIdType) => {
    const db = await getDbAsync();
    const data = await db
      .select()
      .from(dota2MechanicsExamples)
      .where(eq(dota2MechanicsExamples.mechanicId, mechanicId));

    const result = [];

    for (let mechanic of data) {
      const hero = await getHero(mechanic.heroId ?? "");

      result.push({ ...mechanic, hero });
    }

    return result;
  },
);
