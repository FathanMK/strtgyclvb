import { getDbAsync } from "@/db";
import { dota2Mechanics, Dota2MechanicsInsertType } from "@/db/schemas";

async function mechanics() {
  const db = await getDbAsync();
  const mechanics: Dota2MechanicsInsertType[] = [
    {
      mechanicId: "armor",
      name: "Armor",
      descriptions: [
        "Armor is a stat that reduces (or increases, if negative) physical damage a unit takes from abilities and attacks.",
        "Every unit is capable of gaining or losing armor, and most units start with a small amount of base armor, some even starting with negative armor.",
        "A hero's armor can be passively increased with Agility via leveling up, certain items, talents and some abilities.",
        "Armor of any unit can also be temporarily increased or reduced with some abilities.",
      ],
      category: "defensive",
    },
  ];

  await db.insert(dota2Mechanics).values(mechanics);

  console.log("ADD MECHANICS FOR DOTA 2");
  process.exit(0);
}

await mechanics();
