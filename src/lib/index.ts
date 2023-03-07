import { Icon } from "@phosphor-icons/react";

export type Weight = "thin" | "light" | "regular" | "bold" | "fill" | "duotone";

export function isIcon(candidate: any): candidate is Icon {
  return !!candidate.displayName && candidate.displayName !== "IconBase";
}

export function duplicateArray<T>(arr: T[], times: number) {
  return Array(times)
    .fill([...arr])
    .reduce((a, b) => a.concat(b));
}

export function shuffleArray<T>(arr: T[]): void {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

export function sampleArrayItems<T>(arr: T[], count: number): T[] {
  const max = arr.length;
  const sampledIndicies = new Set<number>();
  const sampledItems: T[] = [];

  for (let n = 0; n < count; n++) {
    let i: number;
    do {
      i = Math.floor(Math.random() * max);
    } while (sampledIndicies.has(i));

    sampledIndicies.add(i);
    sampledItems.push(arr[i]);
  }

  return sampledItems;
}
