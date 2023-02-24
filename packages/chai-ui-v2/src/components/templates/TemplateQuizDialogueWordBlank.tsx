import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import IconO from "../../images/icon/icon_o.svg";
import IconX from "../../images/icon/icon_x.svg";
import { LayoutModalSolution, LayoutModalVoca } from "../modal";
import { PageProps } from "../../core";
import {
  IconSpeakerComponent,
  ImgCharacterComponent,
  ImgProfileDefaultComponent,
  ImgTemp01Component,
} from "../atoms";
import ComponentButtonRadiFillMain from "../atoms/ComponentButtonRadiFillMain";

const DialogueContainer = styled.div`
  .hori-answer-wrap {
    justify-content: flex-start;

    .inp-grp {
      flex-basis: auto;
    }
  }

  .answer-right {
    .quiz-answer-wrap {
      position: relative;
      display: inline-flex;

      &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: auto;
        right: -2vw;
        width: 2.6vw;
        height: 2.6vw;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;
        background-image: url(${IconO});
        transform: translate(100%, -50%);
      }
    }
  }

  .answer-wrong {
    .quiz-answer-wrap {
      position: relative;
      display: inline-flex;

      &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: auto;
        right: -2vw;
        width: 2.6vw;
        height: 2.6vw;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;
        background-image: url(${IconX});
        transform: translate(100%, -50%);
      }
    }
  }
  .wide-panel {
    .btns-wrap {
      max-width: 310px;
      margin: 5vh auto 0;
    }
  }
`;

interface TemplateQuizDialogueWordBlankProps extends PageProps {}

const TemplateQuizDialogueWordBlank = ({
  page,
  setPageCompleted,
}: TemplateQuizDialogueWordBlankProps) => {
  const [isModalSolutionOpen, setIsModalSolutionOpen] = useState(false);
  const [isModalVocaOpen, setIsModalVocaOpen] = useState(false);

  useEffect(() => {
    setPageCompleted();
    console.log(page);
  }, [setPageCompleted, page]);

  return (
    <DialogueContainer className="layout-panel-wrap grid-h-3-7">
      <div className="layout-panel side-panel">
        <div className="cont-info-wrap">
          <div className="btns-wrap">
            {/* FIXME: key디자인수정예정 - 음원재생버튼 모양 변경(원이 아닌 모양으로), 이미지 변경 */}
            <button className="btn-icon-with-text">
              <div className="icon-wrap">
                <IconSpeakerComponent />
              </div>
              <p className="txt">전체 음성 듣기</p>
            </button>
          </div>
          {/* 말풍선 캐릭터 */}
          <div className="character-wrapper">
            <div className="text-wrap">
              {
                "지난 시간엔 계절에 대한 회화를 학습했어요. 다음 대화를 잘 보고 빈 칸에 들어갈 알맞은 단어를 고르세요."
              }
            </div>
            <div className="character-wrap">
              <ImgCharacterComponent />
            </div>
          </div>
          {/* end 말풍선 캐릭터 */}
        </div>
      </div>
      {/* 230217 회화는 단일 컴포넌트여서 스타일을 위해 conversation-panel-wrap 클래스 추가함 */}
      <div className="layout-panel wide-panel conversation-panel-wrap">
        {/* 230217 회화영역 */}
        <ul className="conversation-wrapper">
          {/* speech bubble */}
          {/* TODO: key설명 - 음성이 재생될 때 active 가 추가됨(화자표시 애니메이션) */}
          {/* TODO: key설명 - 정답일 경우 answer-right 클래스가 추가되고, input은 disabled */}
          {/* TODO: key설명 - 오답일 경우 answer-wrong 클래스가 추가되고, input은 disabled */}
          <li className="conversation-wrap active">
            <div className="img-wrap">
              {/* TODO: key설명 - 누르면 단일 음성이 재생됨 */}
              <div className="img-round">
                <button className="btn-profile">
                  <ImgProfileDefaultComponent />
                </button>
              </div>
            </div>
            <div className="txt-wrap">
              <p className="name">{"왕리리"}</p>
              {/* <p className="chinese">{'今天刮风，下雪，很冷。'}</p> */}
              <p className="chinese">
                {"今天刮风，"}
                <p className="blank-gray">&nbsp;</p>
                {"，很冷。"}
              </p>
              <p className="pinyin">{"Jīntiān guā fēng, xià xuě, hěn lěng."}</p>
              <p className="mean">{"오늘은 바람이 불고, 눈이 내려서 추워."}</p>

              <div className="quiz-answer-wrap hori-answer-wrap">
                <div className="inp-grp">
                  <input
                    type="radio"
                    name="answer1"
                    id="answer1-1"
                    className="inp-chck-line none"
                  />
                  <label htmlFor="answer1-1" className="label-chck-line">
                    <span className="text">{"胃口"}</span>
                  </label>
                </div>
                <div className="inp-grp">
                  <input
                    type="radio"
                    name="answer1"
                    id="answer1-2"
                    className="inp-chck-line none"
                  />
                  <label htmlFor="answer1-2" className="label-chck-line">
                    <span className="text">{"味道"}</span>
                  </label>
                </div>
              </div>
            </div>
          </li>
          {/* end speech bubble */}
          {/* TODO: key설명 - input이 checked가 되는 순간 blank에 선택한 글자가 들어감 */}
          <li className="conversation-wrap">
            <div className="img-wrap">
              {/* TODO: key설명 - 누르면 단일 음성이 재생됨 */}
              <div className="img-round">
                <button className="btn-profile">
                  <ImgTemp01Component />
                </button>
              </div>
            </div>
            <div className="txt-wrap">
              <p className="name">{"김민호"}</p>
              {/* <p className="chinese">{'我觉得这里的冬天没有中国那么冷。'}</p> */}
              <p className="chinese">
                {"我觉得这里的"}
                <p className="blank-gray">{"胃口"}</p>
                {"天没有中国那么冷。"}
              </p>
              <p className="pinyin">
                {"Wǒ juédé zhèlǐ de dōngtiān méiyǒu zhòng guó nàme lěng."}
              </p>
              <p className="mean">
                {"나는 여기 겨울이 중국만큼 춥지 않은 것 같아."}
              </p>

              <div className="quiz-answer-wrap hori-answer-wrap">
                <div className="inp-grp">
                  <input
                    type="radio"
                    name="answer2"
                    id="answer2-1"
                    className="inp-chck-line none"
                    checked
                  />
                  <label htmlFor="answer2-1" className="label-chck-line">
                    <span className="text">{"胃口"}</span>
                  </label>
                </div>
                <div className="inp-grp">
                  <input
                    type="radio"
                    name="answer2"
                    id="answer2-2"
                    className="inp-chck-line none"
                  />
                  <label htmlFor="answer2-2" className="label-chck-line">
                    <span className="text">{"味道"}</span>
                  </label>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="btns-wrap">
          <ComponentButtonRadiFillMain text="정답확인" />
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

export default TemplateQuizDialogueWordBlank;
