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
    <section className="px-6 py-6 space-y-12">
      {sortedHeroesByAttributes.map((item, index) => (
        <div key={index}>
          <h2>{item[0]}</h2>
          <Separator className="mb-3 mt-1 bg-neutral-800" />
          <div>
            {item[1]?.map((hero) => {
              const href = `/dota-2/heroes/${hero.heroId}/attributes`;
              return (
                <div key={hero.heroId}>
                  <Link
                    href={href}
                    className="hover-link font-black block w-fit"
                  >
                    [{hero.hero?.name}]
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
