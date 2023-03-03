import styled from "@emotion/styled";
import React, { useState } from "react";
import { vw } from "../../styles";
import { ComponentButtonFillBlack } from "../atoms";
import { LayoutModalSolution, LayoutModalVoca } from "../modal";
import ComponentContsInfo from "../molecules/ComponentContsInfo";
import ComponentRecordButton from "../molecules/ComponentRecordButton";

const QuizContainer = styled.form`
  .btn {
    width: ${vw(368)};
  }
`;

// FIXME: key 퀴즈가 아님. 각 요소들 component 화 하기

const TemplateQuizRecord = () => {
  const [isModalSolutionOpen, setIsModalSolutionOpen] = useState(false);
  const [isModalVocaOpen, setIsModalVocaOpen] = useState(false);

  return (
    <div className="layout-panel-wrap grid-h-3-7">
      <div className="layout-panel side-panel">
        <ComponentContsInfo text="다음 문장을 중국어로 말해 보세요." />
      </div>
      <div className="layout-panel wide-panel">
        <QuizContainer method="post" className="quiz-container">
          <div className="quiz-question-wrap">
            <p className="text-md">{`나는 피아노를 칠 줄 몰라, 
            네가 나를 좀 가르쳐 줘.`}</p>
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
      <LayoutModalSolution
        isModalOpen={isModalSolutionOpen}
        setIsModalOpen={setIsModalSolutionOpen}
      />
      <LayoutModalVoca
        isModalOpen={isModalVocaOpen}
        setIsModalOpen={setIsModalVocaOpen}
      />
    </div>
  );
};

export default TemplateQuizRecord;
