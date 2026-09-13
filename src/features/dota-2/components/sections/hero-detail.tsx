import Image from "next/image";
import { HeroDetailNav } from "../nav/hero-detail";
import { getHero } from "../../queries/get-hero";
import { Separator } from "@/components/ui/separator";
// import { getHeroAbilitiesName } from "../queries/get-hero-abilities-name";

export async function HeroDetailSection({ heroId }: { heroId: string }) {
  const hero = await getHero(heroId);
  // const heroAbilitiesName = await getHeroAbilitiesName(heroId);

  return (
    <section className="px-6 py-6 space-y-12">
      <Image
        alt={hero.name + "potrait"}
        src={`dota-2/heroes/${hero.heroId}/potrait.webp`}
        width={120}
        height={120}
      />
      <div>
        <h1 className="font-black">{hero.name}</h1>
        <Separator className="mb-3 mt-1 bg-neutral-800" />
        <p className="text-xs text-neutral-500">{hero.fullName}</p>
      </div>
      <div>
        {hero.descriptions?.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>
      <HeroDetailNav heroId={heroId} />
    </section>
  );
}
