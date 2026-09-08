"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { calculateHealth } from "@/features/dota-2/calculations/health";
import { useAttributesContext } from "@/features/dota-2/context/attributes";
import Link from "next/link";
import { useState } from "react";
import { LinkedText } from "@/components/shared/linked-text";
import { truncateDecimals } from "@/utils/truncate-decimals";

export function HealthPopover() {
  const { attributes, mechanicConstants } = useAttributesContext();
  const { base_strength } = attributes;
  const { health_per_strength, base_hero_health } = mechanicConstants;
  const [active, setActive] = useState("");

  const totalHealth = calculateHealth(
    +base_strength.value,
    +health_per_strength.value,
    +base_hero_health.value,
  );

  const formattedHealth = truncateDecimals(totalHealth);

  return (
    <Popover modal>
      <PopoverTrigger className="flex cursor-pointer font-bold hover-link aria-expanded:active-link">
        <p>{formattedHealth}</p>
        <span className="text-[10px]">[?]</span>
      </PopoverTrigger>
      <PopoverContent align="start" className="text-sm uppercase gap-6">
        <div>
          <LinkedText id="health" active={active} setActive={setActive}>
            {formattedHealth}
          </LinkedText>{" "}
          = (
          <LinkedText id="baseStrength" active={active} setActive={setActive}>
            {base_strength.value}
          </LinkedText>{" "}
          x{" "}
          <LinkedText
            id="healthPerStrength"
            active={active}
            setActive={setActive}
          >
            {health_per_strength.value}
          </LinkedText>
          ) +{" "}
          <LinkedText id="baseHealth" active={active} setActive={setActive}>
            {base_hero_health.value}
          </LinkedText>
        </div>
        <div>
          <div className="flex gap-4">
            <p className="basis-[60%] shrink-0">HEALTH:</p>
            <div className="basis-1/4">
              <LinkedText id="health" active={active} setActive={setActive}>
                {formattedHealth}
              </LinkedText>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="basis-[60%] shrink-0">TOTAL STRENGTH:</p>
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
            <p className="basis-[60%] shrink-0">HP PER STRENGTH:</p>
            <div className="basis-1/4">
              <LinkedText
                id="healthPerStrength"
                active={active}
                setActive={setActive}
              >
                {health_per_strength.value}
              </LinkedText>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="basis-[60%] shrink-0">BASE HERO HEALTH:</p>
            <div className="basis-1/4">
              <LinkedText id="baseHealth" active={active} setActive={setActive}>
                {base_hero_health.value}
              </LinkedText>
            </div>
          </div>
        </div>
        <Link
          href="/games/dota-2/attributes/health"
          className="hover-link font-bold w-fit"
        >
          [MORE ABOUT HEALTH]
        </Link>
      </PopoverContent>
    </Popover>
  );
}
