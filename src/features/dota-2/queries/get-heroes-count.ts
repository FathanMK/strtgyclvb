import { db } from "@/db";
import { dota2Heroes, logs } from "@/db/schemas";
import { count, desc, ilike } from "drizzle-orm";
import { cache } from "react";

export const getHeroesCount = cache(async () => {
  const data = (await db.select({ count: count() }).from(dota2Heroes)).at(
    0,
  )?.count;

  return data;
});
