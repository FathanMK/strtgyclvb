import { db } from "@/db";
import { dota2Patches } from "../schemas";
import { logs } from "@/db/schemas";

async function patches() {
  await db.insert(dota2Patches).values([
    {
      patchId: "7.41e",
      name: "7.41e",
      releaseDate: "2026-07-31 00:00:00",
    },
  ]);

  await db.insert(logs).values({
    title: "Add Dota 2 hero Abaddon",
    type: "system",
    content: [
      {
        type: "text",
        value: "ADD DOTA 2 HERO",
      },
      {
        href: "/dota-2/heroes/abaddon",
        type: "link",
        value: "ABADDON",
      },
    ],
  });

  console.log("ADD 7.41e PATCH");
  process.exit(0);
}

await patches();
