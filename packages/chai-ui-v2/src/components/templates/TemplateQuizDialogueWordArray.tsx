import styled from "@emotion/styled";
import React from "react";
import { vh, vw } from "../../styles";
import { ImgProfileDefaultComponent } from "../atoms";
import ComponentButtonRadiBorderMain from "../atoms/ComponentButtonRadiBorderMain";
import ComponentButtonRadiFillMain from "../atoms/ComponentButtonRadiFillMain";
import { ComponentContsInfo } from "../molecules";
import ComponentGrayLine from "../molecules/ComponentGrayLine";

const QuizContainer = styled.form`
  .quiz-question-wrap {
    .btn-icon {
      margin-top: ${vh(40)};
    }
  }

  .conversation-wrap .img-wrap {
    margin-right: 0;
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

const TemplateQuizDialogueWordArray = () => {
  return (
    <div className="layout-panel-wrap grid-h-3-7">
      <div className="layout-panel side-panel">
        <ComponentContsInfo text="주어진 우리말을 보고 단어를 올바른 순서에 맞게 선택해 문장을 완성해 보세요." />
      </div>
      <div className="layout-panel wide-panel">
        <QuizContainer method="post" className="quiz-container">
          <ComponentGrayLine />
          <div className="conversation-wrap">
            <div className="quiz-sentence-wrap">
              <div className="img-grp">
                <div className="img-wrap">
                  {/* TODO: key설명 - 음성이 있을 경우, 누르면 단일 음성이 재생되며, conversation-wrap 에 active 추가 */}
                  <div className="img-round">
                    <button className="btn-profile">
                      <ImgProfileDefaultComponent />
                    </button>
                  </div>
                </div>
                <p className="name">{"김민호"}</p>
              </div>

              {/* TODO: key설명 클릭하면 클래스 active 추가됨 */}
              <div className="blank text">
                <span className="">{"冷"}</span>
                <small className="sm">{"lěng"}</small>
              </div>
              <div className="blank text">
                <span className="">{"首尔的"}</span>
                <small className="sm">{"Shǒu'ěr de"}</small>
              </div>
              <div className="blank text">
                <span className="">{"没有"}</span>
                <small className="sm">{"Méiyǒu"}</small>
              </div>
              <div className="text">
                <span className="">{"?"}</span>
              </div>
            </div>
          </div>
          {/* TODO: key설명 정답확인후 정답일 때 answer-right 추가 */}
          {/* TODO: key설명 정답확인후 오답일 때 answer-wrong 추가 */}
          <div className="quiz-answer-wrap hori-answer-wrap answer-right">
            <div className="inp-grp">
              <input
                type="checkbox"
                name="answer1"
                id="answer1"
                className="inp-chck-line none"
                checked
                disabled
              />
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
                checked
                disabled
              />
              <label htmlFor="answer2" className="label-chck-line">
                <span className="text">{"首尔的"}</span>
                <span className="text-sm">{"Shǒu'ěr de"}</span>
              </label>
            </div>
            {/* TODO: key설명 선택한 단어는 disabled */}
            <div className="inp-grp">
              <input
                type="checkbox"
                name="answer3"
                id="answer3"
                className="inp-chck-line none"
                checked
                disabled
              />
              <label htmlFor="answer3" className="label-chck-line">
                <span className="text">{"没有"}</span>
                <span className="text-sm">{"Méiyǒu"}</span>
              </label>
            </div>
          </div>
          <div className="btns-wrap">
            <ComponentButtonRadiBorderMain text="다시하기" />
            <ComponentButtonRadiFillMain text="정답확인" />
          </div>
        </QuizContainer>
      </div>
    </div>
  );
};

export default TemplateQuizDialogueWordArray;
