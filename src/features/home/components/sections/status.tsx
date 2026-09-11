import { LatestChangeStatus } from "@/components/shared/latest-change-status";
import { SystemStatus } from "../system-status";
import Link from "next/link";
import { LastUpdateStatus } from "@/components/shared/last-update-status";
import { Separator } from "@/components/ui/separator";

export async function StatusSection() {
  return (
    <section className="px-6 py-6">
      <h2>STATUS</h2>
      <Separator className="mb-3 mt-1 bg-neutral-800" />
      <div>
        <SystemStatus />
        <LatestChangeStatus />
        <LastUpdateStatus />
        <div className="flex">
          <p className="basis-1/3">LOGS</p>
          <Link href="/logs" className="hover-link font-black">
            [SEE ALL]
          </Link>
        </div>
      </div>
    </section>
  );
}
