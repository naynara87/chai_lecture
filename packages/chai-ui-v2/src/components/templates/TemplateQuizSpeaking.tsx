import styled from "@emotion/styled";
import React, { useEffect, useMemo } from "react";
import { vh } from "../../assets";
import {
  TemplateProps,
  TemplateQuizSpeakingData,
  useContentMapper,
} from "../../core";
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

  const { getContentComponent } = useContentMapper();

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const leftContents = useMemo(() => {
    return thisPage.leftContents.map((leftContent, contentIndex) => {
      return getContentComponent(leftContent, contentIndex);
    });
  }, [getContentComponent, thisPage]);

  return (
    <DialogueContainer className="layout-panel-wrap grid-h-3-7">
      <div className="layout-panel side-panel">{leftContents}</div>
      <div className="layout-panel wide-panel conversation-panel-wrap">
        <FinalSpeakingComponent contents={thisPage.rightContents} />
      </div>
    </DialogueContainer>
  );
};

export default TemplateQuizSpeaking;
