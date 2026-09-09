export function calculateAttackSpeed(
  baseAgililty: number,
  attackSpeedPerAgility: number,
  baseAttackSpeed: number,
) {
  return baseAgililty * attackSpeedPerAgility + baseAttackSpeed;
}
