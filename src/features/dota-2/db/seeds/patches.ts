import { getDbAsync } from "@/db";
import { dota2Patches, Dota2PatchesInsertType } from "../schemas";

async function patches() {
  const db = await getDbAsync();
  const patches: Dota2PatchesInsertType[] = [
    {
      patchId: "7.41e",
      name: "7.41e",
      releaseDate: "2026-07-31 00:00:00",
    },
  ];

  await db.insert(dota2Patches).values(patches);

  console.log("ADD 7.41e PATCH");
  process.exit(0);
}

await patches();
