import styled from "styled-components";

export const GridContainer = styled.div<{ $size: number }>`
  display: inline-flex;
  flex-flow: wrap;
  justify-content: space-between;
  gap: ${({ $size }) => $size}px;

  & img {
    transition: background 200ms ease;
  }

  &:hover img {
    background: rgba(146, 91, 255, 0.5);
  }
`;