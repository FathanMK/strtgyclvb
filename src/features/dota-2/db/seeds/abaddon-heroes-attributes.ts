import { db } from "@/db";
import {
  dota2HeroesAttributesValue,
  Dota2HeroesAttributesValueInsertType,
  logs,
  LogsInsertType,
} from "@/db/schemas";

async function abaddonHeroesAttributes() {
  const addAbaddonAttributes: Dota2HeroesAttributesValueInsertType[] = [
    {
      patchId: "7.41e",
      heroId: "abaddon",
      attributeId: "primary_attribute",
      value: "universal",
      valueType: "text",
    },
    {
      patchId: "7.41e",
      heroId: "abaddon",
      attributeId: "attack_type",
      value: "melee",
      valueType: "text",
    },
    {
      patchId: "7.41e",
      heroId: "abaddon",
      attributeId: "release_date",
      value: "2005-11-04",
      valueType: "text",
    },
    {
      patchId: "7.41e",
      heroId: "abaddon",
      attributeId: "base_strength",
      value: "21",
      valueType: "number",
    },
    {
      patchId: "7.41e",
      heroId: "abaddon",
      attributeId: "gain_strength",
      value: "2.6",
      valueType: "number",
    },
    {
      patchId: "7.41e",
      heroId: "abaddon",
      attributeId: "base_agility",
      value: "22",
      valueType: "number",
    },
    {
      patchId: "7.41e",
      heroId: "abaddon",
      attributeId: "gain_agility",
      value: "1.5",
      valueType: "number",
    },
    {
      patchId: "7.41e",
      heroId: "abaddon",
      attributeId: "base_intelligence",
      value: "19",
      valueType: "number",
    },
    {
      patchId: "7.41e",
      heroId: "abaddon",
      attributeId: "gain_intelligence",
      value: "2",
      valueType: "number",
    },
    {
      patchId: "7.41e",
      heroId: "abaddon",
      attributeId: "base_health_regeneration",
      value: "1",
      valueType: "number",
    },
    {
      patchId: "7.41e",
      heroId: "abaddon",
      attributeId: "base_mana_regeneration",
      value: "0",
      valueType: "number",
    },
    {
      patchId: "7.41e",
      heroId: "abaddon",
      attributeId: "base_armor",
      value: "-1",
      valueType: "number",
    },
    {
      patchId: "7.41e",
      heroId: "abaddon",
      attributeId: "base_min_attack_damage",
      value: "22",
      valueType: "number",
    },
    {
      patchId: "7.41e",
      heroId: "abaddon",
      attributeId: "base_max_attack_damage",
      value: "32",
      valueType: "number",
    },
    {
      patchId: "7.41e",
      heroId: "abaddon",
      attributeId: "base_magic_resistance",
      value: "0.25",
      valueType: "number",
    },
    {
      patchId: "7.41e",
      heroId: "abaddon",
      attributeId: "base_attack_range",
      value: "150",
      valueType: "number",
    },
    {
      patchId: "7.41e",
      heroId: "abaddon",
      attributeId: "base_attack_time",
      value: "1.5",
      valueType: "number",
    },
    {
      patchId: "7.41e",
      heroId: "abaddon",
      attributeId: "base_attack_speed",
      value: "100",
      valueType: "number",
    },
    {
      patchId: "7.41e",
      heroId: "abaddon",
      attributeId: "base_attack_animation_foreswing",
      value: "0.56",
      valueType: "number",
    },
    {
      patchId: "7.41e",
      heroId: "abaddon",
      attributeId: "base_attack_animation_backswing",
      value: "0.41",
      valueType: "number",
    },
    {
      patchId: "7.41e",
      heroId: "abaddon",
      attributeId: "base_movement_speed",
      value: "325",
      valueType: "number",
    },
    {
      patchId: "7.41e",
      heroId: "abaddon",
      attributeId: "base_turn_rate",
      value: "0.6",
      valueType: "number",
    },
    {
      patchId: "7.41e",
      heroId: "abaddon",
      attributeId: "base_collision_size",
      value: "27",
      valueType: "number",
    },
    {
      patchId: "7.41e",
      heroId: "abaddon",
      attributeId: "base_bound_radius",
      value: "24",
      valueType: "number",
    },
    {
      patchId: "7.41e",
      heroId: "abaddon",
      attributeId: "base_vision_range_daytime",
      value: "1800",
      valueType: "number",
    },
    {
      patchId: "7.41e",
      heroId: "abaddon",
      attributeId: "base_vision_range_nighttime",
      value: "800",
      valueType: "number",
    },
    {
      patchId: "7.41e",
      heroId: "abaddon",
      attributeId: "gib_type",
      value: "ethereal",
      valueType: "text",
    },
  ];

  const logsAddAbaddonAttributes: LogsInsertType[] = [
    {
      title: "Added Dota 2 Abaddon attributes value",
      type: "dota-2-heroes",
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
          href: "/games/dota-2/heroes/abaddon/attributes",
          type: "link",
          value: "ABADDON ATTRIBUTES",
        },
        {
          type: "text",
          value: "attributes value",
        },
      ],
    },
  ];

  await db.insert(dota2HeroesAttributesValue).values(addAbaddonAttributes);
  await db.insert(logs).values(logsAddAbaddonAttributes);

  console.log("ADD ABADDON HEROES ATTRIBUTES");
  process.exit(0);
}

abaddonHeroesAttributes();
