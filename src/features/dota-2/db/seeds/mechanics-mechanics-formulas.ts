import { getDbAsync } from "@/db";
import {
  dota2MechanicsMechanicsFormulas,
  Dota2MechanicsMechanicsFormulasInsertType,
} from "@/db/schemas";

async function mechanicsMechanicsFormulas() {
  const db = await getDbAsync();
  const mechanicsMechanicsFormulas: Dota2MechanicsMechanicsFormulasInsertType[] =
    [
      {
        mechanicId: "armor",
        mechanicFormulaId: "armor",
      },
    ];

  await db
    .insert(dota2MechanicsMechanicsFormulas)
    .values(mechanicsMechanicsFormulas);

  console.log("ADD MECHANICS MECHANICS FORMULAS FOR DOTA 2");
  process.exit(0);
}

await mechanicsMechanicsFormulas();
