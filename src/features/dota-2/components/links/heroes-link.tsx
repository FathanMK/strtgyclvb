import Link from "next/link";
import { getHeroesCount } from "../../queries";

export async function HeroesLink() {
  const count = await getHeroesCount();
  return (
    <Link href="/dota-2/heroes" className="group flex items-center gap-2">
      <p>00</p>
      <div className="group-hover-link font-bold">[HEROES] ({count}/128)</div>
    </Link>
  );
}
