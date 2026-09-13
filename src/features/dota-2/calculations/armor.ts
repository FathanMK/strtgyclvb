export function calculateArmor(
  baseAgility: number,
  baseArmor: number,
  armorPerAgility: number,
) {
  return baseAgility * armorPerAgility + baseArmor;
}
