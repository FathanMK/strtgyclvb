import { db } from "@/db";

export async function getHeroes() {
  const data = await db.query.dota2HeroesAttributesValue.findMany({
    where: {
      attributeId: "primary_attribute",
    },
    with: {
      hero: true,
    },
  });
  return data;
}
