export function calculateHealth(
  baseStrength: number,
  healthPerStrength: number,
  baseHeroHPPool: number,
) {
  return healthPerStrength * baseStrength + baseHeroHPPool;
}
