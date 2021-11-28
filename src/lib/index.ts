import { Icon } from "phosphor-react";

export type Weight = "thin" | "light" | "regular" | "bold" | "fill" | "duotone";

export const isIcon = (candidate: any): candidate is Icon => {
  return !!candidate.displayName;
};

export const duplicateArray = (arr: any[], times: number) =>
  Array(times)
    .fill([...arr])
    .reduce((a, b) => a.concat(b));
