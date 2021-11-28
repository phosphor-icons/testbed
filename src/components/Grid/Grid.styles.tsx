import styled from "styled-components";

export const GridContainer = styled.div<{ $size: number }>`
  display: flex;
  align-content: flex-start;
  flex-flow: wrap;
  justify-content: space-between;
  gap: ${({ $size }) => 8 * Math.sqrt($size) - 16}px;

  & > * {
    cursor: pointer;
  }

  & img {
    transition: background 200ms ease;
  }

  &:hover img {
    background: rgba(146, 91, 255, 0.5);
  }
`;
