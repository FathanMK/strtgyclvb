"use client";

import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { LinkedText } from "@/components/shared/linked-text";
import { useAttributesContext } from "@/features/dota-2/context/attributes";
import { calculateAttackSpeed } from "@/features/dota-2/calculations/attack-speed";
import { calculateAttackRate } from "@/features/dota-2/calculations/attack-rate";
import { calculateTimeBetweenAttacks } from "@/features/dota-2/calculations/time-between-attacks";
import { truncateDecimals } from "@/utils/truncate-decimals";

export function TimeBetweenAttacksPopover() {
  const { attributes, mechanicConstants } = useAttributesContext();
  const { base_agility, base_attack_speed, base_attack_time } = attributes;
  const { attack_speed_per_agility } = mechanicConstants;
  const [active, setActive] = useState("");

  const attackSpeed = calculateAttackSpeed(
    +base_agility.value,
    +attack_speed_per_agility.value,
    +base_attack_speed.value,
  );

  const attackRate = calculateAttackRate(
    attackSpeed,
    +base_attack_speed.value,
    +base_attack_time.value,
  );

  const timeBetweenAttacks = calculateTimeBetweenAttacks(attackRate);
  const formattedAttackRate = truncateDecimals(attackRate);
  const formattedTimeBetweenAttacks = truncateDecimals(timeBetweenAttacks);

  return (
    <Popover modal>
      <PopoverTrigger className="flex cursor-pointer font-black hover-link aria-expanded:active-link">
        <p>{formattedTimeBetweenAttacks}s</p>
        <span className="text-[10px]">[?]</span>
      </PopoverTrigger>
      <PopoverContent align="start" className="text-sm gap-6 w-82">
        <div>
          <div>
            <LinkedText id="attackRate" active={active} setActive={setActive}>
              {formattedAttackRate}
            </LinkedText>{" "}
            ={" "}
            <LinkedText id="attackSpeed" active={active} setActive={setActive}>
              {attackSpeed}
            </LinkedText>{" "}
            / (
            <LinkedText
              id="baseAttackSpeed"
              active={active}
              setActive={setActive}
            >
              {base_attack_speed.value}
            </LinkedText>{" "}
            *{" "}
            <LinkedText
              id="baseAttackTime"
              active={active}
              setActive={setActive}
            >
              {base_attack_time.value}
            </LinkedText>
            )
          </div>
          <div>
            <LinkedText
              id="timeBetweenAttacks"
              active={active}
              setActive={setActive}
            >
              {formattedTimeBetweenAttacks}s
            </LinkedText>{" "}
            ={" "}
            <LinkedText id="second" active={active} setActive={setActive}>
              {1}
            </LinkedText>{" "}
            /{" "}
            <LinkedText id="attackRate" active={active} setActive={setActive}>
              {formattedAttackRate}
            </LinkedText>
          </div>
        </div>
        <div>
          <div className="flex gap-4">
            <p className="flex-1 shrink-0">ATTACK RATE:</p>
            <div className="basis-1/4">
              <LinkedText id="attackRate" active={active} setActive={setActive}>
                {formattedAttackRate}
              </LinkedText>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="flex-1 shrink-0">ATTACK SPEED:</p>
            <div className="basis-1/4">
              <LinkedText
                id="attackSpeed"
                active={active}
                setActive={setActive}
              >
                {attackSpeed}
              </LinkedText>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="flex-1 shrink-0">BASE ATTACK SPEED:</p>
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
          <div className="flex gap-4">
            <p className="flex-1 shrink-0">BASE ATTACK TIME:</p>
            <div className="basis-1/4">
              <LinkedText
                id="baseAttackTime"
                active={active}
                setActive={setActive}
              >
                {base_attack_time.value}
              </LinkedText>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="flex-1">TIME BETWEEN ATTACKS:</p>
            <div className="basis-1/4">
              <LinkedText
                id="timeBetweenAttacks"
                active={active}
                setActive={setActive}
              >
                {formattedTimeBetweenAttacks}s
              </LinkedText>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="flex-1">SECOND:</p>
            <div className="basis-1/4">
              <LinkedText id="second" active={active} setActive={setActive}>
                {1}
              </LinkedText>
            </div>
          </div>
        </div>
        <Link
          href="/games/dota-2/attributes/health"
          className="hover-link font-black w-fit"
        >
          [MORE ABOUT TIME BETWEEN ATTACKS]
        </Link>
      </PopoverContent>
    </Popover>
  );
}
