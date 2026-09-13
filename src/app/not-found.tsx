import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col h-screen main-container">
      <Header />
      <section className="p-4 flex-1 flex flex-col gap-2 items-center justify-center">
        <p>404 - PAGE NOT FOUND</p>
        <Link href="/" className="hover-link font-black">
          [HOME]
        </Link>
      </section>
      <Footer />
    </main>
  );
}
