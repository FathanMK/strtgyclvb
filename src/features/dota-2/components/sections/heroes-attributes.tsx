import Link from "next/link";
import { getHeroesAttributes } from "../../queries/get-heroes-attributes";
import { Separator } from "@/components/ui/separator";

export async function HeroesAttributesSection() {
  const attributes = await getHeroesAttributes();

  return (
    <section className="px-6 py-6">
      <h2>HEROES ATTRIBUTES</h2>
      <Separator className="mb-3 mt-1 bg-neutral-800" />
      <div>
        {attributes.map((item) => (
          <Link
            key={item.id}
            href={`/dota-2/heroes-attributes/${item.attributeId.replace(/\_/g, "-")}`}
            className="group flex items-center gap-2 w-fit"
          >
            <div className="group-hover-link font-bold">[{item.name}]</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
