import { Separator } from "@/components/ui/separator";
import { MechanicsIdType } from "../../types/mechanics-id-type";
import { getMechanic } from "../../queries/get-mechanic";
import Link from "next/link";
import { MoveRight } from "lucide-react";

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
      <div>
        <h2>EXAMPLES</h2>
        <Separator className="mb-3 mt-1 bg-neutral-800" />
        <ul>
          <li>
            <p>
              - Abaddon has 22 Agility and -1 Base Armor{" "}
              <MoveRight className="size-4 inline" /> 2.67 Armor{" "}
              <MoveRight className="size-4 inline" /> 13.83% Physical Resistance
            </p>
            <p>
              - with 13.83% Physical Resistance and 50 Physical Damage{" "}
              <MoveRight className="size-4 inline" /> 43.1 Damage Taken
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h2>RULES</h2>
        <Separator className="mb-3 mt-1 bg-neutral-800" />
        <ul>
          <li>
            <p>- Armor can have negative value</p>
          </li>
          <li>
            <p>- Negative armor increase the physical damage taken</p>
          </li>
          <li>
            <p>- Armor only modifies damage affected by physical resistance</p>
          </li>
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
            <p>- DOTA 2 IN GAME TEXT</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
