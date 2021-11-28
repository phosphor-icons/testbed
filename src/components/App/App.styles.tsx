import styled, { createGlobalStyle } from "styled-components";

export const AppStyles = createGlobalStyle`
  h1, h2, h3, h4, h5, h6 {
    color: #925BFF;
    margin: 0 0 8px;
  }

  h1 {
    font-weight: normal;
    font-size: 28px;
  }

  p {
    font-size: 16px;
  }

  code,
  input,
  button,
  textarea,
  select {
    font-family: "IBM Plex Mono", monospace;
    font-size: 13px;
    color: #925BFF;
    outline: none;
  }
`;

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: white;
  font-family: "Manrope", sans-serif;
  font-size: 13px;
`;

export const DemoArea = styled.div`
  position: relative;
  display: grid;
  max-width: 1120px;
  margin: 0 auto;
  grid-template-columns: 360px 1fr;
  padding: 32px 40px 64px;
  gap: 32px;
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
  background: transparent;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: rgba(146, 91, 255, 0.1);
  }

  &:active {
    background: rgba(146, 91, 255, 0.5);
  }
`;
