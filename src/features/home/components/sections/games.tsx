import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export async function GamesSection() {
  return (
    <section className="m-6">
      <h2>GAMES</h2>
      <Separator className="my-1" />
      <div>
        {games.map((game) => (
          <Link
            key={game.id}
            className="group flex items-center gap-2 w-fit"
            href={`/${game.gameId}`}
          >
            <p className="group-hover-link font-bold">[{game.name}]</p>
          </Link>
        ))}
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
