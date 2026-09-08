import { logs, LogsInsertType } from "@/db/schemas";
import {
  dota2MechanicsConstants,
  Dota2MechanicsConstantsInsert,
} from "../schemas";
import { getDbAsync } from "@/db";

async function mechanicsConstants() {
  const db = await getDbAsync();
  const mechanicsConstants: Dota2MechanicsConstantsInsert[] = [
    {
      mechanicConstantId: "base_hero_health",
      name: "Base Hero Health",
      descriptions: [
        "The universal Base Health assigned to every hero at Level 1 before any attributes, items, or abilities are applied.",
      ],
      category: "health",
    },
    {
      mechanicConstantId: "health_per_strength",
      name: "Health per Strength",
      descriptions: [
        "The scaling factor that converts a hero's Strength attribute directly into their maximum health pool.",
      ],
      category: "health",
    },
    {
      mechanicConstantId: "health_regen_per_strength",
      name: "Health Regeneration per Strength",
      descriptions: [
        "The passive healing multiplier tied directly to a hero's Strength attribute.",
      ],
      category: "health",
    },
    {
      mechanicConstantId: "base_hero_mana",
      name: "Base Hero Mana",
      descriptions: [
        "The universal Base Mana assigned to every hero at Level 1 before any attributes, items, or abilities are applied.",
      ],
      category: "mana",
    },
    {
      mechanicConstantId: "mana_per_intelligence",
      name: "Mana per Intelligence",
      descriptions: [
        "The scaling factor that converts a hero's Intelligence attribute directly into their maximum mana pool.",
      ],
      category: "mana",
    },
    {
      mechanicConstantId: "mana_regen_per_intelligence",
      name: "Mana Regeneration per Intelligence",
      descriptions: [
        "The passive mana multiplier tied directly to a hero's Intelligence attribute.",
      ],
      category: "mana",
    },
    {
      mechanicConstantId: "armor_per_agility",
      name: "Base Armor per Agility",
      descriptions: [
        "The physical damage reduction factor granted passively by a hero's Agility attribute.",
      ],
      category: "defensive",
    },
    {
      mechanicConstantId: "armor_physical_damage_factor",
      name: "Armor Physical Damage Factor",
      descriptions: [
        "The constant factor used in armor formula to determine physical damage reduction and Effective HP scaling.",
      ],
      category: "defensive",
    },
    {
      mechanicConstantId: "magic_resist_per_ten_intelligence",
      name: "Magic Resistance per Ten Intelligence",
      descriptions: [
        "The percentage increase in magic damage reduction gained for every 10 points in a hero's Intelligence attribute.",
      ],
      category: "defensive",
    },
    {
      mechanicConstantId: "attack_speed_per_agility",
      name: "Attack Speed per Agility",
      descriptions: [
        "The flat attack speed bonus granted to every hero per point of Agility.",
      ],
      category: "offensive",
    },
    {
      mechanicConstantId: "damage_per_strength",
      name: "Damage per Strength",
      descriptions: [
        "The amount of main attack damage gained per point of Strength for Strength primary attribute heroes.",
      ],
      category: "offensive",
    },
    {
      mechanicConstantId: "damage_per_agility",
      name: "Damage per Agility",
      descriptions: [
        "The amount of main attack damage gained per point of Agility for Agility primary attribute heroes.",
      ],
      category: "offensive",
    },
    {
      mechanicConstantId: "damage_per_intelligence",
      name: "Damage per Intelligence",
      descriptions: [
        "The amount of main attack damage gained per point of Intelligence for Intelligence primary attribute heroes.",
      ],
      category: "offensive",
    },
    {
      mechanicConstantId: "damage_per_universal",
      name: "Damage per Universal",
      descriptions: [
        "The attack damage bonus gained per attribute point across all stats for Universal primary attribute heroes.",
      ],
      category: "offensive",
    },
  ];

  const logsMechanicsConstants: LogsInsertType[] = [
    {
      title: "Added Dota 2 mechanic constants",
      type: "dota-2",
      content: [
        {
          type: "text",
          value: "Add",
        },
        {
          href: "/games/dota-2",
          type: "link",
          value: "Dota 2",
        },
        {
          href: "/games/dota-2/mechanic-constants-attributes",
          type: "link",
          value: "mechanic constants attributes",
        },
      ],
    },
  ];

  await db.insert(dota2MechanicsConstants).values(mechanicsConstants);
  await db.insert(logs).values(logsMechanicsConstants);

  console.log("ADD MECHANIC CONSTANTS FOR DOTA 2");
  process.exit(0);
}

await mechanicsConstants();
