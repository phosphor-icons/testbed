import React, { useState, useCallback } from "react";
import Dropzone from "react-dropzone";
import { useRecoilState, useSetRecoilState } from "recoil";
import { IconWeight } from "@phosphor-icons/react";

import {
  textInputAtom,
  fileInputAtom,
  iconWeightAtom,
  customPreviewAtom,
} from "../../state";

import {
  HeaderContainer,
  HeaderContent,
  HeaderTitle,
  TextInputContainer,
  TextInput,
  DropInput,
  DropInputLabel,
  ResetButton,
} from "./Header.styles";

interface FileResult {
  name: string;
  content: string;
}

const Header: React.FC = () => {
  const [textInputValue, setTextInputValue] = useRecoilState(textInputAtom);
  const [filenames, setFilenames] = useState<string[]>([]);
  const setWeight = useSetRecoilState(iconWeightAtom);
  const setFileInputValues = useSetRecoilState(fileInputAtom);
  const setCustomPreview = useSetRecoilState(customPreviewAtom);

  const handleDrop = useCallback(
    async (acceptedFiles: File[]) => {
      let newWeight: IconWeight = "regular";

      const icons: FileResult[] = await Promise.all<FileResult>(
        acceptedFiles.map((file) => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            let content: string;

            reader.onabort = () => reject("File reading was aborted");
            reader.onerror = () => reject("File reading has failed");
            reader.onload = () => {
              const binaryString = reader.result as string;
              if (binaryString) content = binaryString;

              const suffix = file.name.split(".svg")[0].split("-").slice(-1)[0];
              switch (suffix) {
                case "thin":
                case "light":
                case "bold":
                case "fill":
                case "duotone":
                  newWeight = suffix;
                  break;
                case "duo":
                  newWeight = "duotone";
                  break;
                default:
                  break;
              }
            };
            reader.onloadend = () => resolve({ name: file.name, content });
            reader.readAsText(file, "utf8");
          });
        })
      );

      setFileInputValues(icons.map(({ content }) => content));
      setFilenames(icons.map(({ name }) => name));
      setWeight(newWeight);
    },
    [setFileInputValues, setWeight]
  );

  const handleReset = () => {
    setTextInputValue("");
    setFileInputValues([]);
    setFilenames([]);
    setCustomPreview(null);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderTitle>
          <h1>Phosphor Testbed</h1>
          {/* <code>
            Test new icons for consistency, alignment, usability in context
          </code> */}
        </HeaderTitle>
        <TextInputContainer hasValue={!!textInputValue}>
          <TextInput
            placeholder="Paste SVG"
            value={textInputValue}
            onChange={(e) => setTextInputValue(e.target.value)}
            onClick={(e) => e.currentTarget.select()}
          />
        </TextInputContainer>
        <Dropzone multiple={true} accept="image/*" onDrop={handleDrop}>
          {({ getRootProps, getInputProps }) => (
            <DropInput {...getRootProps()}>
              <input {...getInputProps()} />
              {filenames.length ? (
                <div>
                  {filenames.map((name) => (
                    <p key={name}>{name}</p>
                  ))}
                </div>
              ) : (
                <DropInputLabel>
                  <p>Drop SVGs or click to upload</p>
                </DropInputLabel>
              )}
            </DropInput>
          )}
        </Dropzone>
        <ResetButton onClick={handleReset}>Clear</ResetButton>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
