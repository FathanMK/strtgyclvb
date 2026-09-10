import { cache } from "react";
import {
  dota2MechanicsConstants,
  dota2MechanicsConstantsValue,
  dota2Patches,
} from "../db/schemas";
import { desc, eq } from "drizzle-orm";
import { getDbAsync } from "@/db";
import { MechanicsConstantsIdType } from "../types/mechanics-constants-id-type";

export const getMechanicsConstantsValue = cache(async () => {
  const db = await getDbAsync();
  const queryData = await db
    .selectDistinctOn([dota2MechanicsConstantsValue.mechanicConstantId])
    .from(dota2MechanicsConstantsValue)
    .leftJoin(
      dota2MechanicsConstants,
      eq(
        dota2MechanicsConstants.mechanicConstantId,
        dota2MechanicsConstantsValue.mechanicConstantId,
      ),
    )
    .leftJoin(
      dota2Patches,
      eq(dota2Patches.patchId, dota2MechanicsConstantsValue.patchId),
    )
    .orderBy(
      dota2MechanicsConstantsValue.mechanicConstantId,
      desc(dota2Patches.createdAt),
    );

  const formattedMechanicConstant = Object.fromEntries(
    queryData.map((item) => {
      return [
        item.dota_2_mechanics_constants_value.mechanicConstantId,
        {
          value: item.dota_2_mechanics_constants_value.value,
        },
      ];
    }),
  ) as Record<MechanicsConstantsIdType, { value: string }>;

  return formattedMechanicConstant;
});
