import { getDbAsync } from "@/db";
import {
  dota2MechanicsConstantsToFormulas,
  Dota2MechanicsConstantsToFormulasInsertType,
  logs,
  LogsInsertType,
} from "@/db/schemas";

async function mechanicsConstantsToFormulas() {
  const db = await getDbAsync();
  const mechanicsConstantsToFormulas: Dota2MechanicsConstantsToFormulasInsertType[] =
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

  const logsMechanicsConstantsToFormulas: LogsInsertType[] = [
    {
      title: "Added Dota 2 Mechanics Constants to Formulas",
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
          value: "MECHANICS CONSTANTS TO FORMULAS RELATION",
        },
      ],
    },
  ];

  await db
    .insert(dota2MechanicsConstantsToFormulas)
    .values(mechanicsConstantsToFormulas);
  await db.insert(logs).values(logsMechanicsConstantsToFormulas);

  console.log("ADD MECHANICS CONSTANTS TO FORMULAS FOR DOTA 2");
  process.exit(0);
}

await mechanicsConstantsToFormulas();
