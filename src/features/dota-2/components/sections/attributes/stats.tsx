"use client";

import { useAttributesContext } from "@/features/dota-2/context/attributes";
import { BaseUniversalPopover } from "./popovers/base-universal";
import { GainUniversalPopover } from "./popovers/gain-universal";
import { Separator } from "@/components/ui/separator";

export function StatsAttributesSection() {
  const { attributes } = useAttributesContext();
  return (
    <div>
      <h2>STATS</h2>
      <Separator className="mb-3 mt-1 bg-neutral-800" />
      <div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">BASE STRENGTH</p>
          <p className="font-black">{attributes.base_strength.value}</p>
        </div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">GAIN STRENGTH</p>
          <p className="font-black">{attributes.gain_strength.value}</p>
        </div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">BASE AGILITY</p>
          <p className="font-black">{attributes.base_agility.value}</p>
        </div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">GAIN AGILITY</p>
          <p className="font-black">{attributes.gain_agility.value}</p>
        </div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">BASE INTELLIGENCE</p>
          <p className="font-black">{attributes.base_intelligence.value}</p>
        </div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">GAIN INTELLIGENCE</p>
          <p className="font-black">{attributes.gain_intelligence.value}</p>
        </div>
        {attributes.primary_attribute.value === "universal" && (
          <>
            <div className="flex">
              <p className="basis-1/2 shrink-0">BASE UNIVERSAL</p>
              <BaseUniversalPopover />
            </div>
            <div className="flex">
              <p className="basis-1/2 shrink-0">GAIN UNIVERSAL</p>
              <GainUniversalPopover />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
