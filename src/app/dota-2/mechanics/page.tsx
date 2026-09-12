import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { MechanicsSection } from "@/features/dota-2/components/sections/mechanics";
import { BreadcrumbItemType } from "@/types/breadcrumb-item-type";

export default function Dota2MechanicsPage() {
  return (
    <main className="main-container">
      <Header breadcrumbs={breadcrumbs} />
      <MechanicsSection />
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
    value: "MECHANICS",
  },
];
