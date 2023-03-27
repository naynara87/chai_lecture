import styled from "@emotion/styled";
import React, { useCallback, useEffect, useMemo } from "react";
import { QuizData, TemplateProps, TemplateQuestionData } from "../../core";
import { LocalStorage } from "../../core";
import { useParams } from "react-router-dom";

const QuestionPanel = styled.div`
  padding: 0;
`;

interface TemplateQuestionProps extends TemplateProps {
  handleClickCheckScore?: () => void;
}

const TemplateQuestion = ({
  template,
  setPageCompleted,
  handleClickCheckScore,
}: TemplateQuestionProps) => {
  const thisPage = template as TemplateQuestionData;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const { pageId } = useParams();

  const receiveMessage = useCallback(
    (event: MessageEvent) => {
      // event.data에는 iframe에서 보낸 메시지가 포함됩니다.
      if (!pageId) return;
      const tmpPageDatas = LocalStorage.getItem("pageData") as QuizData[];
      // NOTE ms page index 받아서 page index active 추가
      if (tmpPageDatas != null) {
        const { message } = event.data as {
          message: {
            correct: boolean;
            id: string;
            answer: string;
          };
        };
        tmpPageDatas[parseInt(pageId) - 1].isCorrect = message.correct;
        tmpPageDatas[parseInt(pageId) - 1].state = "end";
        LocalStorage.setItem("pageData", tmpPageDatas);
      }
      console.log(123123);
      console.log("Received message:", event.data);
    },
    [pageId],
  );

  useEffect(() => {
    window.addEventListener("message", receiveMessage);
    return () => {
      window.removeEventListener("message", receiveMessage);
    };
  }, [receiveMessage]);

  const toViewScoreButton = useMemo(() => {
    const quizPageData = LocalStorage.getItem("pageData") as QuizData[];
    if (
      quizPageData.find((quizPage) => quizPage.state !== "end") === undefined
    ) {
      return (
        <button className="btn btn-problem" onClick={handleClickCheckScore}>
          <span>채점하기</span>
          {/* <img src={BtnIcon} alt="바로가기아이콘" /> */}
        </button>
      );
    }
    return <></>;
  }, [handleClickCheckScore]);

  return (
    <div className="layout-panel-wrap">
      <div className="question-number attched">{`[50 ~ 87]`}</div>
      <div className="question-number">{`${pageId}번`}</div>
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
      {toViewScoreButton}
    </div>
  );
};

export default TemplateQuestion;
