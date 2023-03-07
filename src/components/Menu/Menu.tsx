import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { Shuffle } from "@phosphor-icons/react";

import {
  iconWeightAtom,
  iconSizeAtom,
  useControlSetAtom,
  shuffleAtom,
} from "../../state";

import { MainButton } from "../App/App.styles";
import {
  SettingsContainer,
  SettingsContent,
  SliderContainer,
  Slider,
  SliderLabel,
} from "./Menu.styles";
import ToggleButton from "./ToggleButton";
import StyleSelect from "./StyleSelect";

const Menu: React.FC<{}> = () => {
  const [weight, setWeight] = useRecoilState(iconWeightAtom);
  const [size, setSize] = useRecoilState(iconSizeAtom);
  const [useControls, setUseControls] = useRecoilState(useControlSetAtom);
  const shuffle = useSetRecoilState(shuffleAtom);

  const handleToggleControls = () => {
    setUseControls((u) => !u);
  };

  const handleReset = () => {
    setWeight("regular");
    setSize(32);
    setUseControls(true);
  };

  return (
    <SettingsContainer>
      <SettingsContent>
        <ToggleButton enabled={useControls} onClick={handleToggleControls}>
          Control set
        </ToggleButton>
        <StyleSelect value={weight} setter={setWeight} />
        <SliderContainer>
          <SliderLabel>Size: {size}px</SliderLabel>
          <Slider
            min={16}
            max={192}
            step={4}
            value={size}
            onChange={({ target: { value } }) => setSize(+value)}
          />
        </SliderContainer>
        <MainButton onClick={(e) => shuffle(e.timeStamp)}>
          <Shuffle size={24} />
        </MainButton>
        <MainButton onClick={handleReset}>Reset</MainButton>
      </SettingsContent>
    </SettingsContainer>
  );
};

export default Menu;
