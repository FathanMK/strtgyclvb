import { getHeroes } from "../../queries";
import Link from "next/link";

export async function HeroesSection() {
  const data = await getHeroes();
  const sortedHeroesByAttributes =
    data &&
    Object.entries(
      Object.groupBy(data, (hero) => hero.value ?? ("" as string)),
    );

  return (
    <section className="m-6 space-y-6 uppercase">
      {sortedHeroesByAttributes.map((item, index) => (
        <div key={index} className="space-y-2">
          <h2 className="uppercase font-bold">{item[0]}</h2>
          <div className="flex flex-wrap gap-x-6 gap-y-11">
            {item[1]?.map((hero, index) => (
              <div key={hero.heroId} className="flex items-center gap-2">
                <p>{index?.toString().padStart(2, "0")}</p>
                <Link
                  href={`dota-2/heroes/${hero.heroId}/attributes`}
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
