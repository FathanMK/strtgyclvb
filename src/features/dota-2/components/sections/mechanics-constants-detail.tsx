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
    <section className="px-6 py-6 space-y-12">
      <div>
        <h1>{data?.name}</h1>
        <Separator className="mb-3 mt-1 bg-neutral-800" />
        <div>
          {data?.descriptions?.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>
      </div>
      <div>
        <h2>VALUE</h2>
        <Separator className="mb-3 mt-1 bg-neutral-800" />
        <p>{data?.constant?.value}</p>
      </div>
      <div>
        <h2>FORMULAS</h2>
        <Separator className="mb-3 mt-1 bg-neutral-800" />
        <div>
          {data?.formulas.map((item) => {
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
      </div>
    </section>
  );
}
