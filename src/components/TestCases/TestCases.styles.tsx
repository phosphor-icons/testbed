import styled from "styled-components";

export const TestCaseContainer = styled.div`
  padding-left: 40px;
  color: #35313d;
`;

export const IconButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 64px 56px 48px 32px;
  gap: 48px;
  align-items: center;
`;

export const IconButton = styled.div<{ $size: number, $radius: number; $dark?: boolean; }>`
  display: grid;
  place-items: center;
  height: ${({ $size }) => $size}px;
  width: ${({ $size }) => $size}px;
  border-radius: ${({ $radius }) => $radius}px;
  background: ${({ $dark }) => ($dark ? "#35313d" : "#EBEAEC")};
  color: ${({ $dark }) => ($dark ? "#EBEAEC" : "#35313d")};

  & img {
    color: ${({ $dark }) => ($dark ? "#EBEAEC" : "#35313d")};
  }
`;

export const TextButtonContainer = styled.div`
  margin: 40px 0;
  display: flex;
  align-items: flex-start;
`;

export const TextButton = styled.span<{ $large?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${({ $large }) => ($large ? "12.5" : "10.5")}px;
  border-radius: ${({ $large }) => ($large ? "80" : "24")}px;
  padding: 12px 20px 12px 16px;
  background: #ebeaec;
  margin-right: 32px;
  font-size: ${({ $large }) => ($large ? 24 : 16)}px;
  font-weight: ${({ $large }) => ($large ? "bold" : "normal")};
`;

export const TestUIContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background: #ebeaec;
`;

export const LargeIconContainer = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
  padding: 48px 108px;
`;

export const MockMenu = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px 24px;
  background: #35313d;
`;

export const MockMenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: #ebeaec;
`;

export const MockToolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 20px;
`;
