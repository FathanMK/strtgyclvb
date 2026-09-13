import Link from "next/link";
import { getHeroesAttributes } from "../../queries/get-heroes-attributes";
import { Separator } from "@/components/ui/separator";

export async function HeroesAttributesSection() {
  const attributes = await getHeroesAttributes();

  return (
    <section className="px-6 py-6">
      <h2>HEROES ATTRIBUTES</h2>
      <Separator className="mb-3 mt-1 bg-neutral-800" />
      <ul>
        {attributes.map((item) => {
          const href = `/dota-2/heroes-attributes/${item.attributeId.replace(/\_/g, "-")}`;
          return (
            <li key={item.id}>
              <Link href={href} className="hover-link font-black block w-fit">
                [{item.name}]
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
