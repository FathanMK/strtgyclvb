import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { getHeroesByAttribute } from "../../queries/get-heroes-by-attribute";

export async function HeroesSection() {
  const data = await getHeroesByAttribute("primary_attribute");
  const sortedHeroesByAttributes =
    data &&
    Object.entries(
      Object.groupBy(data, (hero) => hero.value ?? ("" as string)),
    );

  return (
    <section className="m-6 space-y-6">
      {sortedHeroesByAttributes.map((item, index) => (
        <div key={index}>
          <h2>{item[0]}</h2>
          <Separator className="my-1" />
          <div>
            {item[1]?.map((hero) => (
              <div key={hero.heroId}>
                <Link
                  href={`/dota-2/heroes/${hero.heroId}/attributes`}
                  className="hover-link font-bold"
                >
                  [{hero.hero?.name}]
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
