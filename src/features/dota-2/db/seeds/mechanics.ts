import { getDbAsync } from "@/db";
import { dota2Mechanics, Dota2MechanicsInsertType } from "@/db/schemas";

async function mechanics() {
  const db = await getDbAsync();
  const mechanics: Dota2MechanicsInsertType[] = [
    {
      mechanicId: "armor",
      name: "Armor",
      descriptions: [
        "A stat that reduces (or increases, if negative) physical damage a unit takes from abilities and attacks.",
      ],
      rules: [
        "Armor can have negative value",
        "Negative armor increase the physical damage taken",
        "Armor only modifies damage affected by physical resistance",
      ],
      category: "defensive",
    },
  ];

  await db.insert(dota2Mechanics).values(mechanics);

  console.log("ADD MECHANICS FOR DOTA 2");
  process.exit(0);
}

await mechanics();
