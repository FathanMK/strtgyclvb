import { Footer, Header } from "@/components/shared";
import { HeroesSection } from "@/features/dota-2/components/sections/heroes";
import { BreadcrumbItemType } from "@/types";

export default function Dota2HeroesPage() {
  return (
    <main className="main-container">
      <Header breadcrumbs={breadcrumbs} />
      <HeroesSection />
      <Footer />
    </main>
  );
}

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
    type: "text",
    value: "HEROES",
  },
];
