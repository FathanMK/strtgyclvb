export function truncateDecimals(value: number, decimals: number = 2): number {
  const factor = 10 ** decimals;
  return Math.trunc(value * factor) / factor;
}
