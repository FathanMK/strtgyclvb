import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";

import relations from "./relations";
import { cache } from "react";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { Pool } from "pg";

function createDb(connectionString: string) {
  const pool = new Pool({
    connectionString,
    maxUses: 1,
  });

  return drizzle({ client: pool, relations });
}

export const getDb = cache(() => {
  try {
    const { env } = getCloudflareContext();

    return createDb(env.HYPERDRIVE.connectionString);
  } catch {
    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
      throw new Error("DATABASE_URL is not set");
    }

    return createDb(connectionString);
  }
});

export const getDbAsync = cache(async () => {
  try {
    const { env } = await getCloudflareContext({ async: true });

    return createDb(env.HYPERDRIVE.connectionString);
  } catch {
    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
      throw new Error("DATABASE_URL is not set");
    }

    return createDb(connectionString);
  }
});
