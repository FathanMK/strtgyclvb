import { PageParamsType } from "@/features/dota-2/types/page-params-type";
import { redirect } from "next/navigation";

export default async function HeroDetailPage({ params }: PageParamsType) {
  const { heroId } = await params;
  redirect(`/dota-2/heroes/${heroId}/attributes`);
}
