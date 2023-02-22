import styled from "@emotion/styled";
import React from "react";
import LayoutModal from "../molecules/LayoutModal";
import LayoutModalVoca from "../molecules/LayoutModalVoca";
import ComponentButtonFillBlack from "../molecules/ComponentButtonFillBlack";
import ComponentButtonSpeaker from "../molecules/ComponentButtonSpeaker";
import ComponentContsInfo from "../molecules/ComponentContsInfo";

const QuizContainer = styled.form`
`;

const TemplateQuizWordBlank = () => {

  return (
    <div className="layout-panel-wrap grid-h-3-7">
      <div className="layout-panel side-panel">
        <ComponentContsInfo text="단어를 올바른 순서에 맞게
선택해 문장을
완성해 보세요." />
      </div>
      <div className="layout-panel wide-panel">
        <QuizContainer method="post" className="quiz-container">
          <div className="quiz-question-wrap">
            <div className="btns-wrap">
              <ComponentButtonSpeaker />
            </div>
            <p className="text-md">{`这道菜酸、甜、苦、辣，什么`}<span className="blank-gray">&nbsp;</span>
              {`都有，非常香。`}</p>
            <p className="text-sm">{`이 요리는 시고, 달고, 쓰고, 매운 모든 맛이
다 있어서 무척 맛있어요.` }</p>
          </div>
          <div className="quiz-answer-wrap hori-answer-wrap">
            <div className="inp-grp">
              <input type="radio" name="answer" id="answer1" className="inp-chck-gray none" />
              <label htmlFor="answer1" className="label-chck-gray"><span className="text">{"胃口"}</span></label>
            </div>
            <div className="inp-grp">
              <input type="radio" name="answer" id="answer2" className="inp-chck-gray none" />
              <label htmlFor="answer2" className="label-chck-gray"><span className="text">{"味道"}</span></label>
            </div>
          </div>
        </QuizContainer>
      </div>
      <LayoutModal />
      <LayoutModalVoca />
    </div>
  );
};

export default TemplateQuizWordBlank;
