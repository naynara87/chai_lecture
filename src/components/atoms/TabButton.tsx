import styled from "@emotion/styled";
import React from "react";
import { colorPalette } from "../../styles/colorPalette";
import { ID } from "../../types/appData";
import { TabWithId } from "../../types/templates";
import Button from "./Button";

interface TabButtonStyleProps {
  active: boolean;
}
const TabButtonStyle = styled(Button)<TabButtonStyleProps>`
  display: inline-block;
  margin: 0 6px;
  margin-bottom: 6px;
  padding: 4px 26px;
  border-radius: 9px;
  background-color: ${(props) =>
    props.active ? colorPalette.confirmBtn : colorPalette.tabBackground};
  line-height: 1.6;
  font-weight: 600;
  font-size: 16px;
  color: ${colorPalette.white};
`;

interface TabButtonProps {
  isActive: boolean;
  tab: TabWithId;
  handleClickTab(id: ID): void;
}
const TabButton = ({ tab, handleClickTab, isActive }: TabButtonProps) => {
  return (
    <TabButtonStyle type="button" onClick={() => handleClickTab(tab.index)} active={isActive}>
      {tab.name}
    </TabButtonStyle>
  );
};

export default TabButton;
