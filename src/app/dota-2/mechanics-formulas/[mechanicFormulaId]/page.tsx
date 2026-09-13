import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { BreadcrumbItemType } from "@/types/breadcrumb-item-type";
import { MechanicsFormulasDetailSection } from "@/features/dota-2/components/sections/mechanics-formulas-detail";

type MechanicsFormulasDetailPageProps = {
  params: Promise<{ mechanicFormulaId: string }>;
};

export default async function MechanicsFormulasDetailPage({
  params,
}: MechanicsFormulasDetailPageProps) {
  const { mechanicFormulaId } = await params;

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
      href: "/dota-2/mechanics-formulas",
      value: "MECHANICS FORMULAS",
    },
    {
      id: mechanicFormulaId,
      type: "text",
      value: mechanicFormulaId.replace(/\-/g, " "),
    },
  ];

  return (
    <main className="main-container">
      <Header breadcrumbs={breadcrumbs} />
      <MechanicsFormulasDetailSection mechanicFormulaId={mechanicFormulaId} />
      <Footer />
    </main>
  );
}
