import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { getMechanicsConstants } from "../../queries/get-mechanics-constants";

export async function MechanicsConstantsSection() {
  const mechanicsConstants = await getMechanicsConstants();
  return (
    <section className="m-6">
      <h2>MECHANICS CONSTANTS</h2>
      <Separator className="my-1" />
      <div>
        {mechanicsConstants.map((item) => (
          <Link
            key={item.id}
            href={`/dota-2/mechanics-constants/${item.mechanicConstantId.replace(/\_/g, "-")}`}
            className="group flex items-center gap-2 w-fit"
          >
            <div className="group-hover-link font-bold">[{item.name}]</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
