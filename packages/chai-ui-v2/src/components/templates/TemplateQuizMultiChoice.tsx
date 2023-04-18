import styled from "@emotion/styled";
import React, { useEffect, useMemo } from "react";
import { TemplateProps, TemplateQuizMultiChoiceData } from "../../core";
import { ActivityGuideCharacterComponent } from "../contents";
import MultiChoiceComponent from "../contents/MultiChoiceComponent";

const QuizContainer = styled.div``;

const GuideContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ActivityGuideCharacterComponentWrapper = styled.div``;

interface TemplateQuizMultiChoiceProps extends TemplateProps {}

const TemplateQuizMultiChoice = ({
  template,
  setPageCompleted,
}: TemplateQuizMultiChoiceProps) => {
  const thisPage = template as TemplateQuizMultiChoiceData;

  const guideContentContainerRef = React.useRef<HTMLDivElement>(null);
  const containerHeight = guideContentContainerRef.current?.clientHeight;

  const guideContentWrapperRef = React.useRef<HTMLDivElement>(null);
  const contentHeight = guideContentWrapperRef.current?.clientHeight;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

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

  return (
    <div className="layout-panel-wrap grid-h-3-7">
      <GuideContentContainer
        ref={guideContentContainerRef}
        className="layout-panel side-panel"
      >
        {leftContents}
      </GuideContentContainer>
      <div className="layout-panel wide-panel">
        <QuizContainer className="quiz-container">
          {thisPage.multiChoice && (
            <MultiChoiceComponent contents={thisPage.multiChoice} />
          )}
          {/* <GrayRadioBoxes /> */}
        </QuizContainer>
      </div>
    </div>
  );
};

export default TemplateQuizMultiChoice;
