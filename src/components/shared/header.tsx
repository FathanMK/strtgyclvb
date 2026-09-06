import Link from "next/link";

export function Header() {
  return (
    <header className="m-6">
      <Link href="/" className="hover-link uppercase font-bold text-lg">
        [STRTGYCLVB]
      </Link>
    </header>
  );
}
