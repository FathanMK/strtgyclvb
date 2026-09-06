import Link from "next/link";

export async function GamesSection() {
  return (
    <section className="m-6 space-y-2">
      <h2 className="font-bold">GAMES</h2>
      <div className="flex flex-wrap gap-x-6 gap-y-1 uppercase">
        {games.map((game) => (
          <Link
            key={game.id}
            className="group flex items-center gap-2"
            href={`/games/${game.gameId}`}
          >
            <p>{game.id?.toString().padStart(2, "0")}</p>
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
