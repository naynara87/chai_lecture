import styled from "@emotion/styled";
import React from "react";
import LayoutModal from "../molecules/LayoutModal";
import LayoutModalVoca from "../molecules/LayoutModalVoca";
import ComponentButtonFillBlack from "../molecules/ComponentButtonFillBlack";
import ComponentContsInfo from "../molecules/ComponentContsInfo";
import ComponentRecordButton from "../molecules/ComponentRecordButton";

const QuizContainer = styled.form`
.btn {
  /* 368px */
  width: 18.4vw;
}
`;

const TemplateQuizRecord = () => {

  return (
    <div className="layout-panel-wrap grid-h-3-7">
      <div className="layout-panel side-panel">
        <ComponentContsInfo text="다음 문장을 중국어로 말해 보세요." />
      </div>
      <div className="layout-panel wide-panel">
      <QuizContainer method="post" className="quiz-container">
          <div className="quiz-question-wrap">
            <p className="text-sm">{ `나는 피아노를 칠 줄 몰라, 
            네가 나를 좀 가르쳐 줘.` }</p>
          </div>
          <div className="quiz-answer-wrap">
            <ComponentRecordButton />
          </div>
          <div className="btns-wrap">
            {/* TODO: key설명 - 녹음 파일이 없을 때에는 disabled 상태 */}
            <ComponentButtonFillBlack text="녹음 파일 제출" />
          </div>
        </QuizContainer>
      </div>
      <LayoutModal />
      <LayoutModalVoca />
    </div>
  );
};

export default TemplateQuizRecord;
