import { getDbAsync } from "@/db";
import { logs } from "@/db/schemas";
import { desc, ilike } from "drizzle-orm";
import { cache } from "react";

export const getLogs = cache(async (contain?: string) => {
  const db = await getDbAsync();
  const where = contain
    ? ilike(logs.type, `%${contain?.toLowerCase()}%`)
    : undefined;
  const data = await db
    .select()
    .from(logs)
    .where(where)
    .orderBy(desc(logs.createdAt));

  return data;
});
