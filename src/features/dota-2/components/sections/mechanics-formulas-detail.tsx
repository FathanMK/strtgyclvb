import { Separator } from "@/components/ui/separator";
import { MechanicsFormulasIdType } from "../../types/mechanics-formulas-id-type";
import { getMechanicFormula } from "../../queries/get-mechanic-formula";

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
        <h2>CONSTANTS</h2>
        <Separator className="my-1" />
        <div></div>
      </div>
    </section>
  );
}
