import styled from "styled-components";

export const UIContainer = styled.aside`
  position: sticky;
  top: 112px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #efeeef;
  border-radius: 8px;
  height: 484px;
  overflow-y: hidden;
`;

export const UIHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  color: #9a989e;
  background-color: #e7e6e8;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const UIHeaderItems = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const UINavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  color: white;
  background-color: #35313d;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  z-index: 1;
`;

export const UIBottomSheet = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 20px 20px 68px;
  color: white;
  background-color: #45414d;
  border-radius: 16px;
`;

export const UIBottomSheetHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & h2 {
    color: currentColor;
    margin: 0;
    font-size: 14px;
  }
`;

export const UIBottomSheetItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UIContents = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 24px;
`;

export const UIChipsContiner = styled.div`
  display: flex;
  gap: 8px;
  padding: 16px 22px 0;
  align-items: center;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const UIChip = styled.div<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6.5px 14.5px 6.5px 10.5px;
  box-sizing: border-box;
  background-color: white;
  border-radius: 20px;
  color: ${({ $active }) => ($active ? "#35313D" : "#9a989e")};
  border: 1.5px solid ${({ $active }) => ($active ? "#35313D" : "transparent")};
  cursor: pointer;

  &:hover {
    color: #35313d;
    border-color: #35313d;
  }
`;

export const UICard = styled.div`
  display: flex;
  gap: 4px;
  padding: 12px;
  background-color: white;
  border-radius: 6px;
  border-top-right-radius: 28px;
`;

export const UICardText = styled.div<{ $width?: number; $withIcon?: boolean }>`
  margin: ${({ $withIcon }) => ($withIcon ? `0 12px` : `12px`)};
  background-color: #e7e6e8;
  border-radius: 4px;
  width: ${({ $width }) => $width && `${$width}px`};
  height: 16px;
`;

export const UICardButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const IconButton = styled.div<{
  $size: number;
  $radius: number;
  $active?: boolean;
}>`
  display: grid;
  place-items: center;
  height: ${({ $size }) => $size}px;
  width: ${({ $size }) => $size}px;
  border-radius: ${({ $radius }) => $radius}px;
  background: #e7e6e8;
  color: ${({ $active }) => ($active ? "#35313d" : "#9A989E")};

  & img {
    color: ${({ $active }) => ($active ? "#35313d" : "#9A989E")};
  }
`;
