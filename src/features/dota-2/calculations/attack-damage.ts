import { GetHeroDataType } from "../types/get-hero-data-type";
import { GetMechanicConstantsDataType } from "../types/get-mechanics-constants-data-type";
import { calculateUniversal } from "./universal";

export function calculateAttackDamage(
  attributes: GetHeroDataType["attributes"],
  mechanicConstants: GetMechanicConstantsDataType,
) {
  const {
    primary_attribute,
    base_strength,
    base_agility,
    base_intelligence,
    base_min_attack_damage,
    base_max_attack_damage,
  } = attributes;

  const {
    damage_per_strength,
    damage_per_agility,
    damage_per_intelligence,
    damage_per_universal,
  } = mechanicConstants;

  const baseUniversal = calculateUniversal(
    +base_strength.value,
    +base_agility.value,
    +base_intelligence.value,
  );

  const totalDamagePerStrength = totalDamagePerAttributes(
    base_strength.value,
    damage_per_strength.value,
  );
  const totalDamagePerAgility = totalDamagePerAttributes(
    base_agility.value,
    damage_per_agility.value,
  );
  const totalDamagePerIntelligence = totalDamagePerAttributes(
    base_intelligence.value,
    damage_per_intelligence.value,
  );
  const totalDamagePerUniversal = totalDamagePerAttributes(
    String(baseUniversal),
    damage_per_universal.value,
  );

  switch (primary_attribute.value) {
    case "strength":
      return {
        primaryAttribute: base_strength.value,
        damagePerAttribute: damage_per_strength.value,
        baseMin: base_min_attack_damage.value,
        baseMax: base_max_attack_damage.value,
        min: totalDamagePerStrength + +base_min_attack_damage.value,
        max: totalDamagePerStrength + +base_max_attack_damage.value,
      };
    case "agility":
      return {
        primaryAttribute: base_agility.value,
        damagePerAttribute: damage_per_agility.value,
        baseMin: base_min_attack_damage.value,
        baseMax: base_max_attack_damage.value,
        min: totalDamagePerAgility + +base_min_attack_damage.value,
        max: totalDamagePerAgility + +base_max_attack_damage.value,
      };
    case "intelligence":
      return {
        primaryAttribute: base_intelligence.value,
        damagePerAttribute: damage_per_intelligence.value,
        baseMin: base_min_attack_damage.value,
        baseMax: base_max_attack_damage.value,
        min: totalDamagePerIntelligence + +base_min_attack_damage.value,
        max: totalDamagePerIntelligence + +base_max_attack_damage.value,
      };
    default:
      return {
        primaryAttribute: baseUniversal,
        damagePerAttribute: damage_per_universal.value,
        baseMin: base_min_attack_damage.value,
        baseMax: base_max_attack_damage.value,
        min: totalDamagePerUniversal + +base_min_attack_damage.value,
        max: totalDamagePerUniversal + +base_max_attack_damage.value,
      };
  }
}

function totalDamagePerAttributes(base: string, damagePer: string | null) {
  return +base * +(damagePer ?? 0);
}
