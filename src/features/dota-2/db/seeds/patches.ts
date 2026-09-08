import { getDbAsync } from "@/db";
import { dota2Patches, Dota2PatchesInsertType } from "../schemas";
import { logs, LogsInsertType } from "@/db/schemas";

async function patches() {
  const db = await getDbAsync();
  const patches: Dota2PatchesInsertType[] = [
    {
      patchId: "7.41e",
      name: "7.41e",
      releaseDate: "2026-07-31 00:00:00",
    },
  ];

  const logsPatches: LogsInsertType[] = [
    {
      title: "Add Dota 2 7.41e patch",
      type: "dota-2",
      content: [
        {
          type: "text",
          value: "ADD",
        },
        {
          href: "/dota-2",
          type: "link",
          value: "DOTA 2",
        },
        {
          href: "/dota-2/patches/7.41e",
          type: "link",
          value: "7.41e",
        },
        {
          type: "text",
          value: "PATCH",
        },
      ],
    },
  ];

  await db.insert(dota2Patches).values(patches);
  await db.insert(logs).values(logsPatches);

  console.log("ADD 7.41e PATCH");
  process.exit(0);
}

await patches();
