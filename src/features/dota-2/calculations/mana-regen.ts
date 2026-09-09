export function calculateManaRegen(
  baseIntelligence: number,
  manaRegenPerIntelligence: number,
  baseManaRegen: number,
) {
  return baseIntelligence * manaRegenPerIntelligence + baseManaRegen;
}
