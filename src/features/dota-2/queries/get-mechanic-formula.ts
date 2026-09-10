import { getDbAsync } from "@/db";
import { cache } from "react";
import { dota2MechanicsFormulas } from "../db/schemas";
import { eq } from "drizzle-orm";
import { MechanicsFormulasIdType } from "../types/mechanics-formulas-id-type";

export const getMechanicFormula = cache(
  async (mechanicFormulaId: MechanicsFormulasIdType) => {
    const db = await getDbAsync();
    const data = (
      await db
        .select()
        .from(dota2MechanicsFormulas)
        .where(eq(dota2MechanicsFormulas.mechanicFormulaId, mechanicFormulaId))
        .limit(1)
    ).at(0);

    return data;
  },
);
