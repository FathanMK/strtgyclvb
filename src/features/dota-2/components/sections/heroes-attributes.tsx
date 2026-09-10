import Link from "next/link";
import { getHeroesAttributes } from "../../queries/get-heroes-attributes";
import { Separator } from "@/components/ui/separator";

export async function HeroesAttributesSection() {
  const attributes = await getHeroesAttributes();

  return (
    <section className="m-6">
      <h2>HEROES ATTRIBUTES</h2>
      <Separator className="my-1" />
      <div>
        {attributes.map((item, index) => (
          <Link
            key={item.id}
            href={`/dota-2/heroes-attributes/${item.attributeId}`}
            className="group flex items-center gap-2 w-fit"
          >
            <p>{index?.toString().padStart(2, "0")}</p>
            <div className="group-hover-link font-bold">[{item.name}]</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
