"use client";

import { Separator } from "@/components/ui/separator";
import { ArmorPopover } from "./popovers/armor";
import { MagicResistancePopover } from "./popovers/magic-resistance";
import { PhysicalResistancePopover } from "./popovers/physical-resistance";

export function DefensiveAttributesSection() {
  return (
    <div>
      <h2 className="font-bold">DEFENSIVE</h2>
      <Separator className="my-1" />
      <div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">ARMOR</p>
          <ArmorPopover />
        </div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">PHYSICAL RESISTANCE</p>
          <PhysicalResistancePopover />
        </div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">MAGIC RESISTANCE</p>
          <MagicResistancePopover />
        </div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">STATUS RESISTANCE</p>
          <p className="font-bold">0%</p>
        </div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">SLOW RESISTANCE</p>
          <p className="font-bold">0%</p>
        </div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">EVASION RESISTANCE</p>
          <p className="font-bold">0%</p>
        </div>
      </div>
    </div>
  );
}
