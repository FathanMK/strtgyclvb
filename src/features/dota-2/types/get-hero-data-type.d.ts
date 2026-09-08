import { getHero } from "../queries";

export type GetHeroDataType = Awaited<ReturnType<typeof getHero>>;
