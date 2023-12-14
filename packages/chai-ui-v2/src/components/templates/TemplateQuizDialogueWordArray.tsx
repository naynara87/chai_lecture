import React, { useEffect, useMemo } from "react";
import { TemplateProps, TemplateQuizWordsInOrderData } from "../../core";
import { ActivityGuideCharacterComponent } from "../contents";
import WordsInOrderComponent from "../contents/WordsInOrderComponent";

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
          <div key={leftContent.id} ref={guideContentWrapperRef}>
            <ActivityGuideCharacterComponent contents={leftContent} />
          </div>
        );
      }
    });
  }, [thisPage]);

  return (
    <div className="layout-panel-wrap grid-h-3-7">
      <div
        ref={guideContentContainerRef}
        className="layout-panel side-panel flex-align-center flex-justify-center"
      >
        {leftContents}
      </div>
      <div className="layout-panel wide-panel">
        <div className="quiz-container quiz-container-word-array">
          {thisPage.wordsInOrder && (
            <WordsInOrderComponent contents={thisPage.wordsInOrder} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TemplateQuizDialogueWordArray;
