"use client";

import { useAttributesContext } from "@/features/dota-2/context/attributes";

export function OtherAttributesSection() {
  const { attributes } = useAttributesContext();

  return (
    <div className="space-y-3 uppercase">
      <h2>OTHER</h2>
      <div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">MOVEMENT SPEED</p>
          <p className="font-bold">{attributes.base_movement_speed.value}</p>
        </div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">TURN RATE</p>
          <p className="font-bold">{attributes.base_turn_rate.value}</p>
        </div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">COLLISION SIZE</p>
          <p className="font-bold">{attributes.base_collision_size.value}</p>
        </div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">BOUND RADIUS</p>
          <p className="font-bold">{attributes.base_bound_radius.value}</p>
        </div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">VISION RANGE</p>
          <p className="font-bold">
            {" "}
            {attributes.base_vision_range_daytime.value} DAY -{" "}
            {attributes.base_vision_range_nighttime.value} NIGHT
          </p>
        </div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">GIB TYPE</p>
          <p className="font-bold">{attributes.gib_type.value}</p>
        </div>
      </div>
    </div>
  );
}
