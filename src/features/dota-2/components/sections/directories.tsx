import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export function DirectoriesSection() {
  return (
    <section className="px-6 py-6">
      <h2>DIRECTORIES</h2>
      <Separator className="mb-3 mt-1 bg-neutral-800" />
      <div>
        {directories.map((item) => {
          const href = `/dota-2/${item.id}`;
          return (
            <Link
              key={item.id}
              href={href}
              className="hover-link font-black block w-fit"
            >
              [{item.name}]
            </Link>
          );
        })}
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
    id: "mechanics",
    name: "MECHANICS",
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
