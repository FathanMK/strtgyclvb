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
import { calculateMagicResistance } from "@/features/dota-2/calculations/magic-resistance";
import { formatToPercentage } from "@/utils/format-to-percentage";
import { truncateDecimals } from "@/utils/truncate-decimals";

export function MagicResistancePopover() {
  const { attributes, mechanicConstants } = useAttributesContext();
  const { base_intelligence, base_magic_resistance } = attributes;
  const { magic_resist_per_ten_intelligence } = mechanicConstants;
  const [active, setActive] = useState("");

  const magicRes = calculateMagicResistance(
    +base_intelligence.value,
    +magic_resist_per_ten_intelligence.value,
    +base_magic_resistance.value,
  );

  const formattedMagicRes = formatToPercentage(magicRes);

  return (
    <Popover modal>
      <PopoverTrigger className="flex cursor-pointer font-black hover-link aria-expanded:active-link">
        <p>{formattedMagicRes}</p>
        <span className="text-[10px]">[?]</span>
      </PopoverTrigger>
      <PopoverContent align="start" className="text-sm gap-6 w-103">
        <div>
          <LinkedText id="formatMagicRes" active={active} setActive={setActive}>
            {formattedMagicRes}
          </LinkedText>{" "}
          ={" "}
          <LinkedText
            id="decimalMagicRes"
            active={active}
            setActive={setActive}
          >
            {truncateDecimals(magicRes, 4)}
          </LinkedText>{" "}
          x{" "}
          <LinkedText id="fullPercent" active={active} setActive={setActive}>
            {100}
          </LinkedText>{" "}
          = ((
          <LinkedText
            id="baseIntelligence"
            active={active}
            setActive={setActive}
          >
            {base_intelligence.value}
          </LinkedText>{" "}
          /{" "}
          <LinkedText id="divider" active={active} setActive={setActive}>
            {10}
          </LinkedText>
          ) *{" "}
          <LinkedText id="resistPerTen" active={active} setActive={setActive}>
            {magic_resist_per_ten_intelligence.value}
          </LinkedText>
          ) /{" "}
          <LinkedText id="fullPercent" active={active} setActive={setActive}>
            {100}
          </LinkedText>{" "}
          +{" "}
          <LinkedText
            id="baseMagicResist"
            active={active}
            setActive={setActive}
          >
            {base_magic_resistance.value}
          </LinkedText>
        </div>
        <div>
          <div className="flex gap-4">
            <p className="flex-1 shrink-0">MAGIC RESISTANCE:</p>
            <div className="basis-1/4">
              <LinkedText
                id="formatMagicRes"
                active={active}
                setActive={setActive}
              >
                {formattedMagicRes}
              </LinkedText>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="flex-1">DECIMAL MAGIC RESISTANCE:</p>
            <div className="basis-1/4">
              <LinkedText
                id="decimalMagicRes"
                active={active}
                setActive={setActive}
              >
                {truncateDecimals(magicRes, 4)}
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
            <p className="flex-1">TOTAL INTELLIGENCE:</p>
            <div className="basis-1/4">
              <LinkedText
                id="baseIntelligence"
                active={active}
                setActive={setActive}
              >
                {base_intelligence.value}
              </LinkedText>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="flex-1">DIVIDER:</p>
            <div className="basis-1/4">
              <LinkedText id="divider" active={active} setActive={setActive}>
                {10}
              </LinkedText>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="flex-1">MAGIC RESIST PER 10 INTELLIGENCE:</p>
            <div className="basis-1/4">
              <LinkedText
                id="resistPerTen"
                active={active}
                setActive={setActive}
              >
                {magic_resist_per_ten_intelligence.value}
              </LinkedText>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="flex-1">BASE HERO MAGIC RESISTANCE:</p>
            <div className="basis-1/4">
              <LinkedText
                id="baseMagicResist"
                active={active}
                setActive={setActive}
              >
                {base_magic_resistance.value}
              </LinkedText>
            </div>
          </div>
        </div>
        <Link
          href="/games/dota-2/attributes/health"
          className="hover-link font-black w-fit"
        >
          [MORE ABOUT MAGIC RESISTANCE]
        </Link>
      </PopoverContent>
    </Popover>
  );
}
