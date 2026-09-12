import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { getMechanicsConstants } from "../../queries/get-mechanics-constants";

export async function MechanicsConstantsSection() {
  const mechanicsConstants = await getMechanicsConstants();
  return (
    <section className="px-6 py-6">
      <h2>MECHANICS CONSTANTS</h2>
      <Separator className="mb-3 mt-1 bg-neutral-800" />
      <div>
        {mechanicsConstants.map((item) => {
          const href = `/dota-2/mechanics-constants/${item.mechanicConstantId.replace(/\_/g, "-")}`;
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
