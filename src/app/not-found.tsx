import { Footer, Header } from "@/components/shared";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col h-screen main-container">
      <Header />
      <section className="p-4 flex-1 flex flex-col gap-2 items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1>404</h1>
          <p>PAGE NOT FOUND</p>
        </div>
        <Link href="/" className="hover-link cursor-pointer font-bold">
          [HOME]
        </Link>
      </section>
      <Footer />
    </main>
  );
}
