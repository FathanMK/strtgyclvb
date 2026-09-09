import { getDbAsync } from "@/db";
import { cache } from "react";

export const getHeroes = cache(async () => {
  const db = await getDbAsync();
  const data = await db.query.dota2HeroesAttributesValue.findMany({
    where: {
      attributeId: "primary_attribute",
    },
    with: {
      hero: true,
    },
  });
  return data;
});
