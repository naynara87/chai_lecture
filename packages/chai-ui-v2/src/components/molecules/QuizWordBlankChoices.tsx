import React from "react";

const QuizWordBlankChoices = () => {
  return (
    <div className="quiz-answer-wrap hori-answer-wrap answer-wrong">
      <div className="inp-grp">
        <input
          type="checkbox"
          name="answer1"
          id="answer1"
          className="inp-chck-line none"
          checked
          disabled
        />
        <label htmlFor="answer1" className="label-chck-line">
          <span className="text">{"冷"}</span>
          <span className="text-sm">{"lěng"}</span>
        </label>
      </div>
      <div className="inp-grp">
        <input
          type="checkbox"
          name="answer2"
          id="answer2"
          className="inp-chck-line none"
        />
        <label htmlFor="answer2" className="label-chck-line">
          <span className="text">{"首尔的"}</span>
          <span className="text-sm">{"Shǒu'ěr de"}</span>
        </label>
      </div>
      <div className="inp-grp">
        <input
          type="checkbox"
          name="answer3"
          id="answer3"
          className="inp-chck-line none"
        />
        <label htmlFor="answer3" className="label-chck-line">
          <span className="text">{"没有"}</span>
          <span className="text-sm">{"Méiyǒu"}</span>
        </label>
      </div>
      {/* TODO: key설명 선택한 단어는 disabled */}
      <div className="inp-grp">
        <input
          type="checkbox"
          name="answer4"
          id="answer4"
          className="inp-chck-line none"
          disabled
        />
        <label htmlFor="answer4" className="label-chck-line">
          <span className="text">{"北京"}</span>
          <span className="text-sm">{"beijing"}</span>
        </label>
      </div>
    </div>
  );
};

export default QuizWordBlankChoices;
