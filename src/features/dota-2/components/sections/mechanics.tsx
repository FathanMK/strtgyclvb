import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { getMechanics } from "../../queries/get-mechanics";

export async function MechanicsSection() {
  const mechanics = await getMechanics();
  return (
    <section className="px-6 py-6">
      <h2>MECHANICS</h2>
      <Separator className="mb-3 mt-1 bg-neutral-800" />
      <div>
        {mechanics.map((item) => {
          const href = `/dota-2/mechanics/${item.mechanicId.replace(/\_/g, "-")}`;
          return (
            <Link
              key={item.id}
              href={href}
              className="hover-link font-black w-fit"
            >
              [{item.name}]
            </Link>
          );
        })}
      </div>
    </section>
  );
}
