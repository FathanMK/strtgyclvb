import { formatToPercentage } from "@/utils/format-to-percentage";
import { calculateArmor } from "../../calculations/armor";
import { calculatePhysicalResistance } from "../../calculations/physical-resistance";
import { getMechanicsConstantsValue } from "../../queries/get-mechanics-constants-value";
import { GetHeroDataType } from "../../types/get-hero-data-type";
import { MoveRight } from "lucide-react";
import { truncateDecimals } from "@/utils/truncate-decimals";

export async function MechanicsExamplesRenderers({
  mechanicId,
  hero,
}: {
  hero: GetHeroDataType;
  mechanicId: string;
}) {
  const mechanicsConstants = await getMechanicsConstantsValue();
  switch (mechanicId) {
    case "armor":
      const { base_agility, base_armor } = hero.attributes;
      const armor = calculateArmor(
        +base_agility.value,
        +base_armor.value,
        +mechanicsConstants.armor_per_agility.value,
      );
      const physicalResistance = calculatePhysicalResistance(
        armor,
        +mechanicsConstants.armor_physical_damage_factor.value,
      );

      const formattedArmor = truncateDecimals(armor);
      const formattedPhysicalRes = formatToPercentage(physicalResistance);

      return (
        <p>
          - {hero.name} has {base_agility.value} Agility and {base_armor.value}{" "}
          Base Armor <MoveRight className="size-4 inline" /> {formattedArmor}{" "}
          Armor <MoveRight className="size-4 inline" /> {formattedPhysicalRes}{" "}
          Physical Resistance
        </p>
      );
    default:
      return <p>UNKNOWN</p>;
  }
}
