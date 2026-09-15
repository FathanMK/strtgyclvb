import { getDbAsync } from "@/db";
import {
  dota2MechanicsMechanics,
  Dota2MechanicsMechanicsInsertType,
} from "@/db/schemas";

async function mechanicsMechanics() {
  const db = await getDbAsync();
  const mechanicsMechanics: Dota2MechanicsMechanicsInsertType[] = [
    // {
    //   mechanicId: "armor",
    //   secondMechanicId: "armor_reduction",
    // },
    {
      mechanicId: "armor_reduction",
      secondMechanicId: "armor",
    },
    {
      mechanicId: "armor",
      secondMechanicId: "effective_hp",
    },
    {
      mechanicId: "effective_hp",
      secondMechanicId: "armor",
    },
  ];

  await db.insert(dota2MechanicsMechanics).values(mechanicsMechanics);

  console.log("ADD MECHANICS MECHANICS FOR DOTA 2");
  process.exit(0);
}

await mechanicsMechanics();
