import styled from "@emotion/styled";
import React from "react";
import { ID } from "../../types/appData";
import { Tab } from "../../types/pageTemplate";
import TabButton from "../atoms/TabButton";

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

interface TabButtonsProps {
  tabs: Tab[];
  handleClickTab: (pageId?: ID) => void;
}
const TabButtons = ({ tabs, handleClickTab }: TabButtonsProps) => {
  return (
    <TabContainer>
      {tabs.map((tab) => (
        <TabButton
          key={tab.pageId}
          tab={tab}
          handleClickTab={handleClickTab}
          isActive={tab.active}
        />
      ))}
    </TabContainer>
  );
};

export default TabButtons;
