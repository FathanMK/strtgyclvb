"use client";

export default function ErrorPage() {
  return (
    <main className="flex flex-col h-screen main-container">
      <section className="p-6 flex gap-1">
        <a href="/" className="hover-link font-black">
          [STRTGYCLVB]
        </a>
      </section>
      <section className="p-6 flex-1 flex flex-col items-center justify-center gap-2">
        <h1>SORRY, SOMETHING WENT WRONG!</h1>
        <a href="/" className="hover-link font-black cursor-pointer">
          [HOME]
        </a>
      </section>
      <footer className="p-6 text-neutral-600">
        <p className="text-sm">2026 - STRTGYCLVB</p>
      </footer>
    </main>
  );
}
