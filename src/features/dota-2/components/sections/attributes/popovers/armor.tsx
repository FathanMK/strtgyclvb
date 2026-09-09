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
import { calculateArmor } from "@/features/dota-2/calculations/armor";
import { truncateDecimals } from "@/utils/truncate-decimals";

export function ArmorPopover() {
  const { attributes, mechanicConstants } = useAttributesContext();
  const { base_agility, base_armor } = attributes;
  const { armor_per_agility } = mechanicConstants;
  const [active, setActive] = useState("");

  const armor = calculateArmor(
    +base_agility.value,
    +base_armor.value,
    +armor_per_agility.value,
  );

  const formattedArmor = truncateDecimals(armor);

  return (
    <Popover modal>
      <PopoverTrigger className="flex cursor-pointer font-bold hover-link aria-expanded:active-link">
        <p>{formattedArmor}</p>
        <span className="text-[10px]">[?]</span>
      </PopoverTrigger>
      <PopoverContent align="start" className="text-sm uppercase gap-6">
        <div>
          <LinkedText id="armor" active={active} setActive={setActive}>
            {formattedArmor}
          </LinkedText>{" "}
          = (
          <LinkedText id="baseAgility" active={active} setActive={setActive}>
            {base_agility.value}
          </LinkedText>{" "}
          x{" "}
          <LinkedText
            id="armorPerAgility"
            active={active}
            setActive={setActive}
          >
            {armor_per_agility.value}
          </LinkedText>
          ) +{" "}
          <LinkedText id="baseArmor" active={active} setActive={setActive}>
            {base_armor.value}
          </LinkedText>
        </div>
        <div>
          <div className="flex gap-4">
            <p className="flex-1">TOTAL ARMOR:</p>
            <div className="basis-1/4">
              <LinkedText id="armor" active={active} setActive={setActive}>
                {formattedArmor}
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
            <p className="flex-1">ARMOR PER AGILITY:</p>
            <div className="basis-1/4">
              <LinkedText
                id="armorPerAgility"
                active={active}
                setActive={setActive}
              >
                {armor_per_agility.value}
              </LinkedText>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="flex-1">BASE HERO ARMOR:</p>
            <div className="basis-1/4">
              <LinkedText id="baseArmor" active={active} setActive={setActive}>
                {base_armor.value}
              </LinkedText>
            </div>
          </div>
        </div>
        <Link
          href="/games/dota-2/attributes/health"
          className="hover-link font-bold w-fit"
        >
          [MORE ABOUT ARMOR]
        </Link>
      </PopoverContent>
    </Popover>
  );
}
