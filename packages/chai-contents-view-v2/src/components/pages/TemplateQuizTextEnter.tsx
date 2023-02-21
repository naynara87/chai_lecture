import styled from "@emotion/styled";
import React from "react";
import ComponentButtonFillBlack from "../molecules/ComponentButtonFillBlack";
import ComponentTitle from "../molecules/ComponentTitle";
import LayoutModal from "../molecules/LayoutModal";
import LayoutModalVoca from "../molecules/LayoutModalVoca";

const QuizContainer = styled.form`
  /* 660px */
  max-width: 33vw;
`;

const TemplateQuizTextEnter = () => {

  return (
    <div className="layout-panel-wrap">
      <div className="layout-panel">
        <ComponentTitle text="빈칸을 채워 단어를 완성해 보세요." />
        <QuizContainer method="post" className="quiz-container">
          <div className="quiz-question-wrap">
            <p className="text-lg">{ `兴` }<span className="blank-line">&nbsp;</span>{ `兴` }</p>
            <p className="text-md">{"기쁘다"}</p>
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
    </div>
  );
};

export default TemplateQuizTextEnter;
