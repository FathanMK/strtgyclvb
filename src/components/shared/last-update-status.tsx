import { getLatestLog } from "@/queries";
import { formatRelativeTime } from "@/utils";

export async function LastUpdateStatus({
  typeContain,
}: {
  typeContain?: string;
}) {
  const data = await getLatestLog(typeContain);

  return (
    <div className="flex uppercase">
      <p className="basis-1/3 shrink-0">LAST UPDATE</p>
      <p>{formatRelativeTime(data?.createdAt)}</p>
    </div>
  );
}
