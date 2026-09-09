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
import { calculateMana } from "@/features/dota-2/calculations/mana";
import { truncateDecimals } from "@/utils/truncate-decimals";

export function ManaPopover() {
  const { attributes, mechanicConstants } = useAttributesContext();

  const { base_intelligence } = attributes;
  const { mana_per_intelligence, base_hero_mana } = mechanicConstants;
  const [active, setActive] = useState("");

  const totalMana = calculateMana(
    +base_intelligence.value,
    +mana_per_intelligence.value,
    +base_hero_mana.value,
  );

  const formattedMana = truncateDecimals(totalMana);

  return (
    <Popover modal>
      <PopoverTrigger className="flex cursor-pointer font-bold hover-link aria-expanded:active-link">
        <p>{formattedMana}</p>
        <span className="text-[10px]">[?]</span>
      </PopoverTrigger>
      <PopoverContent align="start" className="text-sm gap-6">
        <div>
          <LinkedText id="mana" active={active} setActive={setActive}>
            {formattedMana}
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
            id="manaPerIntelligence"
            active={active}
            setActive={setActive}
          >
            {mana_per_intelligence.value}
          </LinkedText>
          ) +{" "}
          <LinkedText id="baseMana" active={active} setActive={setActive}>
            {base_hero_mana.value}
          </LinkedText>
        </div>
        <div>
          <div className="flex gap-4">
            <p className="basis-[70%] shrink-0">MANA:</p>
            <div className="basis-1/4">
              <LinkedText id="mana" active={active} setActive={setActive}>
                {formattedMana}
              </LinkedText>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="basis-[70%] shrink-0">TOTAL INTELLIGENCE:</p>
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
            <p className="basis-[70%] shrink-0">MP PER INTELLIGENCE:</p>
            <div className="basis-1/4">
              <LinkedText
                id="manaPerIntelligence"
                active={active}
                setActive={setActive}
              >
                {mana_per_intelligence.value}
              </LinkedText>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="basis-[70%] shrink-0">BASE HERO MANA:</p>
            <div className="basis-1/4">
              <LinkedText id="baseMana" active={active} setActive={setActive}>
                {base_hero_mana.value}
              </LinkedText>
            </div>
          </div>
        </div>
        <Link
          href="/games/dota-2/attributes/health"
          className="hover-link font-bold w-fit"
        >
          [MORE ABOUT MANA]
        </Link>
      </PopoverContent>
    </Popover>
  );
}
