import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { getMechanicsFormulas } from "../../queries/get-mechanics-formulas";

export async function MechanicsFormulasSection() {
  const mechanicsConstants = await getMechanicsFormulas();
  return (
    <section className="px-6 py-6">
      <h2>MECHANICS FORMULAS</h2>
      <Separator className="mb-3 mt-1 bg-neutral-800" />
      <div>
        {mechanicsConstants.map((item) => (
          <Link
            key={item.id}
            href={`/dota-2/mechanics-formulas/${item.mechanicFormulaId.replace(/\_/g, "-")}`}
            className="group flex items-center gap-2 w-fit"
          >
            <div className="group-hover-link font-bold">[{item.name}]</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
