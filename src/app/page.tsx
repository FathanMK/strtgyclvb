import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { GamesSection } from "@/features/home/components/sections/games";

export default function HomePage() {
  return (
    <main className="main-container">
      <Header />
      <GamesSection />
      <Footer />
    </main>
  );
}
