import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { MechanicsConstantsSection } from "@/features/dota-2/components/sections/mechanics-constants";
import { BreadcrumbItemType } from "@/types/breadcrumb-item-type";

export default function Dota2MechanicsConstantsPage() {
  return (
    <main className="main-container">
      <Header breadcrumbs={breadcrumbs} />
      <MechanicsConstantsSection />
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
    value: "MECHANICS CONSTANTS",
  },
];
