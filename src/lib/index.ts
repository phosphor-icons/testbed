import { Icon } from "phosphor-react";

export type Weight = "thin" | "light" | "regular" | "bold" | "fill" | "duotone";

export const isIcon = (candidate: any): candidate is Icon => {
  return !!candidate.displayName;
};
