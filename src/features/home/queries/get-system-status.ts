import { db } from "@/db";
import { logs } from "@/db/schemas";
import { desc, eq } from "drizzle-orm";
import { cache } from "react";

export const getSystemStatus = cache(async () => {
  const data = (
    await db
      .select()
      .from(logs)
      .where(eq(logs.type, "system"))
      .orderBy(desc(logs.createdAt))
      .limit(1)
  ).at(0);

  return data;
});
