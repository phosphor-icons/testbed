import React from "react";
import styled from "styled-components";

import { MainButton } from "../App/App.styles";

interface ToggleButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  enabled: boolean;
}

const IndicatorContainer = styled.div`
  height: 24px;
  width: 24px;
  border: 1px solid #925bff;
  box-sizing: border-box;
  border-radius: 3px;
  padding: 3px;
`;

const Indicator = styled.div<{ enabled: boolean }>`
  height: 100%;
  border-radius: 1px;
  box-sizing: border-box;
  background-color: ${({ enabled }) => (enabled ? "#925bff" : "transparent")};
`;

const ToggleButton: React.FC<ToggleButtonProps> = ({
  enabled,
  onClick,
  children,
}) => {
  return (
    <MainButton onClick={onClick}>
      <IndicatorContainer>
        <Indicator enabled={enabled} />
      </IndicatorContainer>
      {children}
    </MainButton>
  );
};

export default ToggleButton;
