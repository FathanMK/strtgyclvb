import { getDbAsync } from "@/db";
import {
  dota2MechanicsFormulas,
  Dota2MechanicsFormulasInsertType,
  logs,
  LogsInsertType,
} from "@/db/schemas";

async function mechanicsFormulas() {
  const db = await getDbAsync();
  const mechanicsFormulas: Dota2MechanicsFormulasInsertType[] = [
    {
      mechanicFormulaId: "armor",
      name: "Armor",
      descriptions: [
        "Calculates a unit's armor from its base armor and attributes.",
      ],
      category: "defense",
    },
    {
      mechanicFormulaId: "attack_speed",
      name: "Attack Speed",
      descriptions: [
        "Calculates a unit's total attack speed from its base and bonus attack speed.",
      ],
      category: "offense",
    },
    {
      mechanicFormulaId: "base_universal",
      name: "Base Universal Attribute",
      descriptions: [
        "Calculates the base attribute contribution of a Universal hero.",
      ],
      category: "attributes",
    },
    {
      mechanicFormulaId: "gain_universal",
      name: "Universal Attribute Gain",
      descriptions: [
        "Calculates the attribute gain contribution of a Universal hero.",
      ],
      category: "attributes",
    },
    {
      mechanicFormulaId: "min_damage_strength",
      name: "Minimum Strength Hero Damage",
      descriptions: [
        "Calculates the minimum of primary attribute damage contribution of a Strength hero.",
      ],
      category: "offense",
    },
    {
      mechanicFormulaId: "max_damage_strength",
      name: "Maximum Strength Hero Damage",
      descriptions: [
        "Calculates the maximum of primary attribute damage contribution of a Strength hero.",
      ],
      category: "offense",
    },
    {
      mechanicFormulaId: "min_damage_agility",
      name: "Minimum Agility Hero Damage",
      descriptions: [
        "Calculates the minimum of primary attribute damage contribution of an Agility hero.",
      ],
      category: "offense",
    },
    {
      mechanicFormulaId: "max_damage_agility",
      name: "Maximum Agility Hero Damage",
      descriptions: [
        "Calculates the maximum of primary attribute damage contribution of an Agility hero.",
      ],
      category: "offense",
    },
    {
      mechanicFormulaId: "min_damage_intelligence",
      name: "Minimum Intelligence Hero Damage",
      descriptions: [
        "Calculates the minimum of primary attribute damage contribution of an Intelligence hero.",
      ],
      category: "offense",
    },
    {
      mechanicFormulaId: "max_damage_intelligence",
      name: "Maximum Intelligence Hero Damage",
      descriptions: [
        "Calculates the maximum of primary attribute damage contribution of an Intelligence hero.",
      ],
      category: "offense",
    },
    {
      mechanicFormulaId: "min_damage_universal",
      name: "Minimum Universal Hero Damage",
      descriptions: [
        "Calculates the minimum of attribute-based damage contribution of a Universal hero.",
      ],
      category: "offense",
    },
    {
      mechanicFormulaId: "max_damage_universal",
      name: "Maximum Universal Hero Damage",
      descriptions: [
        "Calculates the maximum of attribute-based damage contribution of a Universal hero.",
      ],
      category: "offense",
    },
    {
      mechanicFormulaId: "health_regen",
      name: "Health Regeneration",
      descriptions: [
        "Calculates a unit's health regeneration from its base regeneration and attributes.",
      ],
      category: "resource",
    },
    {
      mechanicFormulaId: "health",
      name: "Health",
      descriptions: [
        "Calculates a unit's total health from its base health and attributes.",
      ],
      category: "resource",
    },
    {
      mechanicFormulaId: "magic_resistance",
      name: "Magic Resistance",
      descriptions: [
        "Calculates the percentage of magical damage mitigated by a unit.",
      ],
      category: "defense",
    },
    {
      mechanicFormulaId: "mana_regen",
      name: "Mana Regeneration",
      descriptions: [
        "Calculates a unit's mana regeneration from its base regeneration and attributes.",
      ],
      category: "resource",
    },
    {
      mechanicFormulaId: "mana",
      name: "Mana",
      descriptions: [
        "Calculates a unit's total mana from its base mana and attributes.",
      ],
      category: "resource",
    },
    {
      mechanicFormulaId: "physical_resistance",
      name: "Physical Resistance",
      descriptions: [
        "Calculates the percentage of physical damage mitigated by a unit's armor.",
      ],
      category: "defense",
    },
    {
      mechanicFormulaId: "attack_rate",
      name: "Attack Rate",
      descriptions: [
        "Calculates a unit's rate of attack based on its attack time and attack speed.",
      ],
      category: "offense",
    },
    {
      mechanicFormulaId: "time_between_attacks",
      name: "Time Between Attacks",
      descriptions: [
        "Calculates the time between a unit's attacks based on its attack time and attack speed.",
      ],
      category: "offense",
    },
  ];

  const logsMechanicsFormulas: LogsInsertType[] = [
    {
      title: "Added Dota 2 mechanics formulas",
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
          href: "/games/dota-2/mechanics-formulas",
          type: "link",
          value: "mechanics formulas",
        },
      ],
    },
  ];

  await db.insert(dota2MechanicsFormulas).values(mechanicsFormulas);
  await db.insert(logs).values(logsMechanicsFormulas);

  console.log("ADD MECHANICS FORMULAS FOR DOTA 2");
  process.exit(0);
}

await mechanicsFormulas();
