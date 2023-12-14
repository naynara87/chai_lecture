import React, { useEffect, useMemo } from "react";
import { TemplateProps, TemplateQuizSpeakingData } from "../../core";
import FinalSpeakingComponent from "../contents/FinalSpeakingComponent";
import { ActivityGuideCharacterComponent } from "../contents";

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
          <div key={leftContent.id} ref={guideContentWrapperRef}>
            <ActivityGuideCharacterComponent contents={leftContent} />
          </div>
        );
      }
    });
  }, [thisPage]);

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  return (
    <div className="layout-panel-wrap grid-h-3-7 dialogue-container dialogue-container-quiz-speaking">
      <div
        className="layout-panel side-panel flex-align-center flex-justify-center"
        ref={guideContentContainerRef}
      >
        {leftContents}
      </div>
      <div className="layout-panel wide-panel conversation-panel-wrap">
        {thisPage.rightContents && (
          <FinalSpeakingComponent contents={thisPage.rightContents} />
        )}
      </div>
    </div>
  );
};

export default TemplateQuizSpeaking;
