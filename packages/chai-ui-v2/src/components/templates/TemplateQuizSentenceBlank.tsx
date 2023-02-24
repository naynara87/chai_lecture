import styled from "@emotion/styled";
import React, { useState } from "react";
import ComponentTitle from "../molecules/ComponentTitle";
import { LayoutModalSolution, LayoutModalVoca } from "../modal";
import {
  ComponentButtonRadiBorderMain,
  ComponentButtonRadiFillMain,
} from "../atoms";
import LineCheckBoxes from "../molecules/LineCheckBoxes";
import DialogueSentenceBlank from "../molecules/DialogueSentenceBlank";

const DialogueContainer = styled.div`
  .blank-gray {
    margin-right: 2%;
    min-width: 40%;
    max-width: 100%;
    text-align: left;
  }

  .conversation-wrap .chinese {
    display: inline;
    word-break: break-all;
  }
`;

const QuizContainer = styled.form`
  .hori-answer-wrap .inp-grp {
    flex-basis: 100%;
  }
`;

const TemplateQuizSentenceBlank = () => {
  const [isModalSolutionOpen, setIsModalSolutionOpen] = useState(false);
  const [isModalVocaOpen, setIsModalVocaOpen] = useState(false);

  return (
    <DialogueContainer className="layout-panel-wrap grid-h-5-5">
      <div className="layout-panel side-panel conversation-panel-wrap">
        <ComponentTitle text="자연스러운 단문이 되도록 문장을 배열해 보세요." />
        {/* 230217 회화영역 */}
        <ul className="conversation-wrapper">
          {/* speech bubble */}
          <DialogueSentenceBlank />
          {/* end speech bubble */}
        </ul>
      </div>
      <div className="layout-panel wide-panel">
        <QuizContainer method="post" className="quiz-container">
          <div className="quiz-answer-wrap hori-answer-wrap">
            <LineCheckBoxes />
          </div>
        </QuizContainer>
        <div className="btns-wrap">
          <ComponentButtonRadiBorderMain text="다시하기" />
          <ComponentButtonRadiFillMain text="제출하기" />
        </div>
      </div>
      <LayoutModalSolution
        isModalOpen={isModalSolutionOpen}
        setIsModalOpen={setIsModalSolutionOpen}
      />
      <LayoutModalVoca
        isModalOpen={isModalVocaOpen}
        setIsModalOpen={setIsModalVocaOpen}
      />
    </DialogueContainer>
  );
};

export default TemplateQuizSentenceBlank;
