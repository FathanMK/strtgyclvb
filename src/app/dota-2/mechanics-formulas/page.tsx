import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { MechanicsFormulasSection } from "@/features/dota-2/components/sections/mechanics-formulas";
import { BreadcrumbItemType } from "@/types/breadcrumb-item-type";

export default function Dota2MechanicsFormulasPage() {
  return (
    <main className="main-container">
      <Header breadcrumbs={breadcrumbs} />
      <MechanicsFormulasSection />
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
    value: "MECHANICS FORMULAS",
  },
];
