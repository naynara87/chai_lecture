import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { TemplateProps } from "../../core";
import { ImgTemp01Component } from "../atoms";
import ComponentButtonPlay from "../atoms/ComponentButtonPlay";
import ComponentButtonRadiBorderMain from "../atoms/ComponentButtonRadiBorderMain";
import ComponentButtonRadiFillMain from "../atoms/ComponentButtonRadiFillMain";
import { LayoutModalSolution, LayoutModalVoca } from "../modal";
import { ComponentContsInfo } from "../molecules";

const QuizContainer = styled.form`
  .quiz-question-wrap {
    .btn-icon {
      // 40px
      margin-top: 3.33vh;
    }
  }

  .hori-answer-wrap .inp-grp {
    flex-basis: auto;
  }

  .label-chck-line .text {
    // 22px
    font-size: 1.1vw;
  }

  > .btns-wrap {
    max-width: 382px;
    margin: 0 auto;

    .btn {
      // 62px;
      height: 5.1vh;
      // 22px
      font-size: 1.1vw;
    }
  }
`;

interface TemplateQuizWordBlankProps extends TemplateProps {}

const TemplateQuizWordBlank = ({
  page,
  setPageCompleted,
}: TemplateQuizWordBlankProps) => {
  const [isModalSolutionOpen, setIsModalSolutionOpen] = useState(false);
  const [isModalVocaOpen, setIsModalVocaOpen] = useState(false);

  useEffect(() => {
    setPageCompleted();
    console.log(page);
  }, [setPageCompleted, page]);

  return (
    <div className="layout-panel-wrap grid-h-3-7">
      <div className="layout-panel side-panel">
        <ComponentContsInfo
          text="단어를 올바른 순서에 맞게
선택해 문장을
완성해 보세요."
        />
      </div>
      <div className="layout-panel wide-panel">
        <QuizContainer method="post" className="quiz-container">
          <div className="quiz-question-wrap">
            <ImgTemp01Component />
            <div className="btns-wrap">
              <ComponentButtonPlay />
            </div>
          </div>
          <div className="quiz-sentence-wrap">
            {/* TODO: key설명 클릭하면 클래스 active 추가됨 */}
            <div className="blank text active">
              <span className="">&nbsp;</span>
              <small className="sm">&nbsp;</small>
            </div>
            <div className="blank text">
              <span className="">{"北京"}</span>
              <small className="sm">{"beijing"}</small>
            </div>
            <div className="text">
              <span className="">{"冬天"}</span>
              <small className="sm">{"Dōngtiān"}</small>
            </div>
            <div className="blank text">
              <span className="">&nbsp;</span>
              <small className="sm">&nbsp;</small>
            </div>
            <div className="blank text">
              <span className="">&nbsp;</span>
              <small className="sm">&nbsp;</small>
            </div>
          </div>
        {/* TODO: key설명 정답확인후 정답일 때 answer-right 추가 */}
        {/* TODO: key설명 정답확인후 오답일 때 answer-wrong 추가 */}
          <div className="quiz-answer-wrap hori-answer-wrap answer-wrong">
            <div className="inp-grp">
              <input type="checkbox" name="answer1" id="answer1" className="inp-chck-line none" checked disabled />
              <label htmlFor="answer1" className="label-chck-line">
                <span className="text">{"冷"}</span>
                <span className="text-sm">{"lěng"}</span>
              </label>
            </div>
            <div className="inp-grp">
              <input
                type="checkbox"
                name="answer2"
                id="answer2"
                className="inp-chck-line none"
              />
              <label htmlFor="answer2" className="label-chck-line">
                <span className="text">{"首尔的"}</span>
                <span className="text-sm">{"Shǒu'ěr de"}</span>
              </label>
            </div>
            <div className="inp-grp">
              <input
                type="checkbox"
                name="answer3"
                id="answer3"
                className="inp-chck-line none"
              />
              <label htmlFor="answer3" className="label-chck-line">
                <span className="text">{"没有"}</span>
                <span className="text-sm">{"Méiyǒu"}</span>
              </label>
            </div>
            {/* TODO: key설명 선택한 단어는 disabled */}
            <div className="inp-grp">
              <input
                type="checkbox"
                name="answer4"
                id="answer4"
                className="inp-chck-line none"
                disabled
              />
              <label htmlFor="answer4" className="label-chck-line">
                <span className="text">{"北京"}</span>
                <span className="text-sm">{"beijing"}</span>
              </label>
            </div>
          </div>
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
