import styled from "@emotion/styled";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  ID,
  QuizData,
  TemplateProps,
  TemplateQuestionData,
  timeStamp,
} from "../../core";
import { LocalStorage } from "../../core";
import { useParams } from "react-router-dom";
import ArrowIcon from "../../assets/images/icon/icon_stick_arrow_right_white.svg";
import { colorPalette, vw } from "../../assets";

const QuestionPanel = styled.div`
  padding: 0;
  overflow-y: hidden;
`;

const LoadingText = styled.div`
  font-size: ${vw(32)};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  color: ${colorPalette.gray700};
`;
interface TemplateQuestionProps extends TemplateProps {
  handleClickCheckScore?: () => void;
  handleClickCheckAnswer?: () => void;
  pageIdx?: number;
  totalPages?: ID[];
}

const TemplateQuestion = ({
  template,
  setPageCompleted,
  handleClickCheckScore,
  handleClickCheckAnswer,
  pageIdx,
  totalPages,
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
        tmpPageDatas[pageIdx].timeStamp = timeStamp();
        LocalStorage.setItem("pageData", tmpPageDatas);
        handleClickCheckAnswer && handleClickCheckAnswer();
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
    if (pageIdx === undefined) return;
    if (totalPages === undefined) return;
    if (pageIdx + 1 >= totalPages?.length) {
      return (
        <button className="btn btn-problem" onClick={handleClickCheckScore}>
          <span>채점하기</span>
          <img src={ArrowIcon} alt="바로가기" />
        </button>
      );
    } else {
      return <></>;
    }
  }, [handleClickCheckScore, pageIdx, totalPages]);

  return (
    <div className="layout-panel-wrap">
      {/* <div className="question-number attched">{`[50 ~ 87]`}</div> */}
      <div className="question-number">{`${
        pageIdx !== undefined ? pageIdx + 1 : 0
      }번`}</div>
      <QuestionPanel className="layout-panel iframe-panel">
        {!isLoaded && <LoadingText>준비 중입니다.</LoadingText>}
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
