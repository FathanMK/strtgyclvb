import { getDbAsync } from "@/db";
import { dota2Heroes } from "@/db/schemas";
import { count } from "drizzle-orm";
import { cache } from "react";

export const getHeroesCount = cache(async () => {
  const db = await getDbAsync();
  const data = (await db.select({ count: count() }).from(dota2Heroes)).at(
    0,
  )?.count;

  return data;
});
