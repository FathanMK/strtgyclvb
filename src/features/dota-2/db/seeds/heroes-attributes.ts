import { logs, LogsInsertType } from "@/db/schemas";
import {
  dota2HeroesAttributes,
  Dota2HeroesAttributesInsertType,
} from "../schemas/heroes/heroes-attributes";
import { db } from "@/db";

async function heroesAttributes() {
  const addHeroesAttributes: Dota2HeroesAttributesInsertType[] = [
    {
      attributeId: "primary_attribute",
      name: "Primary Attribute",
      descriptions: [
        "Every hero has a primary attribute, which modifies their main attack damage. A hero's primary attribute heavily impacts and commonly even defines the hero's role and how they are played.",
      ],
      category: "overview",
    },
    {
      attributeId: "attack_type",
      name: "Attack Type",
      descriptions: [
        "How a unit's basic attack deals damage to different targets like Hero, Creep, or Building",
      ],
      category: "overview",
    },
    {
      attributeId: "base_strength",
      name: "Base Strength",
      descriptions: [
        "A hero's starting attribute value at level 1 before adding items, bonuses, or level growth. It determines a character's initial health pool, health regen, and physical attack damage if strength is their primary attribute.",
      ],
      category: "strength",
    },
    {
      attributeId: "gain_strength",
      name: "Gain Strength",
      descriptions: [
        "The amount of the Strength attribute a hero automatically receives each time they increase their level.",
      ],
      category: "strength",
    },
    {
      attributeId: "base_agility",
      name: "Base Agility",
      descriptions: [
        "A hero's starting attribute value at level 1 before adding items, bonuses, or level growth. It determines a character's attack speed, armor, and physical attack damage if strength is their primary attribute.",
      ],
      category: "agility",
    },
    {
      attributeId: "gain_agility",
      name: "Gain Agility",
      descriptions: [
        "The amount of the agility attribute a hero receives each time they increase in level.",
      ],
      category: "agility",
    },
    {
      attributeId: "base_intelligence",
      name: "Base Intelligence",
      descriptions: [
        "A hero's starting attribute value at level 1 before adding items, bonuses, or level growth. It determines a character's initial mana pool, mana regen, magic resistance and physical attack damage if strength is their primary attribute.",
      ],
      category: "intelligence",
    },
    {
      attributeId: "gain_intelligence",
      name: "Gain Intelligence",
      descriptions: [
        "The amount of the intelligence attribute a hero receives each time they increase in level.",
      ],
      category: "intelligence",
    },
    {
      attributeId: "base_health_regeneration",
      name: "Base Health Regeneration",
      descriptions: [
        "A static, inherent stat that determines how many hit points a hero recovers per second before factoring in multipliers like Strength or items.",
      ],
      category: "regeneration",
    },
    {
      attributeId: "base_mana_regeneration",
      name: "Base Mana Regeneration",
      descriptions: [
        "A static, inherent stat that determines how many mana points a hero recovers per second before factoring in multipliers like Intelligence or items.",
      ],
      category: "regeneration",
    },
    {
      attributeId: "base_armor",
      name: "Base Armor",
      descriptions: [
        "A hero's inherent physical defense stat derived from starting values and Agility growth, distinct from item bonuses. It scales physical survivability and affects illusions directly.",
      ],
      category: "defensive",
    },
    {
      attributeId: "base_min_attack_damage",
      name: "Base Minimum Attack Damage",
      descriptions: [
        "The lowest possible physical damage value a hero can deal with a normal right-click before adding attribute bonuses, items, or enemy armor reductions.",
      ],
      category: "offensive",
    },
    {
      attributeId: "base_max_attack_damage",
      name: "Base Maximum Attack Damage",
      descriptions: [
        "The highest possible value in a hero's default damage range. When you attack, the game picks a random number between your minimum and maximum base damage to decide your hit.",
      ],
      category: "offensive",
    },
    {
      attributeId: "base_magic_resistance",
      name: "Base Magic Resistance",
      descriptions: [
        "An innate defensive stat that reduces incoming magical damage by a default 25% for most heroes, scaling with Intelligence and interacting multiplicatively with bonus resistance items.",
      ],
      category: "defensive",
    },
    {
      attributeId: "base_attack_range",
      name: "Base Attack Range",
      descriptions: [
        "The standard distance (measured in units) from which a hero or unit can launch a basic attack.",
      ],
      category: "offensive",
    },
    {
      attributeId: "base_attack_time",
      name: "Base Attack Time",
      descriptions: [
        "The default time in seconds a unit takes between attacks with zero attack speed bonuses",
      ],
      category: "offensive",
    },
    {
      attributeId: "base_attack_speed",
      name: "Base Attack Speed",
      descriptions: [
        "The starting numerical value (traditionally 100) that forms the baseline of a hero's attack frequency, combining with agility and item bonuses to determine total attacks per second.",
      ],
      category: "offensive",
    },
    {
      attributeId: "base_attack_animation_foreswing",
      name: "Base Attack Animation Foreswing",
      descriptions: [
        "The time it takes for a hero's physical attack animation to complete before the damage instance or projectile is launched.",
      ],
      category: "offensive",
    },
    {
      attributeId: "base_attack_animation_backswing",
      name: "Base Attack Animation Backswing",
      descriptions: [
        "The duration a hero spends completing their visual attack animation after the projectile is launched or the melee damage is dealt.",
      ],
      category: "offensive",
    },
    {
      attributeId: "base_movement_speed",
      name: "Base Movement Speed",
      descriptions: [
        "A unit's raw, unbuffed travel distance per second in before accounting for items, auras, or abilities.",
      ],
      category: "mobility",
    },
    {
      attributeId: "base_turn_rate",
      name: "Base Turn Rate",
      descriptions: [
        "The inherent speed at which a hero or unit rotates its model to face a new direction.",
      ],
      category: "mobility",
    },
    {
      attributeId: "base_collision_size",
      name: "Base Collision Size",
      descriptions: [
        "The physical radius of a hero or unit that determines how it interacts with the map environment, trees, and other units.",
      ],
      category: "other",
    },
    {
      attributeId: "base_bound_radius",
      name: "Base Bound Radius",
      descriptions: [
        "A unit's absolute spatial footprint for targeting and range interactions.",
      ],
      category: "other",
    },
    {
      attributeId: "base_vision_range_daytime",
      name: "Base Vision Range Daytime",
      descriptions: [
        "Determines how far a hero can see into the fog of war during the day cycle without external modifiers.",
      ],
      category: "other",
    },
    {
      attributeId: "base_vision_range_nighttime",
      name: "Base Vision Range Nighttime",
      descriptions: [
        "Determines how far a hero can see into the fog of war during the night cycle without external modifiers.",
      ],
      category: "other",
    },
    {
      attributeId: "gib_type",
      name: "Gib Type",
      descriptions: [
        "A hidden game file attribute that customizes visual death animations, special effects, and color tints for specific heroes.",
      ],
      category: "other",
    },
    {
      attributeId: "release_date",
      name: "Release Date",
      descriptions: [
        "The date the hero was officially released and made available in Dota.",
      ],
      category: "other",
    },
  ];

  const logsAddHeroesAttributes: LogsInsertType[] = [
    {
      title: "Added Dota 2 heroes attributes",
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
          href: "/games/dota-2/heroes-attributes",
          type: "link",
          value: "Heroes Attributes",
        },
      ],
    },
  ];

  await db.insert(dota2HeroesAttributes).values(addHeroesAttributes);
  await db.insert(logs).values(logsAddHeroesAttributes);

  console.log("ADD DOTA 2 HEROES ATTRIBUTES");
  process.exit(0);
}

heroesAttributes();
