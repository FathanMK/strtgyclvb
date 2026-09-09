"use client";

import { useAttributesContext } from "@/features/dota-2/context/attributes";
import { BaseUniversalPopover } from "./popovers/base-universal";
import { GainUniversalPopover } from "./popovers/gain-universal";

export function StatsAttributesSection() {
  const { attributes } = useAttributesContext();
  return (
    <div className="space-y-3">
      <h2 className="font-bold">STATS</h2>
      <div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">BASE STRENGTH</p>
          <p className="font-bold">{attributes.base_strength.value}</p>
        </div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">GAIN STRENGTH</p>
          <p className="font-bold">{attributes.gain_strength.value}</p>
        </div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">BASE AGILITY</p>
          <p className="font-bold">{attributes.base_agility.value}</p>
        </div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">GAIN AGILITY</p>
          <p className="font-bold">{attributes.gain_agility.value}</p>
        </div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">BASE INTELLIGENCE</p>
          <p className="font-bold">{attributes.base_intelligence.value}</p>
        </div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">GAIN INTELLIGENCE</p>
          <p className="font-bold">{attributes.gain_intelligence.value}</p>
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
