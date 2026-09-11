import { AttributesProvider } from "@/features/dota-2/context/attributes";
import { OverviewAttributesSection } from "@/features/dota-2/components/sections/attributes/overview";
import { RegenerationAttributesSection } from "@/features/dota-2/components/sections/attributes/regeneration";
import { PageParamsType } from "@/features/dota-2/types/page-params-type";
import { getHero } from "@/features/dota-2/queries/get-hero";
import { getMechanicsConstantsValue } from "@/features/dota-2/queries/get-mechanics-constants-value";
import { StatsAttributesSection } from "@/features/dota-2/components/sections/attributes/stats";
import { OffensiveAttributesSection } from "@/features/dota-2/components/sections/attributes/offensive";
import { DefensiveAttributesSection } from "@/features/dota-2/components/sections/attributes/defensive";
import { OtherAttributesSection } from "@/features/dota-2/components/sections/attributes/other";

export default async function HeroAttributesPage({ params }: PageParamsType) {
  const { heroId } = await params;
  const hero = getHero(heroId);
  const mechanicsConstants = getMechanicsConstantsValue();

  return (
    <section className="px-6 py-6 space-y-12">
      <AttributesProvider hero={hero} mechanicConstants={mechanicsConstants}>
        <OverviewAttributesSection />
        <RegenerationAttributesSection />
        <StatsAttributesSection />
        <OffensiveAttributesSection />
        <DefensiveAttributesSection />
        <OtherAttributesSection />
      </AttributesProvider>
    </section>
  );
}
