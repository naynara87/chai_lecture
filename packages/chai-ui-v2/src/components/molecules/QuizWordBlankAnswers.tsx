import React from "react";

const QuizWordBlankAnswers = () => {
  return (
    <div className="quiz-sentence-wrap">
      {/* TODO: key설명 클릭하면 클래스 active 추가됨 */}
      <div className="blank text active">
        <span className="">&nbsp;</span>
        <small className="sm">&nbsp;</small>
      </div>
      <div className="blank text">
        <span className="">{"北京"}</span>
        <small className="sm">{"beijing"}</small>
      </div>
      <div className="text">
        <span className="">{"冬天"}</span>
        <small className="sm">{"Dōngtiān"}</small>
      </div>
      <div className="blank text">
        <span className="">&nbsp;</span>
        <small className="sm">&nbsp;</small>
      </div>
      <div className="blank text">
        <span className="">&nbsp;</span>
        <small className="sm">&nbsp;</small>
      </div>
    </div>
  );
};

export default QuizWordBlankAnswers;
