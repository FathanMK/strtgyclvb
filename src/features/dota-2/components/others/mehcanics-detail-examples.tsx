import { Separator } from "@/components/ui/separator";
import { getMechanicsExamples } from "../../queries/get-mechanics-examples";
import { MechanicsIdType } from "../../types/mechanics-id-type";
import { MechanicsExamplesRenderers } from "../renderers/mechanics-examples";

export async function MechanicsDetailExamples({
  mechanicId,
}: {
  mechanicId: MechanicsIdType;
}) {
  const data = await getMechanicsExamples(mechanicId);
  if (data.length > 0)
    return (
      <div>
        <h2>EXAMPLES</h2>
        <Separator className="mb-3 mt-1 bg-neutral-800" />
        <ul>
          {data.map((mechanic) => (
            <li key={mechanic.id}>
              <MechanicsExamplesRenderers
                key={mechanic.id}
                mechanicId={mechanic.mechanicId}
                hero={mechanic.hero}
              />
            </li>
          ))}
        </ul>
      </div>
    );
}
