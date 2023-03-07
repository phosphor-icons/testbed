import React, { useMemo } from "react";
import { useRecoilValue } from "recoil";
import {
  Alarm,
  WifiMedium,
  BatteryHigh,
  Folder,
  House,
  MusicNotes,
  PencilLine,
  Smiley,
  Star,
  UserCircle,
  IconContext,
  Icon,
  Chats,
  X,
  Planet,
  Robot,
  Leaf,
  Ghost,
} from "@phosphor-icons/react";

import { isIcon } from "../../lib";
import {
  textInputAtom,
  fileInputAtom,
  iconWeightAtom,
  customPreviewAtom,
} from "../../state";
import {
  UIContainer,
  UIHeader,
  UIHeaderItems,
  UINavBar,
  UIBottomSheet,
  UIBottomSheetItem,
  UIBottomSheetHeader,
  UIChipsContiner,
  UIChip,
  UIContents,
  UICard,
  UICardText,
  IconButton,
  UICardButtons,
} from "./TestCases.styles";

const TestCases: React.FC<{}> = () => {
  const textInput = useRecoilValue(textInputAtom);
  const fileInput = useRecoilValue(fileInputAtom);
  const customPreviewIcon = useRecoilValue(customPreviewAtom);
  const weight = useRecoilValue(iconWeightAtom);

  const isControlPreview = !!customPreviewIcon && isIcon(customPreviewIcon);
  const ControlIcon = customPreviewIcon as Icon;
  const customSource =
    !!customPreviewIcon && !isIcon(customPreviewIcon)
      ? customPreviewIcon?.svgString
      : null;

  const svgStringDark = useMemo(
    () =>
      (customSource || textInput || fileInput[0] || "")
        // .replace(/(<svg.*?)(fill="#?\w+")(.*?>)/, `$1$3`)
        // .replace(/(<svg.*?(?!fill\="#*\w+").*?)>/, `$1 fill="#EBEAEC">`)
        // .replace(/#000000/g, "#EBEAEC")
        // .replace(/#000/g, "#EBEAEC")
        // .replace(/black/g, "#EBEAEC"),
        // .replace(/opacity="\d+\w+"/g, 'opacity="0.2" fill="#EBEAEC"')
        .replace(/fill="#?(?!none)(?!transparent)\w+"/g, 'fill="#EBEAEC"')
        .replace(/stroke="#?(?!none)(?!transparent)\w+"/g, 'stroke="#EBEAEC"'),
    [textInput, fileInput, customSource]
  );

  const svgStringLight = useMemo(
    () => svgStringDark.replace(/#EBEAEC/gi, "#35313D"),
    [svgStringDark]
  );

  const svgStringMid = useMemo(
    () => svgStringDark.replace(/#EBEAEC/gi, "#9a989e"),
    [svgStringDark]
  );

  return (
    <IconContext.Provider
      value={{ size: "1em", weight, color: "currentColor", mirrored: false }}
    >
      <UIContainer>
        <UIHeader>
          <span>8:01</span>
          <UIHeaderItems>
            {isControlPreview ? (
              <ControlIcon size={16} />
            ) : svgStringDark ? (
              <img
                height={16}
                width={16}
                src={`data:image/svg+xml,${encodeURIComponent(svgStringMid)}`}
                alt=""
              />
            ) : (
              <Smiley size={16} />
            )}
            <Alarm size={16} />
            <WifiMedium size={16} />
            <BatteryHigh size={16} />
          </UIHeaderItems>
        </UIHeader>
        <UIChipsContiner>
          <UIChip $active>
            {isControlPreview ? (
              <ControlIcon size={24} />
            ) : svgStringDark ? (
              <img
                height={24}
                width={24}
                src={`data:image/svg+xml,${encodeURIComponent(svgStringLight)}`}
                alt=""
              />
            ) : (
              <Smiley size={24} />
            )}
            <span>Latest</span>
          </UIChip>
          <UIChip>
            <Planet size={24} />
            <span>Space</span>
          </UIChip>
          <UIChip>
            <MusicNotes size={24} />
            <span>Music</span>
          </UIChip>
          <UIChip>
            <Robot size={24} />
            <span>Robots</span>
          </UIChip>
          <UIChip>
            <Ghost size={24} />
            <span>Spoopy</span>
          </UIChip>
        </UIChipsContiner>
        <UIContents>
          <UICard>
            <div style={{ flex: 1 }}>
              <UICardText />
              <UICardText />
              {/* <UICardText $width={208} /> */}
              <UICardText />
              <UICardText $width={88} />
            </div>
            <UICardButtons>
              <IconButton $size={48} $radius={48}>
                <Leaf size={32} />
              </IconButton>
              <IconButton $active $size={48} $radius={48}>
                {isControlPreview ? (
                  <ControlIcon size={32} />
                ) : svgStringDark ? (
                  <img
                    height={32}
                    width={32}
                    src={`data:image/svg+xml,${encodeURIComponent(
                      svgStringLight
                    )}`}
                    alt=""
                  />
                ) : (
                  <Smiley size={32} />
                )}
              </IconButton>
            </UICardButtons>
          </UICard>
        </UIContents>
        <UINavBar>
          <House size={24} weight="fill" />
          <Star size={24} />
          {isControlPreview ? (
            <ControlIcon size={24} />
          ) : svgStringDark ? (
            <img
              height={24}
              width={24}
              src={`data:image/svg+xml,${encodeURIComponent(svgStringDark)}`}
              alt=""
            />
          ) : (
            <Smiley size={24} />
          )}
          <Chats size={24} />
          <UserCircle size={24} />
        </UINavBar>
        <UIBottomSheet>
          <UIBottomSheetHeader>
            <h2>Choose one</h2>
            <X size={16} weight="bold" />
          </UIBottomSheetHeader>
          <UIBottomSheetItem>
            <Folder size={24} />
            <span>First item in the list</span>
          </UIBottomSheetItem>
          <UIBottomSheetItem>
            {isControlPreview ? (
              <ControlIcon size={24} />
            ) : svgStringDark ? (
              <img
                height={24}
                width={24}
                src={`data:image/svg+xml,${encodeURIComponent(svgStringDark)}`}
                alt=""
              />
            ) : (
              <Smiley size={24} />
            )}
            <span>A second item</span>
          </UIBottomSheetItem>
          <UIBottomSheetItem>
            <PencilLine size={24} />
            <span>One more item</span>
          </UIBottomSheetItem>
        </UIBottomSheet>
      </UIContainer>
    </IconContext.Provider>
  );
};

export default TestCases;
