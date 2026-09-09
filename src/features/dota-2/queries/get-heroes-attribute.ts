import { getDbAsync } from "@/db";
import { dota2HeroesAttributes } from "../db/schemas";
import { eq } from "drizzle-orm";
import { cache } from "react";
import { HeroesAttributesIdType } from "../types/heroes-attributes-id-type";

export const getHeroesAttribute = cache(
  async (attributeId: HeroesAttributesIdType) => {
    const db = await getDbAsync();
    const data = (
      await db
        .select()
        .from(dota2HeroesAttributes)
        .where(eq(dota2HeroesAttributes.attributeId, attributeId))
        .limit(1)
    ).at(0);

    return data;
  },
);
