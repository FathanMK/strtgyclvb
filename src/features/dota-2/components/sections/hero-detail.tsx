import Image from "next/image";
import { HeroDetailNav } from "../nav/hero-detail";
import { getHero } from "../../queries/get-hero";
// import { getHeroAbilitiesName } from "../queries/get-hero-abilities-name";

export async function HeroDetailSection({ heroId }: { heroId: string }) {
  const hero = await getHero(heroId);
  // const heroAbilitiesName = await getHeroAbilitiesName(heroId);

  return (
    <section className="m-6 space-y-6">
      <Image
        alt={hero.name + "potrait"}
        src={`dota-2/heroes/${hero.heroId}/potrait.webp`}
        width={120}
        height={120}
      />
      <div className="flex items-start gap-2">
        <p>00</p>
        <div>
          <h1 className="font-bold">{hero.name}</h1>
          <p className="text-xs text-neutral-500">{hero.fullName}</p>
        </div>
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
