import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { LogsSection } from "@/features/logs/components/sections/logs";
import { BreadcrumbItemType } from "@/types/breadcrumb-item-type";

export default function LogsPage() {
  return (
    <main className="main-container">
      <Header breadcrumbs={breadcrumbs} />
      <LogsSection />
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
    id: "logs",
    type: "text",
    value: "LOGS",
  },
];
