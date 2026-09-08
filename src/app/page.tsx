import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { GamesSection } from "@/features/home/components/sections/games";
import { StatusSection } from "@/features/home/components/sections/status";

export default function HomePage() {
  return (
    <main className="main-container">
      <Header />
      <GamesSection />
      <StatusSection />
      <Footer />
    </main>
  );
}
