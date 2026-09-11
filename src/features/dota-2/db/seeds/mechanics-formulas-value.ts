import { getDbAsync } from "@/db";
import {
  dota2MechanicsFormulasValue,
  Dota2MechanicsFormulasValueInsertType,
  logs,
  LogsInsertType,
} from "@/db/schemas";

async function mehcanicsFormulasValue() {
  const db = await getDbAsync();
  const mechanicsFormulasValue: Dota2MechanicsFormulasValueInsertType[] = [
    {
      patchId: "7.41e",
      mechanicFormulaId: "armor",
      value: "(base_agility * armor_per_agility) + base_armor",
      valueType: "text",
    },
    {
      patchId: "7.41e",
      mechanicFormulaId: "attack_rate",
      value: "(base_attack_speed * base_attack_time) / total_attack_speed",
      valueType: "text",
    },
    {
      patchId: "7.41e",
      mechanicFormulaId: "attack_speed",
      value: "(base_agility * attack_speed_per_agility) + base_attack_speed",
      valueType: "text",
    },
    {
      patchId: "7.41e",
      mechanicFormulaId: "base_universal",
      value: "base_strength + base_agility + base_intelligence",
      valueType: "text",
    },
    {
      patchId: "7.41e",
      mechanicFormulaId: "gain_universal",
      value: "gain_strength + gain_agility + gain_intelligence",
      valueType: "text",
    },
    {
      patchId: "7.41e",
      mechanicFormulaId: "min_damage_strength",
      value: "(base_strength * damage_per_strength) + base_min_attack_damage",
      valueType: "text",
    },
    {
      patchId: "7.41e",
      mechanicFormulaId: "max_damage_strength",
      value: "(base_strength * damage_per_strength) + base_max_attack_damage",
      valueType: "text",
    },
    {
      patchId: "7.41e",
      mechanicFormulaId: "min_damage_agility",
      value: "(base_agility * damage_per_agility) + base_min_attack_damage",
      valueType: "text",
    },
    {
      patchId: "7.41e",
      mechanicFormulaId: "max_damage_agility",
      value: "(base_agility * damage_per_agility) + base_max_attack_damage",
      valueType: "text",
    },
    {
      patchId: "7.41e",
      mechanicFormulaId: "min_damage_intelligence",
      value:
        "(base_intelligence * damage_per_intelligence) + base_min_attack_damage",
      valueType: "text",
    },
    {
      patchId: "7.41e",
      mechanicFormulaId: "max_damage_intelligence",
      value:
        "(base_intelligence * damage_per_intelligence) + base_max_attack_damage",
      valueType: "text",
    },
    {
      patchId: "7.41e",
      mechanicFormulaId: "min_damage_universal",
      value: "(base_universal * damage_per_universal) + base_min_attack_damage",
      valueType: "text",
    },
    {
      patchId: "7.41e",
      mechanicFormulaId: "max_damage_universal",
      value: "(base_universal * damage_per_universal) + base_max_attack_damage",
      valueType: "text",
    },
    {
      patchId: "7.41e",
      mechanicFormulaId: "health_regen",
      value: "(base_strength * health_regen_per_strength) + base_health_regen",
      valueType: "text",
    },
    {
      patchId: "7.41e",
      mechanicFormulaId: "health",
      value: "(base_strength * health_per_strength) + base_hero_health",
      valueType: "text",
    },
    {
      patchId: "7.41e",
      mechanicFormulaId: "magic_resistance",
      value:
        "((base_intelligence / 10) * magic_resist_per_ten_intelligence) / 100 + base_magic_resistance",
      valueType: "text",
    },
    {
      patchId: "7.41e",
      mechanicFormulaId: "mana_regen",
      value:
        "(base_intelligence * mana_regen_per_intelligence) + base_mana_regen",
      valueType: "text",
    },
    {
      patchId: "7.41e",
      mechanicFormulaId: "mana",
      value: "(base_intelligence * mana_per_intelligence) + base_hero_mana",
      valueType: "text",
    },
    {
      patchId: "7.41e",
      mechanicFormulaId: "physical_resistance",
      value:
        "1 - (1 - (armor_physical_damage_factor * total_armor) / (1 + armor_physical_damage_factor * total_armor))",
      valueType: "text",
    },
    {
      patchId: "7.41e",
      mechanicFormulaId: "time_between_attacks",
      value: "1 / attack_rate",
      valueType: "text",
    },
  ];

  const insertLogsDota2MechanicConstantsValue: LogsInsertType[] = [
    {
      title: "Added Dota 2 mechanics formulas value",
      type: "dota-2",
      content: [
        {
          type: "text",
          value: "Added",
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
        {
          type: "text",
          value: "value",
        },
      ],
    },
  ];

  await db.insert(dota2MechanicsFormulasValue).values(mechanicsFormulasValue);
  await db.insert(logs).values(insertLogsDota2MechanicConstantsValue);

  console.log("ADD MECHANICS FORMULAS VALUE FOR DOTA 2");
  process.exit(0);
}

await mehcanicsFormulasValue();
