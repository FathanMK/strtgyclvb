import { getDbAsync } from "@/db";
import {
  dota2MechanicsExamples,
  Dota2MechanicsExamplesInsertType,
} from "@/db/schemas";

async function mechanicsExamples() {
  const db = await getDbAsync();
  const mechanicsExamples: Dota2MechanicsExamplesInsertType[] = [
    {
      mechanicId: "armor",
      heroId: "abaddon",
    },
  ];

  await db.insert(dota2MechanicsExamples).values(mechanicsExamples);

  console.log("ADD MECHANICS EXAMPLES FOR DOTA 2");
  process.exit(0);
}

await mechanicsExamples();
