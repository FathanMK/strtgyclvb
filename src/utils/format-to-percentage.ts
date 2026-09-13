export function formatToPercentage(value: number, decimal: number = 2) {
  return `${(value * 100).toFixed(decimal)}%`;
}
