export function calculateHealthRegen(
  baseStrength: number,
  healthRegenPerStrength: number,
  baseHealthRegen: number,
) {
  return baseStrength * healthRegenPerStrength + baseHealthRegen;
}
