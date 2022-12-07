import styled from "@emotion/styled";
import React, { useMemo } from "react";
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
  tabIds?: { index: number; id: ID }[];
  handleClickTab: (pageId?: ID) => void;
}
const TabButtons = ({ tabs, handleClickTab, tabIds }: TabButtonsProps) => {
  const renderTab = useMemo(() => {
    if (!tabIds) {
      return;
    }
    return tabs.map((tab, index) => {
      if (tabIds[index]) {
        return (
          <TabButton
            key={index}
            tabId={tabIds[index].id}
            tab={tab}
            handleClickTab={handleClickTab}
            isActive={tab.active}
          />
        );
      } else {
        return <div key={index}></div>;
      }
    });
  }, [tabs, handleClickTab, tabIds]);
  return <TabContainer>{renderTab}</TabContainer>;
};

export default TabButtons;
