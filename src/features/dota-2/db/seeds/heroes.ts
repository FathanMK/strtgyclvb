import { db } from "@/db";
import { dota2Heroes } from "../schemas";
import { logs } from "@/db/schemas";

async function heroes() {
  // await db.insert(dota2Heroes).values([
  //   {
  //     heroId: "abaddon",
  //     name: "Abaddon",
  //     fullName: "Abaddon, the Lord of Avernus",
  //     descriptions: [
  //       "Able to transform enemy attacks into self-healing, Abaddon can survive almost any assault. Shielding allies and launching his double-edged coil at a friend or foe, he is always ready to ride into the thick of battle.",
  //     ],
  //   },
  // ]);

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

  console.log("ADD ABADDON HERO");
  process.exit(0);
}

await heroes();
