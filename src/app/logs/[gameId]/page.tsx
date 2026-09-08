import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { LogsSection } from "@/features/logs/components/sections/logs";
import { BreadcrumbItemType } from "@/types/breadcrumb-item-type";

type LogsByGameIdPageProps = {
  params: Promise<{ gameId: string }>;
};

export default async function LogsByGameIdPage({
  params,
}: LogsByGameIdPageProps) {
  const { gameId } = await params;

  return (
    <main className="main-container">
      <Header breadcrumbs={breadcrumbs} />
      <LogsSection gameId={gameId} />
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
