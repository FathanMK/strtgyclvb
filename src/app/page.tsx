import { Footer, Header } from "@/components/shared";
import { GamesSection } from "@/features/home/components/games-section";
import { StatusSection } from "@/features/home/components/status-section";

export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto">
      <Header />
      <GamesSection />
      <StatusSection />
      <Footer />
    </main>
  );
}
