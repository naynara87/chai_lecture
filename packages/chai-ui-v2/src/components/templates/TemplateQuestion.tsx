import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { TemplateProps, TemplateQuestionData } from "../../core";

const QuestionPanel = styled.div`
  padding: 0;
`;

interface TemplateQuestionProps extends TemplateProps {}

const TemplateQuestion = ({
  template,
  setPageCompleted,
}: TemplateQuestionProps) => {
  const thisPage = template as TemplateQuestionData;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  return (
    <div className="layout-panel-wrap">
      <QuestionPanel className="layout-panel">
        <iframe
          src={thisPage.contents.data.iframeUrl}
          title={thisPage.id.toString()}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          scrolling="no"
        ></iframe>
      </QuestionPanel>
    </div>
  );
};

export default TemplateQuestion;
