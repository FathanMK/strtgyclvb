import { getDbAsync } from "@/db";
import { dota2HeroesAttributes } from "../db/schemas";
import { asc } from "drizzle-orm";
import { cache } from "react";

export const getHeroesAttributes = cache(async () => {
  const db = await getDbAsync();
  const data = await db
    .select()
    .from(dota2HeroesAttributes)
    .orderBy(asc(dota2HeroesAttributes.name));

  return data;
});
