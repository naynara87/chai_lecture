import styled from "@emotion/styled";
import React, { useCallback, useMemo, useState } from "react";
import { CardTabContentData } from "../../core";
import useContentMapper from "../../core/hooks/useContentMapper";

const TabTitle = styled.div`
  cursor: pointer;
`;

export interface CardTabComponentProps {
  contents: CardTabContentData;
}

const CardTabComponent = ({ contents }: CardTabComponentProps) => {
  const [tabActiveIndex, setTabActiveIndex] = useState(0);
  const { getContentComponent } = useContentMapper();

  const handleClickTab = useCallback((tabIndex: number) => {
    setTabActiveIndex(tabIndex);
  }, []);

  const tabTitle = useMemo(() => {
    return contents.data.map((content, contentIndex) => {
      return (
        <TabTitle
          className={`tab-title ${
            tabActiveIndex === contentIndex ? "active" : ""
          }`}
          key={contentIndex}
          onClick={() => {
            handleClickTab(contentIndex);
          }}
        >
          {content.tabName ? content.tabName : `탭${contentIndex + 1}`}
        </TabTitle>
      );
    });
  }, [contents.data, tabActiveIndex, handleClickTab]);

  const mainContents = useMemo(() => {
    return contents.data[tabActiveIndex].cards.map((card, cardIndex) => {
      return (
        <li className="tab-conts-wrap" key={cardIndex}>
          {card.contents.map((cardContent, cardContentIndex) => {
            return getContentComponent(cardContent, cardContentIndex);
          })}
        </li>
      );
    });
  }, [contents.data, getContentComponent, tabActiveIndex]);

  return (
    <div className="tab-contents-container">
      {contents.meta?.isUseTab && (
        <div className="tab-title-wrap">{tabTitle}</div>
      )}
      <div className="tab-conts-container">
        <ul className="tab-conts-wrapper">{mainContents}</ul>
      </div>
    </div>
  );
};

export default CardTabComponent;
