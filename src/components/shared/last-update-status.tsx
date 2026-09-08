import { getLatestLog } from "@/queries/get-latest-log";
import { formatRelativeTime } from "@/utils/format-relative-time";

export async function LastUpdateStatus({ contain }: { contain?: string }) {
  const data = await getLatestLog(contain);

  return (
    <div className="flex uppercase">
      <p className="basis-1/3 shrink-0">LAST UPDATE</p>
      <p>{formatRelativeTime(data?.createdAt)}</p>
    </div>
  );
}
