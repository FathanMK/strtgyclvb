import Link from "next/link";
import { getHeroes } from "../../queries/get-heroes";

export async function HeroesSection() {
  const data = await getHeroes();
  const sortedHeroesByAttributes =
    data &&
    Object.entries(
      Object.groupBy(data, (hero) => hero.value ?? ("" as string)),
    );

  return (
    <section className="m-6 space-y-6">
      {sortedHeroesByAttributes.map((item, index) => (
        <div key={index} className="space-y-2">
          <h2 className="font-bold text-lg">{item[0]}</h2>
          <div>
            {item[1]?.map((hero, index) => (
              <div key={hero.heroId} className="flex items-center gap-2">
                <p>{index?.toString().padStart(2, "0")}</p>
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
