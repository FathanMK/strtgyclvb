import { getDbAsync } from "@/db";
import {
  dota2MechanicsConstantsValue,
  Dota2MechanicsConstantsValueInsertType,
} from "../schemas";
import { logs, LogsInsertType } from "@/db/schemas";

async function mechanicsConstantsValue() {
  const db = await getDbAsync();
  const mechanicsConstantsValue: Dota2MechanicsConstantsValueInsertType[] = [
    {
      mechanicConstantId: "base_hero_health",
      patchId: "7.41e",
      value: "120",
      valueType: "number",
    },
    {
      mechanicConstantId: "health_per_strength",
      patchId: "7.41e",
      value: "22",
      valueType: "number",
    },
    {
      mechanicConstantId: "health_regen_per_strength",
      patchId: "7.41e",
      value: "0.1",
      valueType: "number",
    },
    {
      mechanicConstantId: "base_hero_mana",
      patchId: "7.41e",
      value: "75",
      valueType: "number",
    },
    {
      mechanicConstantId: "mana_per_intelligence",
      patchId: "7.41e",
      value: "12",
      valueType: "number",
    },
    {
      mechanicConstantId: "mana_regen_per_intelligence",
      patchId: "7.41e",
      value: "0.05",
      valueType: "number",
    },
    {
      mechanicConstantId: "armor_per_agility",
      patchId: "7.41e",
      value: "0.167",
      valueType: "number",
    },
    {
      mechanicConstantId: "armor_physical_damage_factor",
      patchId: "7.41e",
      value: "0.06",
      valueType: "number",
    },
    {
      mechanicConstantId: "magic_resist_per_ten_intelligence",
      patchId: "7.41e",
      value: "1",
      valueType: "number",
    },
    {
      mechanicConstantId: "attack_speed_per_agility",
      patchId: "7.41e",
      value: "1",
      valueType: "number",
    },
    {
      mechanicConstantId: "damage_per_strength",
      patchId: "7.41e",
      value: "1",
      valueType: "number",
    },
    {
      mechanicConstantId: "damage_per_agility",
      patchId: "7.41e",
      value: "1",
      valueType: "number",
    },
    {
      mechanicConstantId: "damage_per_intelligence",
      patchId: "7.41e",
      value: "1",
      valueType: "number",
    },
    {
      mechanicConstantId: "damage_per_universal",
      patchId: "7.41e",
      value: "0.45",
      valueType: "number",
    },
  ];

  const logsMechanicsConstantsValue: LogsInsertType[] = [
    {
      title: "Added Dota 2 mechanic constants value",
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
          href: "/games/dota-2/mechanic-constants",
          type: "link",
          value: "mechanic constants",
        },
        {
          type: "text",
          value: "value",
        },
      ],
    },
  ];

  await db.insert(dota2MechanicsConstantsValue).values(mechanicsConstantsValue);
  await db.insert(logs).values(logsMechanicsConstantsValue);

  console.log("ADD MECHANIC CONSTANTS VALUE FOR DOTA 2");
  process.exit(0);
}

await mechanicsConstantsValue();
