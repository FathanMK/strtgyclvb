import { getDbAsync } from "@/db";
import { cache } from "react";
import { HeroesAttributesIdType } from "../types/heroes-attributes-id-type";
import { HeroesDetailAttributesTableType } from "../components/tables/heroes-attributes-detail";

export const getHeroesByAttribute = cache(
  async (attributeId: HeroesAttributesIdType) => {
    const db = await getDbAsync();
    const data = await db.query.dota2HeroesAttributesValue.findMany({
      where: {
        attributeId,
      },
      with: {
        hero: true,
      },
    });

    return data;
  },
);
