import React, { useMemo } from "react";
import { useRecoilValue } from "recoil";
import {
  Folder,
  House,
  MusicNotes,
  PencilLine,
  Smiley,
  Star,
  UserCircle,
  IconContext,
  Icon,
} from "phosphor-react";

import { isIcon } from "../../lib";
import {
  textInputAtom,
  fileInputAtom,
  iconWeightAtom,
  customPreviewAtom,
} from "../../state";
import {
  TestCaseContainer,
  IconButtonContainer,
  IconButton,
  TextButtonContainer,
  TextButton,
  TestUIContainer,
  LargeIconContainer,
  MockMenu,
  MockMenuItem,
  MockToolbar,
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
        .replace(/fill="#?(?!none)(?!transparent)\w+"/g, "fill=\"#EBEAEC\"")
        .replace(/stroke="#?(?!none)(?!transparent)\w+"/g, "stroke=\"#EBEAEC\""),
    [textInput, fileInput, customSource]
  );

  const svgStringLight = useMemo(
    () => svgStringDark.replace(/#EBEAEC/gi, "#35313D"),
    [svgStringDark]
  );

  const displayIcon =
    !!customPreviewIcon && !isIcon(customPreviewIcon)
      ? customPreviewIcon.svgString
      : svgStringDark;

  return (
    <IconContext.Provider
      value={{ size: "1em", weight, color: "currentColor", mirrored: false }}
    >
      <TestCaseContainer>
        <IconButtonContainer>
          <IconButton $size={72} $radius={36} $dark>
            {isControlPreview ? (
              <ControlIcon size={48} />
            ) : svgStringDark ? (
              <img
                height={48}
                width={48}
                src={`data:image/svg+xml,${encodeURIComponent(svgStringDark)}`}
                alt=""
              />
            ) : (
              <Smiley size={48} />
            )}
          </IconButton>
          <IconButton $size={56} $radius={36} $dark>
            {isControlPreview ? (
              <ControlIcon size={32} />
            ) : svgStringDark ? (
              <img
                height={32}
                width={32}
                src={`data:image/svg+xml,${encodeURIComponent(svgStringDark)}`}
                alt=""
              />
            ) : (
              <Smiley size={32} />
            )}
          </IconButton>
          <IconButton $size={48} $radius={36} $dark>
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
          </IconButton>
          <IconButton $size={32} $radius={36} $dark>
            {isControlPreview ? (
              <ControlIcon size={16} />
            ) : svgStringDark ? (
              <img
                height={16}
                width={16}
                src={`data:image/svg+xml,${encodeURIComponent(svgStringDark)}`}
                alt=""
              />
            ) : (
              <Smiley size={16} />
            )}
          </IconButton>
          <IconButton $size={72} $radius={36}>
            {isControlPreview ? (
              <ControlIcon size={48} />
            ) : svgStringDark ? (
              <img
                height={48}
                width={48}
                src={`data:image/svg+xml,${encodeURIComponent(svgStringLight)}`}
                alt=""
              />
            ) : (
              <Smiley size={48} />
            )}
          </IconButton>
          <IconButton $size={56} $radius={20}>
            {isControlPreview ? (
              <ControlIcon size={32} />
            ) : svgStringDark ? (
              <img
                height={32}
                width={32}
                src={`data:image/svg+xml,${encodeURIComponent(svgStringLight)}`}
                alt=""
              />
            ) : (
              <Smiley size={32} />
            )}
          </IconButton>
          <IconButton $size={48} $radius={8}>
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
          </IconButton>
          <IconButton $size={32} $radius={0}>
            {isControlPreview ? (
              <ControlIcon size={16} />
            ) : svgStringDark ? (
              <img
                height={16}
                width={16}
                src={`data:image/svg+xml,${encodeURIComponent(svgStringLight)}`}
                alt=""
              />
            ) : (
              <Smiley size={16} />
            )}
          </IconButton>
        </IconButtonContainer>
        <TextButtonContainer>
          <TextButton>
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
            )}{" "}
            Button
          </TextButton>
          <TextButton $large>
            {isControlPreview ? (
              <ControlIcon size={48} />
            ) : svgStringDark ? (
              <img
                height={48}
                width={48}
                src={`data:image/svg+xml,${encodeURIComponent(svgStringLight)}`}
                alt=""
              />
            ) : (
              <Smiley size={48} />
            )}{" "}
            Button
          </TextButton>
        </TextButtonContainer>
        <TestUIContainer>
          <LargeIconContainer>
            {isControlPreview ? (
              <ControlIcon size={144} />
            ) : svgStringDark ? (
              <img
                height={144}
                width={144}
                src={`data:image/svg+xml,${encodeURIComponent(svgStringLight)}`}
                alt=""
              />
            ) : (
              <Smiley size={144} />
            )}
          </LargeIconContainer>
          <MockMenu>
            <MockMenuItem>Menu Title</MockMenuItem>
            <MockMenuItem>
              <Folder size={24} /> Menu Item 1
            </MockMenuItem>
            <MockMenuItem>
              {isControlPreview ? (
                <ControlIcon size={24} />
              ) : svgStringDark ? (
                <img
                  height={24}
                  width={24}
                  src={`data:image/svg+xml,${encodeURIComponent(
                    svgStringDark
                  )}`}
                  alt=""
                />
              ) : (
                <Smiley size={24} />
              )}{" "}
              Menu Item 2
            </MockMenuItem>
            <MockMenuItem>
              <PencilLine size={24} /> Menu Item 3
            </MockMenuItem>
          </MockMenu>
          <MockToolbar>
            <House size={24} />
            <Star size={24} />
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
            <MusicNotes size={24} />
            <UserCircle size={24} />
          </MockToolbar>
        </TestUIContainer>
      </TestCaseContainer>
    </IconContext.Provider>
  );
};

export default TestCases;
