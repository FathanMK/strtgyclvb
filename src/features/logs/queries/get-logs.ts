import { getDbAsync } from "@/db";
import { logs } from "@/db/schemas";
import { desc } from "drizzle-orm";
import { cache } from "react";

export const getLogs = cache(async () => {
  const db = await getDbAsync();
  const data = await db.select().from(logs).orderBy(desc(logs.createdAt));

  return data;
});
