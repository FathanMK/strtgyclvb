import { LatestChangeStatus } from "@/components/shared/latest-change-status";
import { SystemStatus } from "../system-status";
import Link from "next/link";
import { LastUpdateStatus } from "@/components/shared/last-update-status";
import { Separator } from "@/components/ui/separator";

export async function StatusSection() {
  return (
    <section className="m-6">
      <h2>STATUS</h2>
      <Separator className="my-1" />
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
