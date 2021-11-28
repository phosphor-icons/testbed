import styled from "styled-components";

export const SettingsContainer = styled.div`
  position: sticky;
  top: 0;
  padding: 16px 40px;
  color: #925bff;
  background-color: #f6f2ff;
  border-bottom: 1px solid #925bff;
  z-index: 2;
`;

export const SettingsContent = styled.div`
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  max-width: 1120px;
  margin: 0 auto;
`;

export const SliderContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  height: 22px;
  padding: 12px 24px;
  border: 1px solid #925bff;
  border-radius: 6px;
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
  /* width: 80px; */
  font-family: "IBM Plex Mono", monospace;
  font-size: 13px;
`;
