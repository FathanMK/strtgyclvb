import { Separator } from "@/components/ui/separator";
import { MechanicsFormulasIdType } from "../../types/mechanics-formulas-id-type";
import { getMechanicFormula } from "../../queries/get-mechanic-formula";
import Link from "next/link";

export async function MechanicsFormulasDetailSection({
  mechanicFormulaId,
}: {
  mechanicFormulaId: string;
}) {
  const formattedMechanicsFormulasId = mechanicFormulaId.replace(
    /\-/g,
    "_",
  ) as MechanicsFormulasIdType;
  const data = await getMechanicFormula(formattedMechanicsFormulasId);

  const formattedConstants = data && [
    ...data.constants.map((data) => ({
      id: data.mechanicConstantId,
      type: "constant",
      name: data.name,
    })),
    ...data.heroesAttributes.map((data) => ({
      id: data.attributeId,
      type: "attribute",
      name: data.name,
    })),
  ];

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
        <h2>FORMULA</h2>
        <Separator className="mb-3 mt-1 bg-neutral-800" />
        <p>{data?.formula?.value}</p>
      </div>
      <div>
        <h2>CONSTANTS</h2>
        <Separator className="mb-3 mt-1 bg-neutral-800" />
        <div>
          {formattedConstants?.map((item) => {
            const formattedId = item.id.replace(/\_/g, "-");
            const href =
              item.type === "constant"
                ? `mechanics-constants/${formattedId}`
                : `heroes-attributes/${formattedId}`;
            return (
              <Link
                key={item.id}
                href={`/dota-2/${href}`}
                className="group flex items-center gap-2 w-fit"
              >
                <div className="group-hover-link font-bold">[{item.name}]</div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
