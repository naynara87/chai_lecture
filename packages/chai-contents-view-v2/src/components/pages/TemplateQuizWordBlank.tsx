import styled from "@emotion/styled";
import React from "react";
import LayoutModal from "../molecules/LayoutModal";
import LayoutModalVoca from "../molecules/LayoutModalVoca";
import ComponentButtonFillBlack from "../molecules/ComponentButtonFillBlack";

const QuizContainer = styled.form`
`;

const TemplateQuizWordBlank = () => {

  return (
    <div className="layout-panel-wrap grid-h-3-7">
      <div className="layout-panel side-panel">
        1234
      </div>
      <div className="layout-panel wide-panel">
        <QuizContainer method="post" className="quiz-container">
          <div className="quiz-question-wrap">
            <p className="text">{`兴`}<span className="blank"></span>{`兴`}</p>
            <p className="text-sm">{"기쁘다"}</p>
          </div>
          <div className="quiz-answer-wrap">
            <input type="text" className="inp-txt" placeholder="빈칸에 들어갈 중국어를 입력하세요." />
          </div>
          <div className="btns-wrap">
            <ComponentButtonFillBlack text="확인" />
          </div>
        </QuizContainer>
      </div>
      <LayoutModal />
      <LayoutModalVoca />
    </div >
  );
};

export default TemplateQuizWordBlank;
