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

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    function receiveMessage(event) {
      // event.data에는 iframe에서 보낸 메시지가 포함됩니다.
      console.log(123123)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      console.log('Received message:', event.data);
    }

    // message 이벤트를 수신하고 receiveMessage 함수를 호출합니다.
    window.addEventListener('message', receiveMessage);

    return () => {
      console.log(111)
      // 컴포넌트가 언마운트될 때 message 이벤트 리스너를 제거합니다.
      window.removeEventListener('message', receiveMessage);
    };
  }, []);

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
