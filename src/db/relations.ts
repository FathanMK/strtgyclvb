import { defineRelations } from "drizzle-orm";
import * as schemas from "./schemas";

const relations = defineRelations(schemas, (r) => ({
  dota2HeroesAttributesValue: {
    patch: r.one.dota2Patches({
      from: r.dota2HeroesAttributesValue.patchId,
      to: r.dota2Patches.patchId,
    }),
    hero: r.one.dota2Heroes({
      from: r.dota2HeroesAttributesValue.heroId,
      to: r.dota2Heroes.heroId,
    }),
    attribute: r.one.dota2HeroesAttributes({
      from: r.dota2HeroesAttributesValue.attributeId,
      to: r.dota2HeroesAttributes.attributeId,
    }),
  },
}));

export default relations;
