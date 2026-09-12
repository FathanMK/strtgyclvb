import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { MechanicsDetailSection } from "@/features/dota-2/components/sections/mechanics-detail";
import { BreadcrumbItemType } from "@/types/breadcrumb-item-type";

type MechanicDetailPageProps = {
  params: Promise<{ mechanicId: string }>;
};

export default async function MechanicDetailPage({
  params,
}: MechanicDetailPageProps) {
  const { mechanicId } = await params;

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
      href: "/dota-2/mechanics",
      value: "MECHANICS",
    },
    {
      id: mechanicId,
      type: "text",
      value: mechanicId.replace(/\-/g, " "),
    },
  ];

  return (
    <main className="main-container">
      <Header breadcrumbs={breadcrumbs} />
      <MechanicsDetailSection mechanicId={mechanicId} />
      <Footer />
    </main>
  );
}
