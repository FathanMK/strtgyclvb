import { getDbAsync } from "@/db";
import {
  dota2MechanicsConstantsMechanicsFormulas,
  Dota2MechanicsConstantsMechanicsFormulasInsertType,
  logs,
  LogsInsertType,
} from "@/db/schemas";

async function mechanicsConstantsMechanicsFormulas() {
  const db = await getDbAsync();
  const mechanicsConstantsMechanicsFormulas: Dota2MechanicsConstantsMechanicsFormulasInsertType[] =
    [
      {
        mechanicConstantId: "armor_per_agility",
        mechanicFormulaId: "armor",
      },
      {
        mechanicConstantId: "armor_physical_damage_factor",
        mechanicFormulaId: "physical_resistance",
      },
      {
        mechanicConstantId: "attack_speed_per_agility",
        mechanicFormulaId: "attack_speed",
      },
      {
        mechanicConstantId: "base_hero_health",
        mechanicFormulaId: "health",
      },
      {
        mechanicConstantId: "base_hero_mana",
        mechanicFormulaId: "mana",
      },
      {
        mechanicConstantId: "damage_per_agility",
        mechanicFormulaId: "min_damage_agility",
      },
      {
        mechanicConstantId: "damage_per_agility",
        mechanicFormulaId: "max_damage_agility",
      },
      {
        mechanicConstantId: "damage_per_intelligence",
        mechanicFormulaId: "min_damage_intelligence",
      },
      {
        mechanicConstantId: "damage_per_intelligence",
        mechanicFormulaId: "max_damage_intelligence",
      },
      {
        mechanicConstantId: "damage_per_strength",
        mechanicFormulaId: "min_damage_strength",
      },
      {
        mechanicConstantId: "damage_per_strength",
        mechanicFormulaId: "max_damage_strength",
      },
      {
        mechanicConstantId: "damage_per_universal",
        mechanicFormulaId: "min_damage_universal",
      },
      {
        mechanicConstantId: "damage_per_universal",
        mechanicFormulaId: "max_damage_universal",
      },
      {
        mechanicConstantId: "health_per_strength",
        mechanicFormulaId: "health",
      },
      {
        mechanicConstantId: "health_regen_per_strength",
        mechanicFormulaId: "health_regen",
      },
      {
        mechanicConstantId: "magic_resist_per_ten_intelligence",
        mechanicFormulaId: "magic_resistance",
      },
      {
        mechanicConstantId: "mana_per_intelligence",
        mechanicFormulaId: "mana",
      },
      {
        mechanicConstantId: "mana_regen_per_intelligence",
        mechanicFormulaId: "mana_regen",
      },
    ];

  const logsMechanicsConstantsMechanicsFormulas: LogsInsertType[] = [
    {
      title: "Added Dota 2 Mechanics Constants Mechanics Formulas Value",
      type: "dota-2",
      content: [
        {
          type: "text",
          value: "ADDED",
        },
        {
          href: "/games/dota-2",
          type: "link",
          value: "DOTA 2",
        },
        {
          type: "text",
          value: "MECHANICS CONSTANTS MECHANICS FORMULAS VALUE",
        },
      ],
    },
  ];

  await db
    .insert(dota2MechanicsConstantsMechanicsFormulas)
    .values(mechanicsConstantsMechanicsFormulas);
  await db.insert(logs).values(logsMechanicsConstantsMechanicsFormulas);

  console.log("ADD MECHANICS CONSTANTS MECHANICS FORMULAS FOR DOTA 2");
  process.exit(0);
}

await mechanicsConstantsMechanicsFormulas();
