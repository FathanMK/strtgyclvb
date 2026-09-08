import Link from "next/link";

export function DirectoriesSection() {
  return (
    <section className="m-6 space-y-2">
      <h2 className="font-bold text-lg">DIRECTORIES</h2>
      <div className="flex flex-wrap gap-x-6 gap-y-1 flex-col sm:flex-row uppercase">
        {directories.map((item, index) => (
          <Link
            key={item.id}
            href={`/dota-2/${item.id}`}
            className="group flex items-center gap-2"
          >
            <p>{index?.toString().padStart(2, "0")}</p>
            <div className="group-hover-link font-bold">[{item.name}]</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

const directories = [
  {
    id: "heroes",
    name: "HEROES",
  },
  {
    id: "heroes-attributes",
    name: "HEROES ATTRIBUTES",
  },
];
