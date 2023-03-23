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

  const receiveMessage = (event: MessageEvent) => {
    // event.data에는 iframe에서 보낸 메시지가 포함됩니다.
    console.log(123123);
    console.log("Received message:", event.data);
  };

  useEffect(() => {
    window.addEventListener("message", receiveMessage);
    return () => {
      window.removeEventListener("message", receiveMessage);
    };
  }, []);

  return (
    <div className="layout-panel-wrap">
      <div className="question-number attched">{`[50 ~ 87]`}</div>
      <div className="question-number">{`55번`}</div>
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
