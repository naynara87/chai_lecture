import React, { useMemo } from "react";

const ComponentQuizDialogueWordBlankSelectBoxes = () => {
  const selectBoxes = useMemo(() => {
    // TODO kjw quizDialogueWordBlank관련 데이터 타입 설계되면 로직구성
    return (
      <>
        <div className="inp-grp">
          <input
            type="radio"
            name="answer1"
            id="answer1-1"
            className="inp-chck-line none"
          />
          <label htmlFor="answer1-1" className="label-chck-line">
            <span className="text">{"胃口"}</span>
          </label>
        </div>
        <div className="inp-grp">
          <input
            type="radio"
            name="answer1"
            id="answer1-2"
            className="inp-chck-line none"
          />
          <label htmlFor="answer1-2" className="label-chck-line">
            <span className="text">{"味道"}</span>
          </label>
        </div>
      </>
    );
  }, []);

  return <div className="quiz-answer-wrap hori-answer-wrap">{selectBoxes}</div>;
};

export default ComponentQuizDialogueWordBlankSelectBoxes;
