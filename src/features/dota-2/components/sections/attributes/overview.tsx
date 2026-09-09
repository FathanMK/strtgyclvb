"use client";

import dayjs from "dayjs";
import { useAttributesContext } from "@/features/dota-2/context/attributes";

export function OverviewAttributesSection() {
  const { attributes } = useAttributesContext();

  const formattedReleaseDate = dayjs(attributes.release_date.value).format(
    "DD MMMM YYYY",
  );

  return (
    <div className="space-y-3">
      <h2 className="font-bold">OVERVIEW</h2>
      <div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">PRIMARY ATTRIBUTE</p>
          <p className="font-bold">{attributes.primary_attribute.value}</p>
        </div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">ATTACK TYPE</p>
          <p className="font-bold">{attributes.attack_type.value}</p>
        </div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">RELEASE DATE</p>
          <p className="font-bold">{formattedReleaseDate}</p>
        </div>
      </div>
    </div>
  );
}
