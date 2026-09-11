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
  dota2MechanicsConstants: {
    constant: r.one.dota2MechanicsConstantsValue({
      from: r.dota2MechanicsConstants.mechanicConstantId,
      to: r.dota2MechanicsConstantsValue.mechanicConstantId,
    }),
    formulas: r.many.dota2MechanicsFormulas({
      from: r.dota2MechanicsConstants.mechanicConstantId.through(
        r.dota2MechanicsConstantsMechanicsFormulas.mechanicConstantId,
      ),
      to: r.dota2MechanicsFormulas.mechanicFormulaId.through(
        r.dota2MechanicsConstantsMechanicsFormulas.mechanicFormulaId,
      ),
    }),
  },
  dota2HeroesAttributes: {
    formulas: r.many.dota2MechanicsFormulas({
      from: r.dota2HeroesAttributes.attributeId.through(
        r.dota2HeroesAttributesMechanicsFormulas.attributeId,
      ),
      to: r.dota2MechanicsFormulas.mechanicFormulaId.through(
        r.dota2HeroesAttributesMechanicsFormulas.mechanicFormulaId,
      ),
    }),
  },
  dota2MechanicsFormulas: {
    formula: r.one.dota2MechanicsFormulasValue({
      from: r.dota2MechanicsFormulas.mechanicFormulaId,
      to: r.dota2MechanicsFormulasValue.mechanicFormulaId,
    }),
    constants: r.many.dota2MechanicsConstants(),
    heroesAttributes: r.many.dota2HeroesAttributes(),
  },
}));

export default relations;
