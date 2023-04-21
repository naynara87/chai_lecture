import styled from "@emotion/styled";
import React, { useEffect, useMemo } from "react";
import { vh } from "../../assets";
import { TemplateProps, TemplateQuizSpeakingData } from "../../core";
import FinalSpeakingComponent from "../contents/FinalSpeakingComponent";
import { ActivityGuideCharacterComponent } from "../contents";

const DialogueContainer = styled.div`
  .repeat-speak-wrapper {
    margin-top: ${vh(30)};
  }
`;

const GuideContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ActivityGuideCharacterComponentWrapper = styled.div``;

interface TemplateQuizSpeakingProps extends TemplateProps {}

const TemplateQuizSpeaking = ({
  template,
  setPageCompleted,
}: TemplateQuizSpeakingProps) => {
  const thisPage = template as TemplateQuizSpeakingData;

  const guideContentContainerRef = React.useRef<HTMLDivElement>(null);
  const containerHeight = guideContentContainerRef.current?.clientHeight;

  const guideContentWrapperRef = React.useRef<HTMLDivElement>(null);
  const contentHeight = guideContentWrapperRef.current?.clientHeight;

  useEffect(() => {
    if (
      !guideContentContainerRef.current ||
      !guideContentWrapperRef.current ||
      !containerHeight ||
      !contentHeight
    ) {
      return;
    }
    if (containerHeight <= contentHeight) {
      guideContentContainerRef.current.style.alignItems = "flex-start";
    }
  });

  const leftContents = useMemo(() => {
    if (!thisPage.leftContents) return;
    return thisPage.leftContents.map((leftContent) => {
      if (leftContent.type === "activityGuideCharacter") {
        return (
          <ActivityGuideCharacterComponentWrapper
            key={leftContent.id}
            ref={guideContentWrapperRef}
          >
            <ActivityGuideCharacterComponent contents={leftContent} />
          </ActivityGuideCharacterComponentWrapper>
        );
      }
    });
  }, [thisPage]);

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  return (
    <DialogueContainer className="layout-panel-wrap grid-h-3-7">
      <GuideContentContainer
        className="layout-panel side-panel"
        ref={guideContentContainerRef}
      >
        {leftContents}
      </GuideContentContainer>
      <div className="layout-panel wide-panel conversation-panel-wrap">
        {thisPage.rightContents && (
          <FinalSpeakingComponent contents={thisPage.rightContents} />
        )}
      </div>
    </DialogueContainer>
  );
};

export default TemplateQuizSpeaking;
