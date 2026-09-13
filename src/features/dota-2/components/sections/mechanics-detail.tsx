import { Separator } from "@/components/ui/separator";
import { MechanicsIdType } from "../../types/mechanics-id-type";
import { getMechanic } from "../../queries/get-mechanic";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { MechanicsDetailExamples } from "../others/mehcanics-detail-examples";

export async function MechanicsDetailSection({
  mechanicId,
}: {
  mechanicId: string;
}) {
  const formattedMechanicId = mechanicId.replace(/\-/g, "_") as MechanicsIdType;
  const mechanic = await getMechanic(formattedMechanicId);

  return (
    <section className="px-6 py-6 space-y-12">
      <div>
        <h1>{mechanic?.name}</h1>
        <Separator className="mb-3 mt-1 bg-neutral-800" />
        <div>
          {mechanic?.descriptions?.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>
      </div>
      <MechanicsDetailExamples mechanicId={formattedMechanicId} />
      <div>
        <h2>RULES</h2>
        <Separator className="mb-3 mt-1 bg-neutral-800" />
        <ul>
          {mechanic?.rules?.map((rule, index) => (
            <li key={index}>
              <p>
                <span className="text-neutral-500">&gt;</span> {rule}
              </p>
            </li>
          ))}
        </ul>
      </div>
      {mechanic && mechanic.interactions.length > 0 && (
        <div>
          <h2>INTERACTIONS</h2>
          <Separator className="mb-3 mt-1 bg-neutral-800" />
          <ul>
            {mechanic.interactions.map((item) => (
              <li key={item.id} className="flex items-center gap-2">
                <Link href="#" className="hover-link font-black">
                  [{item.name}]
                </Link>
                <MoveRight className="size-4 shrink-0" />
                <p className="line-clamp-1">{item.descriptions?.at(0)}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {mechanic && mechanic.formulas.length > 0 && (
        <div>
          <h2>FORMULAS</h2>
          <Separator className="mb-3 mt-1 bg-neutral-800" />
          <ul>
            {mechanic?.formulas.map((item) => {
              const href = `/dota-2/mechanics-formulas/${item.mechanicFormulaId}`;
              return (
                <li key={item.id}>
                  <Link href={href} className="hover-link font-black">
                    [{item.name}]
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <div>
        <h2>SOURCES</h2>
        <Separator className="mb-3 mt-1 bg-neutral-800" />
        <ul>
          {mechanic?.sources?.map((source, index) => (
            <li key={index}>
              <p>
                <span className="text-neutral-500">&gt;</span> {source}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
