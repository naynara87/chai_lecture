import React from "react";
import { ImgTemp01Component } from "../atoms";
import ComponentButtonPlay from "../atoms/ComponentButtonPlay";
import ComponentButtonRadiBorderMain from "../atoms/ComponentButtonRadiBorderMain";
import ComponentButtonRadiFillMain from "../atoms/ComponentButtonRadiFillMain";
import { ComponentContsInfo } from "../molecules";
import QuizWordBlankAnswers from "../molecules/QuizWordBlankAnswers";
import QuizWordBlankChoices from "../molecules/QuizWordBlankChoices";

const TemplateQuizWordBlank = () => {
  return (
    <div className="layout-panel-wrap grid-h-3-7">
      <div className="layout-panel side-panel">
        <ComponentContsInfo text="단어를 올바른 순서에 맞게 선택해 문장을 완성해 보세요." />
      </div>
      <div className="layout-panel wide-panel">
        <form
          method="post"
          className="quiz-container quiz-container-word-blank"
        >
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
        </form>
      </div>
    </div>
  );
};

export default TemplateQuizWordBlank;
