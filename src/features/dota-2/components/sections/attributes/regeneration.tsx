"use client";

import { Separator } from "@/components/ui/separator";
import { HealthPopover } from "./popovers/health";
import { HealthRegenPopover } from "./popovers/health-regen";
import { ManaPopover } from "./popovers/mana";
import { ManaRegenPopover } from "./popovers/mana-regen";

export function RegenerationAttributesSection() {
  return (
    <div>
      <h2>REGENERATION</h2>
      <Separator className="mb-3 mt-1 bg-neutral-800" />
      <ul>
        <li className="flex">
          <p className="basis-1/2 shrink-0">HEALTH</p>
          <HealthPopover />
        </li>
        <li className="flex">
          <p className="basis-1/2 shrink-0">HEALTH REGENERATION</p>
          <HealthRegenPopover />
        </li>
        <li className="flex">
          <p className="basis-1/2 shrink-0">MANA</p>
          <ManaPopover />
        </li>
        <li className="flex">
          <p className="basis-1/2 shrink-0">MANA REGENERATION</p>
          <ManaRegenPopover />
        </li>
      </ul>
    </div>
  );
}
