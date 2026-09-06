import { LastUpdateStatus, LatestChangeStatus } from "@/components/shared";
import { SystemStatus } from "./system-status";
import Link from "next/link";

export async function StatusSection() {
  return (
    <section className="m-6 space-y-2">
      <h2 className="font-bold">STATUS</h2>
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
