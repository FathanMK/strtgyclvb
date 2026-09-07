"use client";

export default function ErrorPage() {
  return (
    <main className="flex flex-col h-screen">
      <section className="p-4 flex gap-1">
        <a href="/" className="hover-link uppercase font-bold">
          [STRTGYCLVB]
        </a>
      </section>
      <section className="p-4 flex-1 flex flex-col items-center justify-center gap-2">
        <h1>SORRY, SOMETHING WENT WRONG!</h1>
        <a href="/" className="hover-link font-bold cursor-pointer">
          [HOME]
        </a>
      </section>
      <footer className="p-4 text-neutral-500">
        <p className="text-sm">2026 - STRTGYCLVB</p>
      </footer>
    </main>
  );
}
