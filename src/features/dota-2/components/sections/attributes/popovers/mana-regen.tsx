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
import { calculateManaRegen } from "@/features/dota-2/calculations/mana-regen";
import { truncateDecimals } from "@/utils/truncate-decimals";

export function ManaRegenPopover() {
  const { attributes, mechanicConstants } = useAttributesContext();
  const { base_intelligence, base_mana_regeneration } = attributes;
  const { mana_regen_per_intelligence } = mechanicConstants;
  const [active, setActive] = useState("");

  const totalManaRegen = calculateManaRegen(
    +base_intelligence.value,
    +mana_regen_per_intelligence.value,
    +base_mana_regeneration.value,
  );

  const formattedManaRegen = truncateDecimals(totalManaRegen);

  return (
    <Popover modal>
      <PopoverTrigger className="flex cursor-pointer font-black hover-link aria-expanded:active-link">
        <p>{formattedManaRegen}</p>
        <span className="text-[10px]">[?]</span>
      </PopoverTrigger>
      <PopoverContent align="start" className="text-sm gap-6 w-80">
        <div>
          <LinkedText id="manaRegen" active={active} setActive={setActive}>
            {formattedManaRegen}
          </LinkedText>{" "}
          = (
          <LinkedText
            id="baseIntelligence"
            active={active}
            setActive={setActive}
          >
            {base_intelligence.value}
          </LinkedText>{" "}
          x{" "}
          <LinkedText
            id="manaRegenPerIntelligence"
            active={active}
            setActive={setActive}
          >
            {mana_regen_per_intelligence.value}
          </LinkedText>
          ) +{" "}
          <LinkedText id="baseManaRegen" active={active} setActive={setActive}>
            {base_mana_regeneration.value}
          </LinkedText>
        </div>
        <div>
          <div className="flex gap-4">
            <p className="basis-[80%] shrink-0">MANA REGEN:</p>
            <div className="basis-1/4">
              <LinkedText id="manaRegen" active={active} setActive={setActive}>
                {formattedManaRegen}
              </LinkedText>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="basis-[80%] shrink-0">TOTAL INTELLIGENCE:</p>
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
            <p className="basis-[80%] shrink-0">MP REGEN PER INTELLIGENCE:</p>
            <div className="basis-1/4">
              <LinkedText
                id="manaRegenPerIntelligence"
                active={active}
                setActive={setActive}
              >
                {mana_regen_per_intelligence.value}
              </LinkedText>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="basis-[80%] shrink-0">BASE HERO MANA REGEN:</p>
            <div className="basis-1/4">
              <LinkedText
                id="baseManaRegen"
                active={active}
                setActive={setActive}
              >
                {base_mana_regeneration.value}
              </LinkedText>
            </div>
          </div>
        </div>
        <Link
          href="/games/dota-2/attributes/health"
          className="hover-link font-black w-fit"
        >
          [MORE ABOUT MANA REGEN]
        </Link>
      </PopoverContent>
    </Popover>
  );
}
