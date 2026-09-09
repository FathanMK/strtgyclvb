import Link from "next/link";

export async function GamesSection() {
  return (
    <section className="m-6 space-y-2">
      <h2 className="font-bold text-lg">GAMES</h2>
      <div>
        {games.map((game) => (
          <Link
            key={game.id}
            className="group flex items-center gap-2"
            href={`/${game.gameId}`}
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
