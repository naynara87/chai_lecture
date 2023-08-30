import React, { useMemo } from "react";
import { QuizData, useLmsInputValue } from "../../../core";

interface ComponentProblemUserInfoProps {
  quizPageData: QuizData[];
  quizTypeText: string;
  onClickReportBtn: () => void;
}

const ComponentProblemUserInfo = ({
  quizPageData,
  quizTypeText,
  onClickReportBtn,
}: ComponentProblemUserInfoProps) => {
  const { lmsInputValue: initialDataFromPhp } = useLmsInputValue();
  const score = useMemo(() => {
    const correctQuizPages = quizPageData.filter((quizPage) => {
      return quizPage.isCorrect;
    });
    return (100 / quizPageData.length) * correctQuizPages.length;
  }, [quizPageData]);

  const userName = useMemo(() => {
    return initialDataFromPhp?.name;
  }, [initialDataFromPhp]);

  const handleClickReport = () => {
    onClickReportBtn();
  };

  return (
    <div className="problem-user-info-wrap">
      <h3 className="user-title">
        {userName}님<br />
        <b>{quizTypeText}</b>
        <br />
        채점 결과
      </h3>
      <div className="score-wrapper">
        <div className="score">
          <b>{Math.round(score)}</b>점
        </div>
        <button
          type="button"
          onClick={handleClickReport}
          className="btn-problem-white-round btn"
        >
          내 성취도 보러가기
        </button>
      </div>
    </div>
  );
};

export default ComponentProblemUserInfo;
