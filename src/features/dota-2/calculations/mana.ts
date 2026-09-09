export function calculateMana(
  baseIntelligence: number,
  manaPerIntelligence: number,
  baseHeroMana: number,
) {
  return manaPerIntelligence * baseIntelligence + baseHeroMana;
}
