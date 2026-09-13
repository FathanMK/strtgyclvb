import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { HeroesAttributesDetailSection } from "@/features/dota-2/components/sections/heroes-attributes-detail";
import { BreadcrumbItemType } from "@/types/breadcrumb-item-type";

type HeroesAttributesDetailPageProps = {
  params: Promise<{ attributeId: string }>;
};

export default async function HeroesAttributesDetailPage({
  params,
}: HeroesAttributesDetailPageProps) {
  const { attributeId } = await params;

  const breadcrumbs: BreadcrumbItemType[] = [
    {
      id: "home",
      type: "link",
      href: "/",
      value: "HOME",
    },
    {
      id: "dota-2",
      type: "link",
      href: "/dota-2",
      value: "DOTA 2",
    },
    {
      id: "heroes",
      type: "link",
      href: "/dota-2/heroes-attributes",
      value: "HEROES ATTRIBUTES",
    },
    {
      id: attributeId,
      type: "text",
      value: attributeId.replace(/\-/g, " "),
    },
  ];

  return (
    <main className="main-container">
      <Header breadcrumbs={breadcrumbs} />
      <HeroesAttributesDetailSection attributeId={attributeId} />
      <Footer />
    </main>
  );
}
