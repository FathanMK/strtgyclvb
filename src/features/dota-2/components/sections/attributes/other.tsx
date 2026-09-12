"use client";

import { Separator } from "@/components/ui/separator";
import { useAttributesContext } from "@/features/dota-2/context/attributes";

export function OtherAttributesSection() {
  const { attributes } = useAttributesContext();

  return (
    <div>
      <h2>OTHER</h2>
      <Separator className="mb-3 mt-1 bg-neutral-800" />
      <div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">MOVEMENT SPEED</p>
          <p className="font-black">{attributes.base_movement_speed.value}</p>
        </div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">TURN RATE</p>
          <p className="font-black">{attributes.base_turn_rate.value}</p>
        </div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">COLLISION SIZE</p>
          <p className="font-black">{attributes.base_collision_size.value}</p>
        </div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">BOUND RADIUS</p>
          <p className="font-black">{attributes.base_bound_radius.value}</p>
        </div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">VISION RANGE</p>
          <p className="font-black">
            {" "}
            {attributes.base_vision_range_daytime.value} DAY -{" "}
            {attributes.base_vision_range_nighttime.value} NIGHT
          </p>
        </div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">GIB TYPE</p>
          <p className="font-black">{attributes.gib_type.value}</p>
        </div>
      </div>
    </div>
  );
}
