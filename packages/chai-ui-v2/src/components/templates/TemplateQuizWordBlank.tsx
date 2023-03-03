import styled from "@emotion/styled";
import React, { useState } from "react";
import { vh, vw } from "../../styles";
import { ImgTemp01Component } from "../atoms";
import ComponentButtonPlay from "../atoms/ComponentButtonPlay";
import ComponentButtonRadiBorderMain from "../atoms/ComponentButtonRadiBorderMain";
import ComponentButtonRadiFillMain from "../atoms/ComponentButtonRadiFillMain";
import { LayoutModalSolution, LayoutModalVoca } from "../modal";
import { ComponentContsInfo } from "../molecules";
import QuizWordBlankAnswers from "../molecules/QuizWordBlankAnswers";
import QuizWordBlankChoices from "../molecules/QuizWordBlankChoices";

const QuizContainer = styled.form`
  .quiz-question-wrap {
    .btn-icon {
      margin-top: ${vh(40)};
    }
  }

  .hori-answer-wrap .inp-grp {
    flex-basis: auto;
  }

  .label-chck-line .text {
    font-size: ${vw(22)};
  }

  > .btns-wrap {
    max-width: 382px;
    margin: 0 auto;

    .btn {
      height: ${vh(62)};
      font-size: ${vw(22)};
    }
  }
`;

const TemplateQuizWordBlank = () => {
  const [isModalSolutionOpen, setIsModalSolutionOpen] = useState(false);
  const [isModalVocaOpen, setIsModalVocaOpen] = useState(false);

  return (
    <div className="layout-panel-wrap grid-h-3-7">
      <div className="layout-panel side-panel">
        <ComponentContsInfo text="단어를 올바른 순서에 맞게 선택해 문장을 완성해 보세요." />
      </div>
      <div className="layout-panel wide-panel">
        <QuizContainer method="post" className="quiz-container">
          <div className="quiz-question-wrap">
            <ImgTemp01Component />
            <div className="btns-wrap">
              <ComponentButtonPlay />
            </div>
          </div>
          <QuizWordBlankAnswers />
          {/* TODO: key설명 정답확인후 정답일 때 answer-right 추가 */}
          {/* TODO: key설명 정답확인후 오답일 때 answer-wrong 추가 */}
          <QuizWordBlankChoices />
          <div className="btns-wrap">
            <ComponentButtonRadiBorderMain text="다시하기" />
            <ComponentButtonRadiFillMain text="정답확인" />
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

export default TemplateQuizWordBlank;
