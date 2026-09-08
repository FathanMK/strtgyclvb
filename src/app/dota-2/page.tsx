import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { DirectoriesSection } from "@/features/dota-2/components/sections/directories";
import { StatusSection } from "@/features/dota-2/components/sections/status";
import { BreadcrumbItemType } from "@/types/breadcrumb-item-type";

export default function Dota2Page() {
  return (
    <main className="main-container">
      <Header breadcrumbs={breadcrumbs} />
      <DirectoriesSection />
      <StatusSection />
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
    type: "text",
    value: "DOTA 2",
  },
];
