import { LastUpdateStatus } from "@/components/shared/last-update-status";
import { LatestChangeStatus } from "@/components/shared/latest-change-status";
import Link from "next/link";

export function StatusSection() {
  return (
    <section className="m-6 space-y-2">
      <h2 className="font-bold text-lg">STATUS</h2>
      <div>
        <LastUpdateStatus contain="dota-2" />
        <LatestChangeStatus contain="dota-2" />
        <div className="flex">
          <p className="basis-1/3">LOGS</p>
          <Link href="/logs/dota-2" className="hover-link font-bold">
            [SEE ALL]
          </Link>
        </div>
      </div>
    </section>
  );
}
