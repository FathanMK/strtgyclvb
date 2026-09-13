export function calculatePhysicalResistance(
  totalArmor: number,
  armorPhysicalDamageFactor: number,
) {
  return (
    1 -
    (1 -
      (armorPhysicalDamageFactor * totalArmor) /
        (1 + armorPhysicalDamageFactor * totalArmor))
  );
}
