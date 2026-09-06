import { db } from "@/db";
import { logs } from "@/db/schemas";
import { desc, ilike } from "drizzle-orm";
import { cache } from "react";

export const getLatestLog = cache(async (typeContain?: string) => {
  const where = typeContain
    ? ilike(logs.type, `%${typeContain?.toLowerCase()}%`)
    : undefined;

  const data = (
    await db
      .select()
      .from(logs)
      .where(where)
      .orderBy(desc(logs.createdAt))
      .limit(1)
  ).at(0);

  return data;
});
