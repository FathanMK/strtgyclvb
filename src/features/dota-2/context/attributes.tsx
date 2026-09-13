"use client";

import { createContext, ReactNode, use, useContext } from "react";
import { GetHeroDataType } from "../types/get-hero-data-type";
import { GetMechanicsConstantsValueDataType } from "../types/get-mechanics-constants-value-data-type";

type AttributesContextType = {
  attributes: GetHeroDataType["attributes"];
  mechanicConstants: GetMechanicsConstantsValueDataType;
};

const AttributesContext = createContext<AttributesContextType | undefined>(
  undefined,
);

type AttributesProviderType = {
  hero: Promise<GetHeroDataType>;
  mechanicConstants: Promise<GetMechanicsConstantsValueDataType>;
  children?: ReactNode;
};

export function AttributesProvider({
  children,
  hero,
  mechanicConstants,
}: AttributesProviderType) {
  const heroData = use(hero);
  const mechanicConstantsData = use(mechanicConstants);

  return (
    <AttributesContext.Provider
      value={{
        attributes: heroData.attributes,
        mechanicConstants: mechanicConstantsData,
      }}
    >
      {children}
    </AttributesContext.Provider>
  );
}

export function useAttributesContext() {
  const context = useContext(AttributesContext);

  if (!context) {
    throw new Error(
      "useAttributesContext must be used within a AttributesProvider",
    );
  }

  return context;
}
