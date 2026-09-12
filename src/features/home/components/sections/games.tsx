import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export async function GamesSection() {
  return (
    <section className="p-6">
      <h2>GAMES</h2>
      <Separator className="mb-3 mt-1 bg-neutral-800" />
      <div>
        {games.map((game) => {
          const href = `/${game.gameId}`;
          return (
            <Link
              key={game.id}
              href={href}
              className="hover-link font-black block w-fit"
            >
              [{game.name}]
            </Link>
          );
        })}
      </div>
    </section>
  );
}

const games = [
  {
    id: 0,
    gameId: "dota-2",
    name: "Dota 2",
  },
];
