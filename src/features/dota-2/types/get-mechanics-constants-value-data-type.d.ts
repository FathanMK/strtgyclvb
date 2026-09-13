import { getMechanicsConstantsValue } from "../queries/get-mechanics-constants-value";

export type GetMechanicsConstantsValueDataType = Awaited<
  ReturnType<typeof getMechanicsConstantsValue>
>;
