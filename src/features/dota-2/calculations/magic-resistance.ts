export function calculateMagicResistance(
  baseIntelligence: number,
  magicResistPerTenIntelligence: number,
  baseMagicResistance: number,
) {
  return (
    ((baseIntelligence / 10) * magicResistPerTenIntelligence) / 100 +
    baseMagicResistance
  );
}
