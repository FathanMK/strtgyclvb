"use client";

import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LinkedText } from "@/components/shared/linked-text";
import { useState } from "react";
import { useAttributesContext } from "@/features/dota-2/context/attributes";
import { calculateAttackSpeed } from "@/features/dota-2/calculations/attack-speed";
import { truncateDecimals } from "@/utils/truncate-decimals";

export function AttackSpeedPopover() {
  const { attributes, mechanicConstants } = useAttributesContext();
  const { base_agility, base_attack_speed } = attributes;
  const { attack_speed_per_agility } = mechanicConstants;
  const [active, setActive] = useState("");

  const attackSpeed = calculateAttackSpeed(
    +base_agility.value,
    +attack_speed_per_agility.value,
    +base_attack_speed.value,
  );

  const formattedAttackSpeed = truncateDecimals(attackSpeed);

  return (
    <Popover modal>
      <PopoverTrigger className="flex cursor-pointer font-black hover-link aria-expanded:active-link">
        <p>{formattedAttackSpeed}</p>
        <span className="text-[10px]">[?]</span>
      </PopoverTrigger>
      <PopoverContent align="start" className="text-sm gap-6 w-82">
        <div>
          <LinkedText id="attackSpeed" active={active} setActive={setActive}>
            {formattedAttackSpeed}
          </LinkedText>{" "}
          = (
          <LinkedText id="baseAgility" active={active} setActive={setActive}>
            {base_agility.value}
          </LinkedText>{" "}
          x{" "}
          <LinkedText
            id="attackSpeedPerAgility"
            active={active}
            setActive={setActive}
          >
            {attack_speed_per_agility.value}
          </LinkedText>
          ) +{" "}
          <LinkedText
            id="baseAttackSpeed"
            active={active}
            setActive={setActive}
          >
            {base_attack_speed.value}
          </LinkedText>
        </div>
        <div>
          <div className="flex gap-4">
            <p className="flex-1">TOTAL ATTACK SPEED:</p>
            <div className="basis-1/4">
              <LinkedText
                id="attackSpeed"
                active={active}
                setActive={setActive}
              >
                {formattedAttackSpeed}
              </LinkedText>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="flex-1">TOTAL AGILITY:</p>
            <div className="basis-1/4">
              <LinkedText
                id="baseAgility"
                active={active}
                setActive={setActive}
              >
                {base_agility.value}
              </LinkedText>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="flex-1">ATTACK SPEED PER AGILITY:</p>
            <div className="basis-1/4">
              <LinkedText
                id="attackSpeedPerAgility"
                active={active}
                setActive={setActive}
              >
                {attack_speed_per_agility.value}
              </LinkedText>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="flex-1">BASE HERO ATTACK SPEED:</p>
            <div className="basis-1/4">
              <LinkedText
                id="baseAttackSpeed"
                active={active}
                setActive={setActive}
              >
                {base_attack_speed.value}
              </LinkedText>
            </div>
          </div>
        </div>
        <Link
          href="/games/dota-2/attributes/health"
          className="hover-link font-black w-fit"
        >
          [MORE ABOUT ATTACK SPEED]
        </Link>
      </PopoverContent>
    </Popover>
  );
}
