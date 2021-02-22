import styled, { css } from "styled-components";

export const MenuContainer = styled.div`
  padding: 0;
  margin: 0;
  background-color: white;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const TextInputLabel = styled.div`
  position: absolute;
  top: calc(50% - 44px);
  left: 0;

  display: flex;
  align-items: center;
  gap: 12px;
  padding: 32px 24px;
  user-select: none;
  pointer-events: none;
`;

export const TextInputContainer = styled.div<{ hasValue: boolean }>`
  position: relative;
  flex: 3.5;
  display: flex;
  /* flex-direction: column; */

  ${TextInputLabel} {
    ${({ hasValue }) =>
      hasValue &&
      css`
         {
          display: none;
        }
      `};
  }

  &:focus-within ${TextInputLabel} {
    display: none;
  }

  &:focus-within ::placeholder {
    opacity: 0;
  }
`;

export const TextInput = styled.textarea`
  width: 100%;
  min-height: 88px;
  /* flex: 1; */
  margin: 0;
  padding: 16px 24px;
  background: rgba(146, 91, 255, 0.1);
  border: 1px solid #925bff;
  box-sizing: border-box;
  border-radius: 6px;
  resize: vertical;

  &::placeholder {
    color: black;
  }
`;

export const DropInput = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  padding: 16px 24px;
  background: rgba(146, 91, 255, 0.1);
  border: 1px solid #925bff;
  box-sizing: content-box;
  border-radius: 6px;
  font-family: "IBM Plex Mono", monospace;
  font-size: 13px;
  outline: none;
  cursor: pointer;
  max-height: 214px;
  overflow-y: auto;

  & p {
    margin: 0;
    font-size: 13px;
  }
`;

export const DropInputLabel = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  & p {
    padding: 0;
  }
`;

export const MainButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 11.5px;
  min-height: 48px;
  padding: 11px 24px;
  border: 1px solid #925bff;
  background: white;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: rgba(146, 91, 255, 0.1);
  }

  &:active {
    background: rgba(146, 91, 255, 0.5);
  }
`;

export const ResetButton = styled(MainButton)`
  width: 120px;
  height: 88px;
`;

export const SettingsContainer = styled.menu`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
  margin: 0 0 24px;
  background-color: white;
`;

export const SliderContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 12px;
  padding: 0 24px;
`;

export const Slider = styled.input.attrs({ type: "range" })`
  flex: 1;
  background: transparent;
  -webkit-appearance: none;
  appearance: none;
  border: 1px solid #925bff;
  border-radius: 80px;
  height: 12px;
  box-sizing: border-box;
  margin-top: 5px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 32px;
    height: 20px;
    padding: 6px;
    border-radius: 80px;
    background: #925bff;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    padding: 6px;
    border-radius: 50%;
    background: #925bff;
    cursor: pointer;
  }
`;

export const SliderLabel = styled.span`
  width: 36px;
  font-family: "IBM Plex Mono", monospace;
  font-size: 13px;
`;
