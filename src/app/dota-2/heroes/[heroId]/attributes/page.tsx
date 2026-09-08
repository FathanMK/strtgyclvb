import { AttributesProvider } from "@/features/dota-2/context/attributes";
import { OverviewAttributesSection } from "@/features/dota-2/components/sections/attributes/overview";
import { RegenerationAttributesSection } from "@/features/dota-2/components/sections/attributes/regeneration";
import { PageParamsType } from "@/features/dota-2/types/page-params-type";
import { getHero } from "@/features/dota-2/queries/get-hero";
import { getMechanicsConstants } from "@/features/dota-2/queries/get-mechanics-constants";

export default async function HeroAttributesPage({ params }: PageParamsType) {
  const { heroId } = await params;
  const hero = getHero(heroId);
  const mechanicsConstants = getMechanicsConstants();

  return (
    <section className="m-6 space-y-6">
      <AttributesProvider hero={hero} mechanicConstants={mechanicsConstants}>
        <OverviewAttributesSection />
        <RegenerationAttributesSection />
        {/* 
        <StatsAttributesSection />
        <OffensiveAttributesSection />
        <DefensiveAttributesSection />
        <OtherAttributesSection /> */}
      </AttributesProvider>
    </section>
  );
}
