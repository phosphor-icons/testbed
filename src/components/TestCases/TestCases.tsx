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
} from "phosphor-react";

import { textInputAtom, fileInputAtom, iconWeightAtom } from "../../state";
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
  const weight = useRecoilValue(iconWeightAtom);

  const svgStringDark = useMemo(
    () =>
      (textInput || fileInput[0] || "")
        .replace(/#000000/g, "#EBEAEC")
        .replace(/#000/g, "#EBEAEC")
        .replace(/black/g, "#EBEAEC"),
        // .replace(/path/g, `path fill="#EBEAEC"`),
    [textInput, fileInput]
  );

  const svgStringLight = useMemo(
    () => svgStringDark.replace(/#EBEAEC/gi, "#35313D"),
    [svgStringDark]
  );

  console.log(fileInput[0]);
  console.log(svgStringLight);
  console.log(svgStringDark);

  return (
    <IconContext.Provider
      value={{ size: "1em", weight, color: "currentColor", mirrored: false }}
    >
      <TestCaseContainer>
        <IconButtonContainer>
          <IconButton $size={64} $radius={32} $dark>
            {svgStringDark ? (
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
          <IconButton $size={56} $radius={20} $dark>
            {svgStringDark ? (
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
          <IconButton $size={48} $radius={8} $dark>
            {svgStringDark ? (
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
          <IconButton $size={32} $radius={0} $dark>
            {svgStringDark ? (
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
          <IconButton $size={64} $radius={32}>
            {svgStringDark ? (
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
            {svgStringDark ? (
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
            {svgStringDark ? (
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
            {svgStringDark ? (
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
            {svgStringDark ? (
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
            {svgStringDark ? (
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
            {svgStringDark ? (
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
              {svgStringDark ? (
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
            {svgStringDark ? (
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
