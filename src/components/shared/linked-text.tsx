"use client";

import { cn } from "cn";
import { Dispatch, ReactNode, SetStateAction } from "react";

type LinkedTextPropsType = {
  children: ReactNode;
  id: string;
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
};

export function LinkedText({
  children,
  id,
  active,
  setActive,
}: LinkedTextPropsType) {
  return (
    <span
      onPointerEnter={() => setActive(id)}
      onPointerLeave={() => setActive("")}
      onPointerDown={() => setActive(id)}
      className={cn(
        "font-black w-fit",
        active === id && "bg-neutral-50 text-neutral-950",
      )}
    >
      {children}
    </span>
  );
}
