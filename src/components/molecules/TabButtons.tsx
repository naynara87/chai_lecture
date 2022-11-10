import styled from "@emotion/styled";
import React from "react";
import { TabWithId } from "../../types/templates";
import TabButton from "../atoms/TabButton";

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

interface TabButtonsProps {
  tabs: TabWithId[];
  currentTab: TabWithId;
  handleClickTab: (id: number) => void;
}
const TabButtons = ({ tabs, currentTab, handleClickTab }: TabButtonsProps) => {
  return (
    <TabContainer>
      {tabs.map((tab) => (
        <TabButton
          key={tab.index}
          tab={tab}
          handleClickTab={handleClickTab}
          isActive={tab.index === currentTab.index}
        />
      ))}
    </TabContainer>
  );
};

export default TabButtons;
