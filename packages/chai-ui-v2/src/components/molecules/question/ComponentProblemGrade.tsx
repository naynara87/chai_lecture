import React, { useMemo } from "react";
import { QuizData } from "../../../core";
import IconRight from "../../../assets/images/icon/icon_problem_o.svg";
import IconWrong from "../../../assets/images/icon/icon_problem_x.svg";

interface ComponentProblemGradeProps {
  quizPageData: QuizData[];
  quizPageIdx: number;
  onClickGradePageIdx: (pageIdx: number) => void;
}

const ComponentProblemGrade = ({
  quizPageData,
  quizPageIdx,
  onClickGradePageIdx,
}: ComponentProblemGradeProps) => {
  const gradeBoxes = useMemo(() => {
    return quizPageData.map((quizPage) => {
      return (
        <li className="problem-grade" key={quizPage.id}>
          <button
            className={`btn-grade ${
              quizPageIdx + 1 === quizPage.id ? "active" : ""
            }`}
            onClick={() =>
              onClickGradePageIdx(parseInt(quizPage.id.toString()) - 1)
            }
          >
            <span>{quizPage.id}</span>
            <div className="img-wrap">
              <img
                src={quizPage.isCorrect ? IconRight : IconWrong}
                alt={quizPage.isCorrect ? "정답" : "오답"}
              />
            </div>
          </button>
        </li>
      );
    });
  }, [quizPageData, quizPageIdx, onClickGradePageIdx]);

  return (
    <div className="problem-grade-wrapper">
      <ul className="problem-grade-wrap">{gradeBoxes}</ul>
    </div>
  );
};

export default ComponentProblemGrade;
