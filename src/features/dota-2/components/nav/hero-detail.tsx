"use client";

import { cn } from "cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function HeroDetailNav({
  heroId,
  heroAbilitiesName,
}: {
  heroId: string;
  heroAbilitiesName?: { name: string | null }[];
}) {
  const url = usePathname();

  // const firstAbility = heroAbilitiesName
  //   .at(0)
  //   ?.name?.toLowerCase()
  //   .replace(/\s/g, "-");

  return (
    <div className="flex gap-x-6 overflow-x-scroll">
      <Link
        className={cn(
          "hover-link shrink-0 font-black",
          url.includes("attributes") && "active-link",
        )}
        href={`/dota-2/heroes/${heroId}/attributes`}
      >
        [ATTRIBUTES]
      </Link>
      {/* <Link
        className="group flex items-center gap-2"
        href={`/dota-2/heroes/${heroId}/abilities?name=${firstAbility}`}
      >
        <p>01</p>
        <p
          className={cn(
            "group-hover-link font-bold",
            url.includes("abilities") && "active-link",
          )}
        >
          [ABILITIES]
        </p>
      </Link>
      <Link
        className="group flex items-center gap-2"
        href={`/dota-2/heroes/${heroId}/meta-stats`}
      >
        <p>02</p>
        <p
          className={cn(
            "group-hover-link font-bold",
            url.includes("meta-stats") && "active-link",
          )}
        >
          [META STATS]
        </p>
      </Link> */}
    </div>
  );
}
