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
import { calculatePhysicalResistance } from "@/features/dota-2/calculations/physical-resistance";
import { truncateDecimals } from "@/utils/truncate-decimals";
import { formatToPercentage } from "@/utils/format-to-percentage";

export function PhysicalResistancePopover() {
  const { attributes, mechanicConstants } = useAttributesContext();
  const { base_agility, base_armor } = attributes;
  const { armor_per_agility, armor_physical_damage_factor } = mechanicConstants;
  const [active, setActive] = useState("");

  const armor = calculateArmor(
    +base_agility.value,
    +base_armor.value,
    +armor_per_agility.value,
  );

  const physicalResistance = calculatePhysicalResistance(
    armor,
    +armor_physical_damage_factor.value,
  );

  const formattedArmor = truncateDecimals(armor);
  const formattedPhysicalRes = formatToPercentage(physicalResistance);

  return (
    <Popover modal>
      <PopoverTrigger className="flex cursor-pointer font-black hover-link aria-expanded:active-link">
        <p>{formattedPhysicalRes}</p>
        <span className="text-[10px]">[?]</span>
      </PopoverTrigger>
      <PopoverContent align="start" className="text-sm gap-6 w-92">
        <div>
          <LinkedText
            id="formatPhysicalRes"
            active={active}
            setActive={setActive}
          >
            {formattedPhysicalRes}
          </LinkedText>{" "}
          ={" "}
          <LinkedText
            id="decimalPhysicalRes"
            active={active}
            setActive={setActive}
          >
            {truncateDecimals(physicalResistance, 4)}
          </LinkedText>{" "}
          x{" "}
          <LinkedText id="fullPercent" active={active} setActive={setActive}>
            {100}
          </LinkedText>{" "}
          ={" "}
          <LinkedText id="formulaBase" active={active} setActive={setActive}>
            {1}
          </LinkedText>{" "}
          - (
          <LinkedText id="formulaBase" active={active} setActive={setActive}>
            {1}
          </LinkedText>{" "}
          - ({" "}
          <LinkedText id="damageFactor" active={active} setActive={setActive}>
            {armor_physical_damage_factor.value}
          </LinkedText>{" "}
          x{" "}
          <LinkedText id="armor" active={active} setActive={setActive}>
            {formattedArmor}
          </LinkedText>
          )) / ({" "}
          <LinkedText id="formulaBase" active={active} setActive={setActive}>
            {1}
          </LinkedText>{" "}
          +{" "}
          <LinkedText id="damageFactor" active={active} setActive={setActive}>
            {armor_physical_damage_factor.value}
          </LinkedText>{" "}
          x{" "}
          <LinkedText id="armor" active={active} setActive={setActive}>
            {formattedArmor}
          </LinkedText>
          )
        </div>
        <div>
          <div className="flex gap-4">
            <p className="flex-1 shrink-0">PHYSICAL RESISTANCE:</p>
            <div className="basis-1/4">
              <LinkedText
                id="formatPhysicalRes"
                active={active}
                setActive={setActive}
              >
                {formattedPhysicalRes}
              </LinkedText>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="flex-1">DECIMAL PHYSICAL RESISTANCE:</p>
            <div className="basis-1/4">
              <LinkedText
                id="decimalPhysicalRes"
                active={active}
                setActive={setActive}
              >
                {truncateDecimals(physicalResistance, 4)}
              </LinkedText>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="flex-1">FULL PERCENT:</p>
            <div className="basis-1/4">
              <LinkedText
                id="fullPercent"
                active={active}
                setActive={setActive}
              >
                {100}
              </LinkedText>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="flex-1">ARMOR FORMULA BASE:</p>
            <div className="basis-1/4">
              <LinkedText
                id="formulaBase"
                active={active}
                setActive={setActive}
              >
                {1}
              </LinkedText>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="flex-1">ARMOR PHYSICAL DAMAGE FACTOR:</p>
            <div className="basis-1/4">
              <LinkedText
                id="damageFactor"
                active={active}
                setActive={setActive}
              >
                {armor_physical_damage_factor.value}
              </LinkedText>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="flex-1">ARMOR:</p>
            <div className="basis-1/4">
              <LinkedText id="armor" active={active} setActive={setActive}>
                {formattedArmor}
              </LinkedText>
            </div>
          </div>
        </div>
        <Link
          href="/games/dota-2/attributes/health"
          className="hover-link font-black w-fit"
        >
          [MORE ABOUT PHYSICAL RESISTANCE]
        </Link>
      </PopoverContent>
    </Popover>
  );
}
