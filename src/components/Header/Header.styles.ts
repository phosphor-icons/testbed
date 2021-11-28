import styled, { css } from "styled-components";
import { MainButton } from "../App/App.styles";

export const HeaderContainer = styled.header`
  padding: 32px 40px 0;
  color: #925bff;
  background-color: rgba(146, 91, 255, 0.08);
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-flow: wrap;
  align-items: stretch;
  justify-content: space-between;
  gap: 12px;
  max-width: 1120px;
  max-height: 640px;
  margin: 0 auto;
`;

export const HeaderTitle = styled.div`
  width: 296px;
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
  flex: 1;
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
  height: 52px;
  min-height: 52px;
  max-height: 640px;
  margin: 0;
  padding: 16px 24px;
  background: rgba(146, 91, 255, 0.1);
  border: 1px solid #925bff;
  box-sizing: border-box;
  border-radius: 6px;
  resize: vertical;

  &::placeholder {
    color: #925bff;
  }
`;

export const DropInput = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  padding: 16px 24px;
  background: rgba(146, 91, 255, 0.1);
  border: 1px solid #925bff;
  box-sizing: content-box;
  border-radius: 6px;
  font-family: "IBM Plex Mono", monospace;
  font-size: 13px;
  outline: none;
  cursor: pointer;
  height: 18px;
  overflow-y: auto;

  & p {
    margin: 0;
    font-size: 13px;
  }
`;

export const DropInputLabel = styled.div`
  & p {
    padding: 0;
  }
`;

export const ResetButton = styled(MainButton)`
  width: 72px;
  height: 52px;
`;
