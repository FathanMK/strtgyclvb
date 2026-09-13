import { getDbAsync } from "@/db";
import { dota2Heroes, Dota2HeroesInsertType } from "../schemas";

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

  await db.insert(dota2Heroes).values(heroes);

  console.log("ADD ABADDON HERO");
  process.exit(0);
}

await heroes();
