"use client";

import { useAttributesContext } from "@/features/dota-2/context/attributes";
import { AttackDamagePopover } from "./popovers/attack-damage";
import { AttackSpeedPopover } from "./popovers/attack-speed";
import { TimeBetweenAttacksPopover } from "./popovers/time-between-attacks";
import { AttackAnimationPopover } from "./popovers/attack-animation";
import { Separator } from "@/components/ui/separator";

export function OffensiveAttributesSection() {
  const { attributes } = useAttributesContext();
  return (
    <div>
      <h2>OFFENSIVE</h2>
      <Separator className="mb-3 mt-1 bg-neutral-800" />
      <div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">ATTACK DAMAGE</p>
          <AttackDamagePopover />
        </div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">ATTACK SPEED</p>
          <AttackSpeedPopover />
        </div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">TIME BETWEEN ATTACKS</p>
          <TimeBetweenAttacksPopover />
        </div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">ATTACK ANIMATION</p>
          <AttackAnimationPopover />
        </div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">ATTACK RANGE</p>
          <p className="font-black">{attributes.base_attack_range.value}</p>
        </div>
        <div className="flex">
          <p className="basis-1/2 shrink-0">SPELL AMPLIFICATION</p>
          <p className="font-black">0%</p>
        </div>
      </div>
    </div>
  );
}
