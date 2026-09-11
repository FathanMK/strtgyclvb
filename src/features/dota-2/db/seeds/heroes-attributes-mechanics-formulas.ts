import { getDbAsync } from "@/db";
import {
  dota2HeroesAttributesMechanicsFormulas,
  Dota2HeroesAttributesMechanicsFormulasInsertType,
  logs,
  LogsInsertType,
} from "@/db/schemas";

async function heroesAttributesMechanicsFormulas() {
  const db = await getDbAsync();
  const heroesAttributesMechanicsFormulas: Dota2HeroesAttributesMechanicsFormulasInsertType[] =
    [
      {
        mechanicFormulaId: "armor",
        attributeId: "base_agility",
      },
      {
        mechanicFormulaId: "armor",
        attributeId: "base_armor",
      },
      {
        mechanicFormulaId: "attack_rate",
        attributeId: "base_attack_speed",
      },
      {
        mechanicFormulaId: "attack_rate",
        attributeId: "base_attack_time",
      },
      {
        mechanicFormulaId: "attack_speed",
        attributeId: "base_agility",
      },
      {
        mechanicFormulaId: "attack_speed",
        attributeId: "base_attack_speed",
      },
      {
        mechanicFormulaId: "base_universal",
        attributeId: "base_strength",
      },
      {
        mechanicFormulaId: "base_universal",
        attributeId: "base_agility",
      },
      {
        mechanicFormulaId: "base_universal",
        attributeId: "base_intelligence",
      },
      {
        mechanicFormulaId: "gain_universal",
        attributeId: "gain_strength",
      },
      {
        mechanicFormulaId: "gain_universal",
        attributeId: "gain_agility",
      },
      {
        mechanicFormulaId: "gain_universal",
        attributeId: "gain_intelligence",
      },
      {
        mechanicFormulaId: "min_damage_strength",
        attributeId: "base_strength",
      },
      {
        mechanicFormulaId: "min_damage_strength",
        attributeId: "base_min_attack_damage",
      },
      {
        mechanicFormulaId: "max_damage_strength",
        attributeId: "base_strength",
      },
      {
        mechanicFormulaId: "max_damage_strength",
        attributeId: "base_min_attack_damage",
      },
      {
        mechanicFormulaId: "min_damage_agility",
        attributeId: "base_agility",
      },
      {
        mechanicFormulaId: "min_damage_agility",
        attributeId: "base_min_attack_damage",
      },
      {
        mechanicFormulaId: "max_damage_agility",
        attributeId: "base_agility",
      },
      {
        mechanicFormulaId: "max_damage_agility",
        attributeId: "base_min_attack_damage",
      },
      {
        mechanicFormulaId: "min_damage_intelligence",
        attributeId: "base_intelligence",
      },
      {
        mechanicFormulaId: "min_damage_intelligence",
        attributeId: "base_min_attack_damage",
      },
      {
        mechanicFormulaId: "max_damage_intelligence",
        attributeId: "base_intelligence",
      },
      {
        mechanicFormulaId: "max_damage_intelligence",
        attributeId: "base_min_attack_damage",
      },
      {
        mechanicFormulaId: "health_regen",
        attributeId: "base_strength",
      },
      {
        mechanicFormulaId: "health_regen",
        attributeId: "base_health_regeneration",
      },
      {
        mechanicFormulaId: "health",
        attributeId: "base_strength",
      },
      {
        mechanicFormulaId: "magic_resistance",
        attributeId: "base_intelligence",
      },
      {
        mechanicFormulaId: "magic_resistance",
        attributeId: "base_magic_resistance",
      },
      {
        mechanicFormulaId: "mana_regen",
        attributeId: "base_intelligence",
      },
      {
        mechanicFormulaId: "mana_regen",
        attributeId: "base_mana_regeneration",
      },
      {
        mechanicFormulaId: "mana",
        attributeId: "base_intelligence",
      },
    ];

  const logsHeroesAttributesMechanicsFormulas: LogsInsertType[] = [
    {
      title: "Added Dota 2 Heroes Attributes Formulas Value",
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
          value: "HEROES ATTRIBUTES MECHANICS FORMULAS VALUE",
        },
      ],
    },
  ];

  await db
    .insert(dota2HeroesAttributesMechanicsFormulas)
    .values(heroesAttributesMechanicsFormulas);
  await db.insert(logs).values(logsHeroesAttributesMechanicsFormulas);

  console.log("ADD HEROES ATTRIBUTES TO MECHANICS FORMULAS FOR DOTA 2");
  process.exit(0);
}

await heroesAttributesMechanicsFormulas();
