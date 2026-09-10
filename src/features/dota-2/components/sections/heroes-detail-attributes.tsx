import { Separator } from "@/components/ui/separator";
import { getHeroesAttribute } from "../../queries/get-heroes-attribute";
import { getHeroesByAttribute } from "../../queries/get-heroes-by-attribute";
import { HeroesAttributesIdType } from "../../types/heroes-attributes-id-type";
import {
  columns,
  HeroesDetailAttributesTable,
} from "../tables/heroes-detail-attributes";
import { HeroesDetailAttributesStats } from "../stats/heroes-detail-attributes";

export async function HeroesDetailAttributesSection({
  attributeId,
}: {
  attributeId: HeroesAttributesIdType;
}) {
  const data = await getHeroesAttribute(attributeId);
  const heroes = await getHeroesByAttribute(attributeId);

  return (
    <section className="space-y-6 m-6">
      <div>
        <h1>{data?.name}</h1>
        <Separator className="my-1" />
        <div>
          {data?.descriptions?.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>
      </div>
      <HeroesDetailAttributesStats />
      <HeroesDetailAttributesTable data={heroes} columns={columns} />
    </section>
  );
}
