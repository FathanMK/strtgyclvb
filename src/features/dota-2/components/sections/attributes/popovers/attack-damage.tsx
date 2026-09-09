"use client";

import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LinkedText } from "@/components/shared/linked-text";
import { useState } from "react";
import { useAttributesContext } from "@/features/dota-2/context/attributes";
import { calculateAttackDamage } from "@/features/dota-2/calculations/attack-damage";
import { truncateDecimals } from "@/utils/truncate-decimals";

export function AttackDamagePopover() {
  const { attributes, mechanicConstants } = useAttributesContext();
  const attackDamage = calculateAttackDamage(attributes, mechanicConstants);
  const [active, setActive] = useState("");

  const formattedAttackDamageMin = truncateDecimals(attackDamage.min);
  const formattedAttackDamageMax = truncateDecimals(attackDamage.max);

  return (
    <Popover modal>
      <PopoverTrigger className="flex cursor-pointer font-bold hover-link aria-expanded:active-link">
        <p>
          {formattedAttackDamageMin} - {formattedAttackDamageMax}
        </p>
        <span className="text-[10px]">[?]</span>
      </PopoverTrigger>
      <PopoverContent align="start" className="text-sm gap-6 w-82">
        <div>
          <div>
            <LinkedText
              id="attackDamageMin"
              active={active}
              setActive={setActive}
            >
              {formattedAttackDamageMin}
            </LinkedText>{" "}
            = (
            <LinkedText
              id="attackDamagePrimary"
              active={active}
              setActive={setActive}
            >
              {attackDamage.primaryAttribute}
            </LinkedText>{" "}
            x{" "}
            <LinkedText
              id="attackDamagePerAttribute"
              active={active}
              setActive={setActive}
            >
              {attackDamage.damagePerAttribute}
            </LinkedText>
            ) +{" "}
            <LinkedText
              id="attackDamageBaseMin"
              active={active}
              setActive={setActive}
            >
              {attackDamage.baseMin}
            </LinkedText>
          </div>
          <div>
            <LinkedText
              id="attackDamageMax"
              active={active}
              setActive={setActive}
            >
              {formattedAttackDamageMax}
            </LinkedText>{" "}
            = (
            <LinkedText
              id="attackDamagePrimary"
              active={active}
              setActive={setActive}
            >
              {attackDamage.primaryAttribute}
            </LinkedText>{" "}
            x{" "}
            <LinkedText
              id="attackDamagePerAttribute"
              active={active}
              setActive={setActive}
            >
              {attackDamage.damagePerAttribute}
            </LinkedText>
            ) +{" "}
            <LinkedText
              id="attackDamageBaseMax"
              active={active}
              setActive={setActive}
            >
              {attackDamage.baseMax}
            </LinkedText>
          </div>
        </div>
        <div>
          <div className="flex gap-4">
            <p className="flex-1">ATTACK DAMAGE MIN:</p>
            <div className="basis-1/4">
              <LinkedText
                id="attackDamageMin"
                active={active}
                setActive={setActive}
              >
                {formattedAttackDamageMin}
              </LinkedText>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="flex-1">ATTACK DAMAGE MAX:</p>
            <div className="basis-1/4">
              <LinkedText
                id="attackDamageMax"
                active={active}
                setActive={setActive}
              >
                {formattedAttackDamageMax}
              </LinkedText>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="flex-1">PRIMARY ATTRIBUTE:</p>
            <div className="basis-1/4">
              <LinkedText
                id="attackDamagePrimary"
                active={active}
                setActive={setActive}
              >
                {attackDamage.primaryAttribute}
              </LinkedText>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="flex-1">DAMAGE PER ATTRIBUTE:</p>
            <div className="basis-1/4">
              <LinkedText
                id="attackDamagePerAttribute"
                active={active}
                setActive={setActive}
              >
                {attackDamage.damagePerAttribute}
              </LinkedText>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="flex-1">BASE HERO MINIMUM DAMAGE:</p>
            <div className="basis-1/4">
              <LinkedText
                id="attackDamageBaseMin"
                active={active}
                setActive={setActive}
              >
                {attackDamage.baseMin}
              </LinkedText>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="flex-1">BASE HERO MAXIMUM DAMAGE:</p>
            <div className="basis-1/4">
              <LinkedText
                id="attackDamageBaseMax"
                active={active}
                setActive={setActive}
              >
                {attackDamage.baseMax}
              </LinkedText>
            </div>
          </div>
        </div>
        <Link
          href="/games/dota-2/attributes/health"
          className="hover-link font-bold w-fit"
        >
          [MORE ABOUT ATTACK DAMAGE]
        </Link>
      </PopoverContent>
    </Popover>
  );
}
