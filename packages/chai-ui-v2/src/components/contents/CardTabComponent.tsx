import styled from "@emotion/styled";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { CardTabContentData } from "../../core";
import useContentMapper from "../../core/hooks/useContentMapper";

const TabTitle = styled.div`
  cursor: pointer;
`;

interface TabContsContainerProps {
  isUseTab?: boolean;
}

const TabContsContainer = styled.div<TabContsContainerProps>`
  ${(props) => !props.isUseTab && "height: 100%;"}
  ${(props) => !props.isUseTab && "margin-top: 0;"}
    
  box-shadow: inset 0px 20px 25px -10px rgba(0, 0, 0, 0);
  transition: all ease-in-out 0.3s;

  &.scrolled {
    box-shadow: inset 0px 20px 25px -10px rgba(0, 0, 0, 0.05);
  }
`;

export interface CardTabComponentProps {
  contents: CardTabContentData;
}

const CardTabComponent = ({ contents }: CardTabComponentProps) => {
  const [tabActiveIndex, setTabActiveIndex] = useState(0);
  const [isShadow, setIsShadow] = useState(false);
  const tabContainerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | number>();

  const { getContentComponent } = useContentMapper();

  const handleClickTab = useCallback((tabIndex: number) => {
    setTabActiveIndex(tabIndex);
    if (tabContainerRef.current) {
      tabContainerRef.current.scrollTo(0, 0);
    }
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

  const handleScroll = useCallback((event: Event) => {
    const target = event.target as HTMLDivElement;
    clearTimeout(timeoutRef.current);
    setIsShadow(target.scrollTop > 0);
    timeoutRef.current = window.setTimeout(() => {
      setIsShadow(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const curTabContainerRef = tabContainerRef.current;
    curTabContainerRef?.addEventListener("scroll", handleScroll);
    return () => {
      curTabContainerRef?.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="tab-contents-container">
      {contents.meta?.isUseTab && (
        <div className="tab-title-wrap">{tabTitle}</div>
      )}
      <TabContsContainer
        isUseTab={contents.meta?.isUseTab}
        className={`tab-conts-container ${isShadow ? "scrolled" : ""}`}
        ref={tabContainerRef}
      >
        <ul className="tab-conts-wrapper">{mainContents}</ul>
      </TabContsContainer>
    </div>
  );
};

export default CardTabComponent;
