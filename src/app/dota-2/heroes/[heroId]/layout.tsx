import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { HeroDetailSection } from "@/features/dota-2/components/sections/hero-detail";
import { PageParamsType } from "@/features/dota-2/types/page-params-type";
import { BreadcrumbItemType } from "@/types/breadcrumb-item-type";
import { ReactNode } from "react";

type HeroDetailLayoutProps = PageParamsType & {
  children: ReactNode;
};

export default async function HeroDetailLayout({
  params,
  children,
}: HeroDetailLayoutProps) {
  const { heroId } = await params;
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
      href: "/dota-2/heroes",
      value: "HEROES",
    },
    {
      id: heroId,
      type: "text",
      value: heroId,
    },
  ];

  return (
    <main className="main-container">
      <Header breadcrumbs={breadcrumbs} />
      <HeroDetailSection heroId={heroId} />
      {children}
      <Footer />
    </main>
  );
}
