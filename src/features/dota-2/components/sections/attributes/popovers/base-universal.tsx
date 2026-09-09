"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { LinkedText } from "@/components/shared/linked-text";
import { useState } from "react";
import { useAttributesContext } from "@/features/dota-2/context/attributes";
import { calculateUniversal } from "@/features/dota-2/calculations/universal";
import { truncateDecimals } from "@/utils/truncate-decimals";

export function BaseUniversalPopover() {
  const { attributes } = useAttributesContext();
  const { base_strength, base_agility, base_intelligence } = attributes;
  const [active, setActive] = useState("");

  const baseUniversal = calculateUniversal(
    +base_strength.value,
    +base_agility.value,
    +base_intelligence.value,
  );

  const formattedBaseUniversal = truncateDecimals(baseUniversal);

  return (
    <Popover modal>
      <PopoverTrigger className="flex cursor-pointer font-bold hover-link aria-expanded:active-link">
        <p>{formattedBaseUniversal}</p>
        <span className="text-[10px]">[?]</span>
      </PopoverTrigger>
      <PopoverContent align="start" className="text-sm uppercase gap-6">
        <div>
          <LinkedText id="baseUniversal" active={active} setActive={setActive}>
            {formattedBaseUniversal}
          </LinkedText>{" "}
          ={" "}
          <LinkedText id="baseStrength" active={active} setActive={setActive}>
            {base_strength.value}
          </LinkedText>{" "}
          +{" "}
          <LinkedText id="baseAgility" active={active} setActive={setActive}>
            {base_agility.value}
          </LinkedText>{" "}
          +{" "}
          <LinkedText
            id="baseIntelligence"
            active={active}
            setActive={setActive}
          >
            {base_intelligence.value}
          </LinkedText>
        </div>
        <div>
          <div className="flex gap-4">
            <p className="flex-1">TOTAL UNIVERSAL:</p>
            <div className="basis-1/4">
              <LinkedText
                id="baseUniversal"
                active={active}
                setActive={setActive}
              >
                {formattedBaseUniversal}
              </LinkedText>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="flex-1">TOTAL STRENGTH:</p>
            <div className="basis-1/4">
              <LinkedText
                id="baseStrength"
                active={active}
                setActive={setActive}
              >
                {base_strength.value}
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
        </div>
        <Link
          href="/games/dota-2/attributes/health"
          className="hover-link font-bold w-fit"
        >
          [MORE ABOUT BASE UNIVERSAL]
        </Link>
      </PopoverContent>
    </Popover>
  );
}
