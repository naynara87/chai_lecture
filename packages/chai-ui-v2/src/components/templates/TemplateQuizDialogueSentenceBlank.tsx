import React from "react";
import ComponentTitle from "../molecules/ComponentTitle";
import {
  ComponentButtonRadiBorderMain,
  ComponentButtonRadiFillMain,
} from "../atoms";

const TemplateQuizDialogueSentenceBlank = () => {
  return (
    <div className="layout-panel-wrap grid-h-5-5 dialogue-container dialogue-container-sentence-blank">
      <div className="layout-panel side-panel conversation-panel-wrap">
        <ComponentTitle text="자연스러운 단문이 되도록 문장을 배열해 보세요." />
        {/* 230217 회화영역 */}
        <ul className="conversation-wrapper">
          {/* speech bubble */}
          {/* <DialogueSentenceBlank /> */}
        </ul>
      </div>
      <div className="layout-panel wide-panel">
        <form method="post" className="quiz-container">
          <div className="quiz-answer-wrap hori-answer-wrap">
            {/* <LineCheckBoxes /> */}
          </div>
        </form>
        <div className="btns-wrap">
          <ComponentButtonRadiBorderMain text="다시하기" />
          <ComponentButtonRadiFillMain text="제출하기" />
        </div>
      </div>
    </div>
  );
};

export default TemplateQuizDialogueSentenceBlank;
