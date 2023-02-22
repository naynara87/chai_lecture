import styled from "@emotion/styled";
import React from "react";
import LayoutModal from "../molecules/LayoutModal";
import LayoutModalVoca from "../molecules/LayoutModalVoca";
import ComponentContsInfo from "../molecules/ComponentContsInfo";

const QuizContainer = styled.form`
`;

const TemplateQuizChoice = () => {

  return (
    <div className="layout-panel-wrap grid-h-3-7">
      <div className="layout-panel side-panel">
        <ComponentContsInfo text="지난 시간엔 성조의 변화에 대해
학습했어요. 내용이 맞으면 O,
틀리면 X를 선택하세요." />
      </div>
      <div className="layout-panel wide-panel">
        <QuizContainer method="post" className="quiz-container">
          <div className="quiz-question-wrap">
            <p className="text-md">{`제3성이 연이어 나올 때,
올바르게 발음한 것을 고르세요.`}</p>
            <p className="text-lg">{`在`}</p>
          </div>
          {/* TODO: key설명 - 클릭하면 input들 disabled 되고, 
          정답이면 answer-right 오답이면 answer-wrong 클래스 추가 */}
          <div className="quiz-answer-wrap hori-answer-wrap answer-wrong">
            <div className="inp-grp">
              <input type="radio" name="answer" id="answer1" className="inp-chck-gray none" />
              <label htmlFor="answer1" className="label-chck-gray"><span className="text">{"제2성+제3성"}</span></label>
            </div>
            <div className="inp-grp">
              <input type="radio" name="answer" id="answer2" className="inp-chck-gray none" />
              <label htmlFor="answer2" className="label-chck-gray"><span className="text">{"제3성+제3성"}</span></label>
            </div>
          </div>
        </QuizContainer>
      </div>
      <LayoutModal />
      <LayoutModalVoca />
    </div>
  );
};

export default TemplateQuizChoice;
