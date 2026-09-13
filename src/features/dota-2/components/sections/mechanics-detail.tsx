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
      <div>
        <h2>INTERACTIONS</h2>
        <Separator className="mb-3 mt-1 bg-neutral-800" />
        <ul>
          <li className="flex items-center gap-2">
            <Link href="#" className="hover-link font-black">
              [ARMOR REDUCTION]
            </Link>
            <MoveRight className="size-4" />
            <p>REDUCES THE TARGET'S ARMOR</p>
          </li>
        </ul>
      </div>
      <div>
        <h2>FORMULAS</h2>
        <Separator className="mb-3 mt-1 bg-neutral-800" />
        <div>
          <Link href="#" className="hover-link font-black">
            [ARMOR]
          </Link>
        </div>
      </div>
      <div>
        <h2>PATCH</h2>
        <Separator className="mb-3 mt-1 bg-neutral-800" />
        <ul>
          <li>
            <p>
              - WRITTEN WHEN{" "}
              <Link href="#" className="hover-link font-black">
                [7.41e]
              </Link>{" "}
              ACTIVE
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h2>SOURCES</h2>
        <Separator className="mb-3 mt-1 bg-neutral-800" />
        <ul>
          <li>
            <p>- LIQUIPEDIA DOTA 2 ARMOR SECTION</p>
          </li>
          <li>
            <p>- DOTA 2 IN GAME TEXTS</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
