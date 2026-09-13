"use client";

import { Separator } from "@/components/ui/separator";
import { ArmorPopover } from "./popovers/armor";
import { MagicResistancePopover } from "./popovers/magic-resistance";
import { PhysicalResistancePopover } from "./popovers/physical-resistance";

export function DefensiveAttributesSection() {
  return (
    <div>
      <h2 className="font-black">DEFENSIVE</h2>
      <Separator className="mb-3 mt-1 bg-neutral-800" />
      <ul>
        <li className="flex">
          <p className="basis-1/2 shrink-0">ARMOR</p>
          <ArmorPopover />
        </li>
        <li className="flex">
          <p className="basis-1/2 shrink-0">PHYSICAL RESISTANCE</p>
          <PhysicalResistancePopover />
        </li>
        <li className="flex">
          <p className="basis-1/2 shrink-0">MAGIC RESISTANCE</p>
          <MagicResistancePopover />
        </li>
        <li className="flex">
          <p className="basis-1/2 shrink-0">STATUS RESISTANCE</p>
          <p className="font-black">0%</p>
        </li>
        <li className="flex">
          <p className="basis-1/2 shrink-0">SLOW RESISTANCE</p>
          <p className="font-black">0%</p>
        </li>
        <li className="flex">
          <p className="basis-1/2 shrink-0">EVASION RESISTANCE</p>
          <p className="font-black">0%</p>
        </li>
      </ul>
    </div>
  );
}
