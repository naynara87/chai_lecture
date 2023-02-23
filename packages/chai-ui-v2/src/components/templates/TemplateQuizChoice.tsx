import styled from "@emotion/styled";
import React, { useState } from "react";
import { LayoutModalSolution, LayoutModalVoca } from "../modal";
import ComponentContsInfo from "../molecules/ComponentContsInfo";
import ComponentQuizSelectBoxes from "../molecules/ComponentQuizSelectBoxes";

const QuizContainer = styled.form``;

const TemplateQuizChoice = () => {
  const [isModalSolutionOpen, setIsModalSolutionOpen] = useState(false);
  const [isModalVocaOpen, setIsModalVocaOpen] = useState(false);

  return (
    <div className="layout-panel-wrap grid-h-3-7">
      <div className="layout-panel side-panel">
        <ComponentContsInfo text="지난 시간엔 성조의 변화에 대해 학습했어요. 내용이 맞으면 O, 틀리면 X를 선택하세요." />
      </div>
      <div className="layout-panel wide-panel">
        <QuizContainer method="post" className="quiz-container">
          <div className="quiz-question-wrap">
            {/* FIXME 저작도구에서 글자크기에대해 입력시 고려해야함. */}
            <p className="text-md">{`제3성이 연이어 나올 때, 올바르게 발음한 것을 고르세요.`}</p>
            <p className="text-lg">{`在`}</p>
          </div>
          {/* TODO: key설명 - 클릭하면 input들 disabled 되고, 
          정답이면 answer-right 오답이면 answer-wrong 클래스 추가 */}
          <ComponentQuizSelectBoxes />
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

export default TemplateQuizChoice;
