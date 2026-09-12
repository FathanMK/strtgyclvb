"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { useState } from "react";
import { LinkedText } from "@/components/shared/linked-text";
import { useAttributesContext } from "@/features/dota-2/context/attributes";
import { calculateUniversal } from "@/features/dota-2/calculations/universal";
import { truncateDecimals } from "@/utils/truncate-decimals";

export function GainUniversalPopover() {
  const { attributes } = useAttributesContext();
  const { gain_strength, gain_agility, gain_intelligence } = attributes;
  const [active, setActive] = useState("");

  const gainUniversal = calculateUniversal(
    +gain_strength.value,
    +gain_agility.value,
    +gain_intelligence.value,
  );

  const formattedGainUniversal = truncateDecimals(gainUniversal);

  return (
    <Popover modal>
      <PopoverTrigger className="flex cursor-pointer font-black hover-link aria-expanded:active-link">
        <p>{formattedGainUniversal}</p>
        <span className="text-[10px]">[?]</span>
      </PopoverTrigger>
      <PopoverContent align="start" className="text-sm gap-6">
        <div>
          <LinkedText id="gainUniversal" active={active} setActive={setActive}>
            {formattedGainUniversal}
          </LinkedText>{" "}
          ={" "}
          <LinkedText id="gainStrength" active={active} setActive={setActive}>
            {gain_strength.value}
          </LinkedText>{" "}
          +{" "}
          <LinkedText id="gainAgility" active={active} setActive={setActive}>
            {gain_agility.value}
          </LinkedText>{" "}
          +{" "}
          <LinkedText
            id="gainIntelligence"
            active={active}
            setActive={setActive}
          >
            {gain_intelligence.value}
          </LinkedText>
        </div>
        <div>
          <div className="flex gap-4">
            <p className="flex-1">GAIN UNIVERSAL:</p>
            <div className="basis-1/4">
              <LinkedText
                id="gainUniversal"
                active={active}
                setActive={setActive}
              >
                {formattedGainUniversal}
              </LinkedText>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="flex-1">GAIN STRENGTH:</p>
            <div className="basis-1/4">
              <LinkedText
                id="gainStrength"
                active={active}
                setActive={setActive}
              >
                {gain_strength.value}
              </LinkedText>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="flex-1">GAIN AGILITY:</p>
            <div className="basis-1/4">
              <LinkedText
                id="gainAgility"
                active={active}
                setActive={setActive}
              >
                {gain_agility.value}
              </LinkedText>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="flex-1">GAIN INTELLIGENCE:</p>
            <div className="basis-1/4">
              <LinkedText
                id="gainIntelligence"
                active={active}
                setActive={setActive}
              >
                {gain_intelligence.value}
              </LinkedText>
            </div>
          </div>
        </div>
        <Link
          href="/games/dota-2/attributes/health"
          className="hover-link font-black w-fit"
        >
          [MORE ABOUT GAIN UNIVERSAL]
        </Link>
      </PopoverContent>
    </Popover>
  );
}
