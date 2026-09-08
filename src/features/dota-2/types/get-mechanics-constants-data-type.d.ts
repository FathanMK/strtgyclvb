import { getMechanicConstants } from "../queries";

export type GetMechanicConstantsDataType = Awaited<
  ReturnType<typeof getMechanicConstants>
>;
