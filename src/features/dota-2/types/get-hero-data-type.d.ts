import { getHero } from "../queries/get-hero";

export type GetHeroDataType = Awaited<ReturnType<typeof getHero>>;
