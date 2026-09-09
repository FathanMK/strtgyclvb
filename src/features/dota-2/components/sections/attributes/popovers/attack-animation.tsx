"use client";

import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAttributesContext } from "@/features/dota-2/context/attributes";
import { LinkedText } from "@/components/shared/linked-text";
import { useState } from "react";

export function AttackAnimationPopover() {
  const { attributes } = useAttributesContext();
  const { base_attack_animation_foreswing, base_attack_animation_backswing } =
    attributes;
  const [active, setActive] = useState("");

  return (
    <Popover modal>
      <PopoverTrigger className="flex cursor-pointer font-bold hover-link aria-expanded:active-link">
        <p>
          {base_attack_animation_foreswing.value} +{" "}
          {base_attack_animation_backswing.value}
        </p>
        <span className="text-[10px]">[?]</span>
      </PopoverTrigger>
      <PopoverContent align="start" className="text-sm uppercase gap-6 w-fit">
        <div>
          <LinkedText id="foreswing" active={active} setActive={setActive}>
            {base_attack_animation_foreswing.value}
          </LinkedText>{" "}
          +{" "}
          <LinkedText id="backswing" active={active} setActive={setActive}>
            {base_attack_animation_backswing.value}
          </LinkedText>
        </div>
        <div>
          <div className="flex gap-4">
            <p className="flex-1 shrink-0">FORESWING:</p>
            <div className="basis-1/4">
              <LinkedText id="foreswing" active={active} setActive={setActive}>
                {base_attack_animation_foreswing.value}
              </LinkedText>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="flex-1 shrink-0">BACKSWING:</p>
            <div className="basis-1/4">
              <LinkedText id="backswing" active={active} setActive={setActive}>
                {base_attack_animation_backswing.value}
              </LinkedText>
            </div>
          </div>
        </div>
        <Link
          href="/games/dota-2/attributes/health"
          className="hover-link font-bold w-fit"
        >
          [MORE ABOUT ATTACK ANIMATION]
        </Link>
      </PopoverContent>
    </Popover>
  );
}
