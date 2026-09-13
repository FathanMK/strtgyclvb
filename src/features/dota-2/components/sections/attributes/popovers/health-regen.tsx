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
import { calculateHealthRegen } from "@/features/dota-2/calculations/health-regen";
import { truncateDecimals } from "@/utils/truncate-decimals";

export function HealthRegenPopover() {
  const { attributes, mechanicConstants } = useAttributesContext();
  const { base_strength, base_health_regeneration } = attributes;
  const { health_regen_per_strength } = mechanicConstants;
  const [active, setActive] = useState("");

  const totalHealthRegen = calculateHealthRegen(
    +base_strength.value,
    +health_regen_per_strength.value,
    +base_health_regeneration.value,
  );

  const formattedHealthRegen = truncateDecimals(totalHealthRegen);

  return (
    <Popover modal>
      <PopoverTrigger className="flex cursor-pointer font-black hover-link aria-expanded:active-link">
        <p>{formattedHealthRegen}</p>
        <span className="text-[10px]">[?]</span>
      </PopoverTrigger>
      <PopoverContent align="start" className="text-sm gap-6">
        <div>
          <LinkedText id="healthRegen" active={active} setActive={setActive}>
            {formattedHealthRegen}
          </LinkedText>{" "}
          = (
          <LinkedText id="baseStrength" active={active} setActive={setActive}>
            {base_strength.value}
          </LinkedText>{" "}
          x{" "}
          <LinkedText
            id="healthRegenPerStrength"
            active={active}
            setActive={setActive}
          >
            {health_regen_per_strength.value}
          </LinkedText>
          ) +{" "}
          <LinkedText
            id="baseHealthRegen"
            active={active}
            setActive={setActive}
          >
            {base_health_regeneration.value}
          </LinkedText>
        </div>
        <div>
          <div className="flex gap-4">
            <p className="basis-[80%] shrink-0">HEALTH REGEN:</p>
            <div className="basis-1/4">
              <LinkedText
                id="healthRegen"
                active={active}
                setActive={setActive}
              >
                {formattedHealthRegen}
              </LinkedText>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="basis-[80%] shrink-0">TOTAL STRENGTH:</p>
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
            <p className="basis-[80%] shrink-0">HP REGEN PER STRENGTH:</p>
            <div className="basis-1/4">
              <LinkedText
                id="healthRegenPerStrength"
                active={active}
                setActive={setActive}
              >
                {health_regen_per_strength.value}
              </LinkedText>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="basis-[80%] shrink-0">BASE HERO HEALTH REGEN:</p>
            <div className="basis-1/4">
              <LinkedText
                id="baseHealthRegen"
                active={active}
                setActive={setActive}
              >
                {base_health_regeneration.value}
              </LinkedText>
            </div>
          </div>
        </div>
        <Link
          href="/games/dota-2/attributes/health"
          className="hover-link font-black w-fit"
        >
          [MORE ABOUT HEALTH REGEN]
        </Link>
      </PopoverContent>
    </Popover>
  );
}
