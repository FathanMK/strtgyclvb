import { cache } from "react";
import {
  dota2Heroes,
  dota2HeroesAttributes,
  dota2HeroesAttributesValue,
  dota2Patches,
} from "../db/schemas";
import { desc, eq } from "drizzle-orm";
import { getDbAsync } from "@/db";
import { HeroesAttributesIdType } from "../types/heroes-attributes-id-type";

export const getHero = cache(async (heroId: string) => {
  const db = await getDbAsync();
  const queryData = await db
    .selectDistinctOn([dota2HeroesAttributesValue.attributeId])
    .from(dota2HeroesAttributesValue)
    .where(eq(dota2HeroesAttributesValue.heroId, heroId))
    .leftJoin(
      dota2HeroesAttributes,
      eq(
        dota2HeroesAttributes.attributeId,
        dota2HeroesAttributesValue.attributeId,
      ),
    )
    .leftJoin(
      dota2Heroes,
      eq(dota2Heroes.heroId, dota2HeroesAttributesValue.heroId),
    )
    .leftJoin(
      dota2Patches,
      eq(dota2Patches.patchId, dota2HeroesAttributesValue.patchId),
    )
    .orderBy(
      dota2HeroesAttributesValue.attributeId,
      desc(dota2Patches.createdAt),
    );

  const hero = queryData.at(0)?.dota_2_heroes;
  const attributes: Record<HeroesAttributesIdType, HeroAttributeType> =
    Object.fromEntries(
      queryData.map((data) => [
        data.dota_2_heroes_attributes?.attributeId,
        {
          attributeId: data.dota_2_heroes_attributes?.attributeId,
          name: data.dota_2_heroes_attributes?.name,
          valueType: data.dota_2_heroes_attributes_value.valueType,
          value: data.dota_2_heroes_attributes_value.value,
          category: data.dota_2_heroes_attributes?.category,
        },
      ]),
    );

  const data = {
    ...hero,
    attributes,
  };

  return data;
});

type HeroAttributeType = {
  attributeId: string;
  name: string;
  valueType: string;
  value: string;
  category: string;
};
