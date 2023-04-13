import React, { useMemo } from "react";
import { useRecoilState } from "recoil";
import { QuizData, userNameState } from "../../../core";

interface ComponentProblemUserInfoProps {
  quizPageData: QuizData[];
  quizTypeText: string;
}

const ComponentProblemUserInfo = ({
  quizPageData,
  quizTypeText,
}: ComponentProblemUserInfoProps) => {
  const [userName] = useRecoilState(userNameState);

  const score = useMemo(() => {
    const correctQuizPages = quizPageData.filter((quizPage) => {
      return quizPage.isCorrect;
    });
    return (100 / quizPageData.length) * correctQuizPages.length;
  }, [quizPageData]);

  return (
    <div className="problem-user-info-wrap">
      <h3 className="user-title">
        {/* TODO 세션데이터받아와서 이름 변경해주기 */}
        {userName}님<br />
        <b>{quizTypeText}</b>
        <br />
        채점 결과
      </h3>
      <div className="score-wrapper">
        <div className="score">
          <b>{Math.floor(score)}</b>점
        </div>
        <button type="button" className="btn-problem-white-round btn">
          내 성취도 보러가기
        </button>
      </div>
    </div>
  );
};

export default ComponentProblemUserInfo;
