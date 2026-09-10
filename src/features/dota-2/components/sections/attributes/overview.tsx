"use client";

import dayjs from "dayjs";
import { useAttributesContext } from "@/features/dota-2/context/attributes";
import { Separator } from "@/components/ui/separator";

export function OverviewAttributesSection() {
  const { attributes } = useAttributesContext();

  const formattedReleaseDate = dayjs(attributes.release_date.value).format(
    "DD MMMM YYYY",
  );

  return (
    <div>
      <h2>OVERVIEW</h2>
      <Separator className="my-1" />
      <div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">PRIMARY ATTRIBUTE</p>
          <p className="font-black">{attributes.primary_attribute.value}</p>
        </div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">ATTACK TYPE</p>
          <p className="font-black">{attributes.attack_type.value}</p>
        </div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">RELEASE DATE</p>
          <p className="font-black">{formattedReleaseDate}</p>
        </div>
      </div>
    </div>
  );
}
