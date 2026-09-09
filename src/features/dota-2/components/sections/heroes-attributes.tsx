import Link from "next/link";
import { getHeroesAttributes } from "../../queries/get-heroes-attributes";

export async function HeroesAttributesSection() {
  const data = await getHeroesAttributes();

  return (
    <section className="m-6 space-y-2">
      <h2 className="font-bold text-lg">HEROES ATTRIBUTES</h2>
      <div>
        {data.map((item, index) => (
          <Link
            key={item.id}
            href={`/dota-2/heroes-attributes/${item.attributeId}`}
            className="group flex items-center gap-2"
          >
            <p>{index?.toString().padStart(2, "0")}</p>
            <div className="group-hover-link font-bold">[{item.name}]</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
