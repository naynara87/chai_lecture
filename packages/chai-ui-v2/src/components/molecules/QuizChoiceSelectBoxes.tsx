import React, { useMemo } from "react";

const QuizChoiceSelectBoxes = () => {
  // TODO kjw quizChoice관련 데이터 타입 설계되면 로직구성
  const textBoxes = useMemo(() => {
    return (
      <>
        <div className="inp-grp">
          <input
            type="radio"
            name="answer"
            id="answer1"
            className="inp-chck-gray none"
          />
          <label htmlFor="answer1" className="label-chck-gray">
            <span className="text">{"제2성+제3성"}</span>
          </label>
        </div>
        <div className="inp-grp">
          <input
            type="radio"
            name="answer"
            id="answer2"
            className="inp-chck-gray none"
          />
          <label htmlFor="answer2" className="label-chck-gray">
            <span className="text">{"제3성+제3성"}</span>
          </label>
        </div>
      </>
    );
  }, []);

  return <div className="quiz-answer-wrap hori-answer-wrap">{textBoxes}</div>;
};

export default QuizChoiceSelectBoxes;
