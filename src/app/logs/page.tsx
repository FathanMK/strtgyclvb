import { Footer, Header } from "@/components/shared";
import { LogsSection } from "@/features/logs/components/logs-section";
import { BreadcrumbItemType } from "@/types";

export default function LogsPage() {
  return (
    <main>
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
