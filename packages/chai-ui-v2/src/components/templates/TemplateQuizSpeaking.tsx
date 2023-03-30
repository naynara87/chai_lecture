import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { vh } from "../../assets";
import { TemplateProps, TemplateQuizSpeakingData } from "../../core";
import { ActivityGuideCharacterComponent } from "../contents";
import FinalSpeakingComponent from "../contents/FinalSpeakingComponent";

const DialogueContainer = styled.div`
  .repeat-speak-wrapper {
    margin-top: ${vh(20)};
  }
`;

interface TemplateQuizSpeakingProps extends TemplateProps {}

const TemplateQuizSpeaking = ({
  template,
  setPageCompleted,
}: TemplateQuizSpeakingProps) => {
  const thisPage = template as TemplateQuizSpeakingData;

  console.log(thisPage);

  // const { getContentComponent } = useContentMapper();

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  return (
    <DialogueContainer className="layout-panel-wrap grid-h-3-7">
      <div className="layout-panel side-panel">
        {/* {leftContents} */}
        {thisPage.leftContents && (
          <ActivityGuideCharacterComponent contents={thisPage.leftContents} />
        )}
      </div>
      <div className="layout-panel wide-panel conversation-panel-wrap">
        {thisPage.rightContents && (
          <FinalSpeakingComponent contents={thisPage.rightContents} />
        )}
      </div>
    </DialogueContainer>
  );
};

export default TemplateQuizSpeaking;
