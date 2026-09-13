import { Separator } from "@/components/ui/separator";

export function HeroesAttributesDetailStats() {
  return (
    <div>
      <h2>STATS</h2>
      <Separator className="my-1" />
      <div>
        <div className="flex bg-neutral-900 p-4">
          <p className="basis-1/2 shrink-0">TOTAL MELEE HEROES</p>
          <p className="font-black">60</p>
        </div>
        <div className="flex bg-neutral-800 p-4">
          <p className="basis-1/2 shrink-0">TOTAL RANGED HEROES</p>
          <p className="font-black">60</p>
        </div>
      </div>
    </div>
  );
}
