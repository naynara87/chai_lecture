import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useCallback, useMemo } from "react";
import { colorPalette } from "../../styles/colorPalette";
import { ApproveTabsData } from "../../types/templateContents";
import { changePXtoVW } from "../../utils/styles";

const SideTabHeader = styled.div`
  gap: 8px;
  display: flex;
`;

interface SideTabHeaderButtonProps {
  isFocus: boolean;
}

const sideTabHeaderButtonFocusCss = css`
  background-color: ${colorPalette.confirmBtn};
  color: ${colorPalette.backgroundWhite};
`;

const SideTabHeaderButton = styled.button<SideTabHeaderButtonProps>`
  width: ${changePXtoVW(99)};
  height: ${changePXtoVW(56)};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid ${colorPalette.confirmBtn};
  filter: drop-shadow(2px 6px 12px rgba(0, 0, 0, 0.15));
  border-radius: 28px;
  font-size: ${changePXtoVW(20)};
  font-weight: 700;
  color: ${colorPalette.confirmBtn};
  text-shadow: 2px 6px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  ${(props) => props.isFocus && sideTabHeaderButtonFocusCss}
`;

interface SideTabsHeaderProps {
  datas: ApproveTabsData[];
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  setOpenTabs: React.Dispatch<React.SetStateAction<boolean>>;
  currentIndex: number;
  openTabs: boolean;
}

const SideTabsHeader = ({
  datas,
  setCurrentIndex,
  setOpenTabs,
  currentIndex,
  openTabs,
}: SideTabsHeaderProps) => {
  const handleClickTabHeader = useCallback(
    (index: number) => {
      setCurrentIndex(index);
    },
    [setCurrentIndex],
  );

  const headerContents = useMemo(() => {
    return datas.map((data, index) => {
      return (
        <SideTabHeaderButton
          key={index}
          isFocus={openTabs && index === currentIndex}
          onClick={() => {
            if (!openTabs) {
              setOpenTabs(true);
            } else if (openTabs && index === currentIndex) {
              setOpenTabs(false);
            }
            handleClickTabHeader(index);
          }}
        >
          {data.tabNames}
        </SideTabHeaderButton>
      );
    });
  }, [datas, currentIndex, handleClickTabHeader, openTabs, setOpenTabs]);

  return <SideTabHeader>{headerContents}</SideTabHeader>;
};

export default SideTabsHeader;
