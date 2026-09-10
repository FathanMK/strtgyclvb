import { Separator } from "@/components/ui/separator";
import { MechanicsConstantsIdType } from "../../types/mechanics-constants-id-type";
import { getMechanicConstant } from "../../queries/get-mechanic-constant";
import Link from "next/link";

export async function MechanicsConstantsDetailSection({
  mechanicConstantId,
}: {
  mechanicConstantId: string;
}) {
  const formattedMechanicConstantId = mechanicConstantId.replace(
    /\-/g,
    "_",
  ) as MechanicsConstantsIdType;

  const data = await getMechanicConstant(formattedMechanicConstantId);

  return (
    <section className="space-y-6 m-6">
      <div>
        <h1>{data?.name}</h1>
        <Separator className="my-1" />
        <div>
          {data?.descriptions?.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>
      </div>
      <div>
        <h2>FORMULAS</h2>
        <Separator className="my-1" />
        <div>
          {data?.formulas.map((item) => (
            <Link
              key={item.id}
              href={`/dota-2/mechanics-formulas/${item.mechanicFormulaId.replace(/\_/g, "-")}`}
              className="group flex items-center gap-2 w-fit"
            >
              <div className="group-hover-link font-bold">[{item.name}]</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
