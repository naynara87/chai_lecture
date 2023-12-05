import styled from "@emotion/styled";
import React, { useEffect, useMemo } from "react";
import { TemplateProps, TemplateQuizWordsInOrderData } from "../../core";
import { ActivityGuideCharacterComponent } from "../contents";
import WordsInOrderComponent from "../contents/WordsInOrderComponent";

const QuizContainer = styled.div`
  .quiz-question-wrap {
    .btn-icon {
      margin-top: 4vmin;
    }
  }

  .conversation-wrap .img-wrap {
    margin-right: 0;
  }

  .hori-answer-wrap .inp-grp {
    flex-basis: auto;
  }

  .label-chck-line .text {
    font-size: 2vmin;
  }

  .conversation-wrap:not(:first-of-type) {
    margin-top: 0;
  }

  > .btns-wrap {
    max-width: 50%;
    margin: 3vmin auto;

    .btn {
      font-size: 2.6vmin;
    }
  }
`;

const GuideContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ActivityGuideCharacterComponentWrapper = styled.div``;

interface TemplateQuizDialogueWordArrayProps extends TemplateProps {}

const TemplateQuizDialogueWordArray = ({
  template,
  setPageCompleted,
}: TemplateQuizDialogueWordArrayProps) => {
  const thisPage = template as TemplateQuizWordsInOrderData;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

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
          {thisPage.wordsInOrder && (
            <WordsInOrderComponent contents={thisPage.wordsInOrder} />
          )}
        </QuizContainer>
      </div>
    </div>
  );
};

export default TemplateQuizDialogueWordArray;
