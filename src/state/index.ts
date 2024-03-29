import { atom, selector } from "recoil";
import { icons } from "@phosphor-icons/core";
import * as IconLibrary from "@phosphor-icons/react";
import { Icon, IconWeight } from "@phosphor-icons/react";

import { duplicateArray, sampleArrayItems } from "../lib";

const controlIcons: Icon[] = sampleArrayItems(
  icons.map(
    ({ pascal_name }) =>
      IconLibrary[pascal_name as keyof typeof IconLibrary] as Icon
  ),
  80
);

export const textInputAtom = atom<string>({
  key: "textInputAtom",
  default: "",
});

export const fileInputAtom = atom<string[]>({
  key: "fileInputAtom",
  default: [],
});

export const iconWeightAtom = atom<IconWeight>({
  key: "iconWeightAtom",
  default: "regular",
});

export const iconSizeAtom = atom<number>({
  key: "iconSizeAtom",
  default: 32,
});

export const useControlSetAtom = atom<boolean>({
  key: "useControlSetAtom",
  default: true,
});

export const shuffleAtom = atom<number>({
  key: "shuffleAtom",
  default: 0,
});

type DisplayIcon = Icon | { name: string; svgString: string };

export const iconSetSelector = selector<DisplayIcon[]>({
  key: "iconSetSelector",
  get: ({ get }) => {
    const Q = get(shuffleAtom);
    void Q;
    const showControls = get(useControlSetAtom);
    const textInput = get(textInputAtom);
    const fileInput = get(fileInputAtom);
    const size = get(iconSizeAtom);

    const copies = Math.floor(1.9 + 40 * Math.exp(-0.0939 * size));

    let testIcons: DisplayIcon[] = [];
    if (textInput) {
      testIcons = testIcons.concat(
        new Array(10).fill({ name: "textInput", svgString: textInput })
      );
    }

    if (fileInput) {
      const newIcons = fileInput.map((file, index) => ({
        name: `fileInput-${index}`,
        svgString: file,
      }));

      testIcons = testIcons.concat(new Array(10).fill(newIcons).flat());
    }

    if (showControls) testIcons = testIcons.concat(controlIcons);
    if (copies > 1) testIcons = duplicateArray(testIcons, copies);

    for (let i = testIcons.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = testIcons[i];
      testIcons[i] = testIcons[j];
      testIcons[j] = temp;
    }

    return testIcons;
  },
});

export const customPreviewAtom = atom<DisplayIcon | null>({
  key: "customPreviewIcon",
  default: null,
});
