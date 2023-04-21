import styled from "@emotion/styled";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  getElementHeight,
  TemplateProps,
  Template_H_3_7Data,
  useContentMapper,
} from "../../core";

interface Template03Props extends TemplateProps {}

const GuideContentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const Template03 = ({ template, setPageCompleted }: Template03Props) => {
  const thisPage = template as Template_H_3_7Data;

  const leftContentsContainerRef = useRef<HTMLDivElement>(null);
  const leftContentsLength: number = leftContentsContainerRef.current
    ?.childNodes.length as number;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const { getContentComponent } = useContentMapper();

  const leftContents = useMemo(() => {
    if (!thisPage.leftContents) return;
    return thisPage.leftContents.map((leftContent, leftContentIndex) => {
      return getContentComponent(leftContent, leftContentIndex);
    });
  }, [thisPage, getContentComponent]);

  const rightContents = useMemo(() => {
    if (!thisPage.rightContents) return;
    return thisPage.rightContents.map((rightContent, rightContentIndex) => {
      return getContentComponent(rightContent, rightContentIndex);
    });
  }, [thisPage, getContentComponent]);

  const [leftContentsHeight, setLeftContentsHeight] = useState<number>(0);

  useEffect(() => {
    let totalHeight = 0;
    if (!leftContentsLength) return;
    for (let i = 0; i < leftContentsLength; i++) {
      if (!leftContentsContainerRef.current) return;
      totalHeight += getElementHeight(
        leftContentsContainerRef.current.children[i],
      );
    }
    setLeftContentsHeight(totalHeight);
  }, [leftContentsHeight, leftContentsLength]);

  useEffect(() => {
    if (
      !leftContentsContainerRef.current ||
      !leftContentsContainerRef.current.clientHeight ||
      !leftContentsHeight
    ) {
      return;
    }
    if (leftContentsContainerRef.current.clientHeight <= leftContentsHeight) {
      leftContentsContainerRef.current.style.justifyContent = "flex-start";
    }
  }, [leftContentsHeight]);

  return (
    <div className="layout-panel-wrap grid-h-3-7">
      <GuideContentContainer
        className="layout-panel side-panel"
        ref={leftContentsContainerRef}
      >
        {leftContents}
      </GuideContentContainer>
      <div className="layout-panel wide-panel">{rightContents}</div>
    </div>
  );
};

export default Template03;
