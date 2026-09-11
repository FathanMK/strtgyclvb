import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export function DirectoriesSection() {
  return (
    <section className="px-6 py-6">
      <h2>DIRECTORIES</h2>
      <Separator className="mb-3 mt-1 bg-neutral-800" />
      <div>
        {directories.map((item) => (
          <Link
            key={item.id}
            href={`/dota-2/${item.id}`}
            className="group flex items-center gap-2 w-fit"
          >
            <div className="group-hover-link font-black">[{item.name}]</div>
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
  {
    id: "mechanics-constants",
    name: "MECHANICS CONSTANTS",
  },
  {
    id: "mechanics-formulas",
    name: "MECHANICS FORMULAS",
  },
];
