import { getDbAsync } from "@/db";
import { cache } from "react";
import { MechanicsFormulasIdType } from "../types/mechanics-formulas-id-type";

export const getMechanicFormula = cache(
  async (mechanicFormulaId: MechanicsFormulasIdType) => {
    const db = await getDbAsync();
    const data = await db.query.dota2MechanicsFormulas.findFirst({
      with: {
        constants: true,
        heroesAttributes: true,
        formula: {
          columns: {
            value: true,
          },
        },
      },
      where: {
        mechanicFormulaId,
      },
    });

    return data;
  },
);
