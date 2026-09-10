import { getDbAsync } from "@/db";
import { dota2Heroes, Dota2HeroesInsertType } from "../schemas";
import { logs, LogsInsertType } from "@/db/schemas";

async function heroes() {
  const db = await getDbAsync();
  const heroes: Dota2HeroesInsertType[] = [
    {
      heroId: "abaddon",
      name: "Abaddon",
      fullName: "Abaddon, the Lord of Avernus",
      descriptions: [
        "Able to transform enemy attacks into self-healing, Abaddon can survive almost any assault. Shielding allies and launching his double-edged coil at a friend or foe, he is always ready to ride into the thick of battle.",
      ],
    },
  ];

  const logsHeroes: LogsInsertType[] = [
    {
      title: "Added Dota 2 hero Abaddon",
      type: "dota-2",
      content: [
        {
          type: "text",
          value: "ADDED",
        },
        {
          href: "/dota-2",
          type: "link",
          value: "DOTA 2",
        },
        {
          href: "/dota-2/heroes/abaddon",
          type: "link",
          value: "ABADDON",
        },
        {
          type: "text",
          value: "HERO",
        },
      ],
    },
  ];

  await db.insert(dota2Heroes).values(heroes);
  await db.insert(logs).values(logsHeroes);

  console.log("ADD ABADDON HERO");
  process.exit(0);
}

await heroes();
