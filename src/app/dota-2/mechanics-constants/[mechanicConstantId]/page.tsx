import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { MechanicsConstantsDetailSection } from "@/features/dota-2/components/sections/mechanics-constants-detail";
import { BreadcrumbItemType } from "@/types/breadcrumb-item-type";

type MechanicsConstantsDetailPageProps = {
  params: Promise<{ mechanicConstantId: string }>;
};

export default async function MechanicsConstantsDetailPage({
  params,
}: MechanicsConstantsDetailPageProps) {
  const { mechanicConstantId } = await params;

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
      href: "/dota-2/mechanics-constants",
      value: "MECHANICS CONSTANTS",
    },
    {
      id: mechanicConstantId,
      type: "text",
      value: mechanicConstantId.replace(/\-/g, " "),
    },
  ];

  return (
    <main className="main-container">
      <Header breadcrumbs={breadcrumbs} />
      <MechanicsConstantsDetailSection
        mechanicConstantId={mechanicConstantId}
      />
      <Footer />
    </main>
  );
}
