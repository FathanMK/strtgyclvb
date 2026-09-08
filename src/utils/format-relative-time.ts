export function formatRelativeTime(
  date: Date | string | undefined | null,
): string {
  if (!date) {
    return "NONE";
  }
  const MINUTE = 60 * 1000;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const timestamp =
    date instanceof Date ? date.getTime() : new Date(date).getTime();

  if (Number.isNaN(timestamp)) {
    return "NONE";
  }

  const diff = Date.now() - timestamp;

  if (diff < 0) return "Just now";
  if (diff < HOUR) return "Less than an hour ago";

  const hours = Math.floor(diff / HOUR);
  if (hours < 24) {
    return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  }

  const days = Math.floor(diff / DAY);
  return days === 1 ? "1 day ago" : `${days} days ago`;
}
