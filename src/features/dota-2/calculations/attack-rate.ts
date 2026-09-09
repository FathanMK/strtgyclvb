export function calculateAttackRate(
  totalAttackSpeed: number,
  baseAttackSpeed: number,
  baseAttackTime: number,
) {
  return totalAttackSpeed / (baseAttackTime * baseAttackSpeed);
}
