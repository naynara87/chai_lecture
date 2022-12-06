import styled from "@emotion/styled";
import React from "react";
import { colorPalette } from "../../styles/colorPalette";
import { ID } from "../../types/appData";
import { Tab } from "../../types/pageTemplate";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";
import Button from "./Button";

interface TabButtonStyleProps {
  active: boolean;
  cursorPointer: boolean;
}
const TabButtonStyle = styled(Button)<TabButtonStyleProps>`
  display: inline-block;
  margin: 0 ${changePXtoVW(6)};
  margin-bottom: ${changePXtoVH(6)};
  padding: ${changePXtoVH(4)} ${changePXtoVW(26)};
  border-radius: ${changePXtoVW(9)};
  background-color: ${(props) =>
    props.active ? colorPalette.confirmBtn : colorPalette.tabBackground};
  line-height: 1.6;
  font-weight: 600;
  font-size: ${changePXtoVW(16)};
  color: ${colorPalette.white};
  cursor: ${(props) => (props.cursorPointer ? "pointer" : "default")};
`;

interface TabButtonProps {
  isActive: boolean;
  tab: Tab;
  tabId: ID;
  handleClickTab: (pageId?: ID) => void;
}
const TabButton = ({ tab, handleClickTab, isActive, tabId }: TabButtonProps) => {
  return (
    <TabButtonStyle
      type="button"
      onClick={() => handleClickTab(tabId)}
      active={isActive}
      cursorPointer={!!tabId}
    >
      {tab.tabName}
    </TabButtonStyle>
  );
};

export default TabButton;
