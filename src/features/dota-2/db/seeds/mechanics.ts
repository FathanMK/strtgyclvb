import { getDbAsync } from "@/db";
import { dota2Mechanics, Dota2MechanicsInsertType } from "@/db/schemas";

async function mechanics() {
  const db = await getDbAsync();
  const mechanics: Dota2MechanicsInsertType[] = [
    // {
    //   mechanicId: "armor",
    //   name: "Armor",
    //   descriptions: [
    //     "A stat that reduces (or increases, if negative) physical damage a unit takes from abilities and attacks.",
    //   ],
    //   rules: [
    //     "Armor can have negative value",
    //     "Negative armor increase the physical damage taken",
    //     "Armor only modifies damage affected by physical resistance",
    //   ],
    //   sources: ["LIQUIPEDIA DOTA 2 ARMOR SECTION", "DOTA 2 IN GAME TEXTS"],
    //   category: "defensive",
    // },
    {
      mechanicId: "armor_reduction",
      name: "Armor Reduction",
      descriptions: ["Lowers target armor, increasing physical damage taken."],
      rules: [
        "Stacks from different sources; identical modifiers usually do not stack.",
        "Armor can go below zero, amplifying damage beyond 100%.",
        "Affects physical damage only (ignores magical and pure damage).",
      ],
      sources: ["LIQUIPEDIA DOTA 2 ARMOR SECTION", "DOTA 2 IN GAME TEXTS"],
      category: "offensive",
    },
  ];

  await db.insert(dota2Mechanics).values(mechanics);

  console.log("ADD MECHANICS FOR DOTA 2");
  process.exit(0);
}

await mechanics();
