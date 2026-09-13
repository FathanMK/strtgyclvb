import { getDbAsync } from "@/db";
import { cache } from "react";
import { MechanicsConstantsIdType } from "../types/mechanics-constants-id-type";

export const getMechanicConstant = cache(
  async (mechanicConstantId: MechanicsConstantsIdType) => {
    const db = await getDbAsync();
    const data = await db.query.dota2MechanicsConstants.findFirst({
      with: {
        formulas: true,
        constant: {
          columns: {
            value: true,
          },
        },
      },
      where: {
        mechanicConstantId,
      },
    });

    return data;
  },
);
