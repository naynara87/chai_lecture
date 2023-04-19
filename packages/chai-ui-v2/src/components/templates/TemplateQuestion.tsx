import styled from "@emotion/styled";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { QuizData, TemplateProps, TemplateQuestionData } from "../../core";
import { LocalStorage } from "../../core";
import { useParams } from "react-router-dom";
import { LoadingSpinner } from "../atoms";
import ArrowIcon from "../../assets/images/icon/icon_stick_arrow_right_white.svg";

const QuestionPanel = styled.div`
  padding: 0;
  overflow-y: hidden;
`;

const LoadingSpinnerWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const LoadingSpinnerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

interface TemplateQuestionProps extends TemplateProps {
  handleClickCheckScore?: () => void;
  handleClickCheckAnswer?: (isCorrect: boolean) => void;
  pageIdx?: number;
}

const TemplateQuestion = ({
  template,
  setPageCompleted,
  handleClickCheckScore,
  handleClickCheckAnswer,
  pageIdx,
}: TemplateQuestionProps) => {
  const thisPage = template as TemplateQuestionData;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const { pageId } = useParams();

  useEffect(() => {
    setIsLoaded(false);
  }, [pageId]);

  const receiveMessage = useCallback(
    (event: MessageEvent) => {
      // event.data에는 iframe에서 보낸 메시지가 포함됩니다.
      if (pageIdx === undefined) return;
      const tmpPageDatas = LocalStorage.getItem("pageData") as QuizData[];
      // NOTE ms page index 받아서 page index active 추가
      if (tmpPageDatas != null) {
        const { correct, id, answer } = event.data as {
          correct: boolean;
          id: string;
          answer: string;
          contentId: string;
        };
        if (!id) return;
        tmpPageDatas[pageIdx].isCorrect = correct;
        tmpPageDatas[pageIdx].state = "end";
        tmpPageDatas[pageIdx].contentId = id;
        tmpPageDatas[pageIdx].answer = answer;
        LocalStorage.setItem("pageData", tmpPageDatas);
        handleClickCheckAnswer && handleClickCheckAnswer(correct);
      }
    },
    [pageIdx, handleClickCheckAnswer],
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
          <img src={ArrowIcon} alt="바로가기" />
        </button>
      );
    }
    return <></>;
  }, [handleClickCheckScore]);

  return (
    <div className="layout-panel-wrap">
      {/* <div className="question-number attched">{`[50 ~ 87]`}</div> */}
      <div className="question-number">{`${pageIdx !== undefined ? pageIdx + 1 : 0
        }번`}</div>
      <QuestionPanel className="layout-panel iframe-panel">
        {!isLoaded && (
          <LoadingSpinnerContainer>
            <LoadingSpinnerWrap>
              <LoadingSpinner />
            </LoadingSpinnerWrap>
          </LoadingSpinnerContainer>
        )}
        {thisPage.contents && (
          <iframe
            src={thisPage.contents.data.interact_url ?? ""}
            title={thisPage.id.toString()}
            onLoad={() => setIsLoaded(true)}
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            scrolling="no"
          ></iframe>
        )}
      </QuestionPanel>
      {toViewScoreButton}
    </div>
  );
};

export default TemplateQuestion;
