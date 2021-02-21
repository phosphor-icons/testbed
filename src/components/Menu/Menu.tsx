import React, { useState, useCallback } from "react";
import Dropzone from "react-dropzone";
import { useRecoilState, useSetRecoilState } from "recoil";
import { ClipboardText, Shuffle, UploadSimple } from "phosphor-react";

import { Weight } from "../../lib";
import {
  textInputAtom,
  fileInputAtom,
  iconWeightAtom,
  iconSizeAtom,
  useControlSetAtom,
  shuffleAtom,
} from "../../state";

import {
  DropInput,
  DropInputLabel,
  InputsContainer,
  MainButton,
  MenuContainer,
  ResetButton,
  SettingsContainer,
  SliderContainer,
  Slider,
  SliderLabel,
  TextInput,
  TextInputContainer,
  TextInputLabel,
} from "./Menu.styles";
import ToggleButton from "./ToggleButton";
import StyleSelect from "./StyleSelect";

interface FileResult {
  name: string;
  content: string;
}

const Menu: React.FC<{}> = () => {
  const [weight, setWeight] = useRecoilState(iconWeightAtom);
  const [size, setSize] = useRecoilState(iconSizeAtom);
  const [textInputValue, setTextInputValue] = useRecoilState(textInputAtom);
  const [filenames, setFilenames] = useState<string[]>([]);
  const [, setFileInputValues] = useRecoilState(fileInputAtom);
  const [useControls, setUseControls] = useRecoilState(useControlSetAtom);
  const shuffle = useSetRecoilState(shuffleAtom);

  const handleDrop = useCallback(
    async (acceptedFiles: File[]) => {
      let newWeight: Weight = "regular";

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
  };

  const handleToggleControls = () => {
    setUseControls((u) => !u);
  };

  return (
    <>
      <MenuContainer>
        <InputsContainer>
          <TextInputContainer hasValue={!!textInputValue}>
            <TextInput
              placeholder="Paste SVG"
              value={textInputValue}
              onChange={(e) => setTextInputValue(e.target.value)}
              onClick={(e) => e.currentTarget.select()}
            />
            {/* <TextInputLabel>
              <ClipboardText size={24} />
              Paste SVG
            </TextInputLabel> */}
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
                    <UploadSimple size={24} />
                    <p>Drop SVGs or click to upload</p>
                  </DropInputLabel>
                )}
              </DropInput>
            )}
          </Dropzone>
          <ResetButton onClick={handleReset}>Reset</ResetButton>
        </InputsContainer>
      </MenuContainer>
      <SettingsContainer>
        <StyleSelect value={weight} setter={setWeight} />
        <SliderContainer>
          <SliderLabel>{size}px</SliderLabel>
          <Slider
            min={16}
            max={192}
            step={4}
            value={size}
            onChange={({ target: { value } }) => setSize(+value)}
          />
        </SliderContainer>
        <ToggleButton enabled={useControls} onClick={handleToggleControls}>
          Control set
        </ToggleButton>
        <MainButton onClick={(e) => shuffle(e.timeStamp)}>
          <Shuffle size={24} /> Shuffle
        </MainButton>
      </SettingsContainer>
    </>
  );
};

export default Menu;
