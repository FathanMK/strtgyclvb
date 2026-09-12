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
        {mechanicsConstants.map((item) => {
          const href = `/dota-2/mechanics-formulas/${item.mechanicFormulaId.replace(/\_/g, "-")}`;
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
