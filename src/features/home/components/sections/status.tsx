import { LatestChangeStatus } from "@/components/shared/latest-change-status";
import { SystemStatus } from "../system-status";
import Link from "next/link";
import { LastUpdateStatus } from "@/components/shared/last-update-status";

export async function StatusSection() {
  return (
    <section className="m-6 space-y-2">
      <h2 className="font-bold text-lg">STATUS</h2>
      <div>
        <SystemStatus />
        <LatestChangeStatus />
        <LastUpdateStatus />
        <div className="flex">
          <p className="basis-1/3">LOGS</p>
          <Link href="/logs" className="hover-link font-bold">
            [SEE ALL]
          </Link>
        </div>
      </div>
    </section>
  );
}
