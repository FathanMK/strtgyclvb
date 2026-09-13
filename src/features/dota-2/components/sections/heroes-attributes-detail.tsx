import { Separator } from "@/components/ui/separator";
import { getHeroesAttribute } from "../../queries/get-heroes-attribute";
import { getHeroesByAttribute } from "../../queries/get-heroes-by-attribute";
import { HeroesAttributesIdType } from "../../types/heroes-attributes-id-type";
import {
  columns,
  HeroesAttributesDetailTable,
} from "../tables/heroes-attributes-detail";
import { HeroesAttributesDetailStats } from "../stats/heroes-attributes-detail";

export async function HeroesAttributesDetailSection({
  attributeId,
}: {
  attributeId: string;
}) {
  const formattedAttributeId = attributeId.replace(
    /\-/g,
    "_",
  ) as HeroesAttributesIdType;

  const data = await getHeroesAttribute(formattedAttributeId);
  const heroes = await getHeroesByAttribute(formattedAttributeId);

  const formattedHeroes = heroes?.map((item) => ({
    name: item.hero?.name,
    value: item.value,
  }));

  return (
    <section className="px-6 py-6 space-y-12">
      <div>
        <h1>{data?.name}</h1>
        <Separator className="mb-3 mt-1 bg-neutral-800" />
        <div>
          {data?.descriptions?.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>
      </div>
      {/* <HeroesAttributesDetailStats /> */}
      <HeroesAttributesDetailTable data={formattedHeroes} columns={columns} />
    </section>
  );
}
