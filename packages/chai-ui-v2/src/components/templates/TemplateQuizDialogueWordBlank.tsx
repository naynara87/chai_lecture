import styled from "@emotion/styled";
import React, { useState } from "react";
import IconO from "../../images/icon/icon_o.svg";
import IconX from "../../images/icon/icon_x.svg";
import { LayoutModalSolution, LayoutModalVoca } from "../modal";
import { ComponentButtonPlay } from "../atoms";
import ComponentButtonRadiFillMain from "../atoms/ComponentButtonRadiFillMain";
import { ComponentContsInfo } from "../molecules";
import DialogueContent from "../molecules/DialogueContent";

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

const TemplateQuizDialogueWordBlank = () => {
  const [isModalSolutionOpen, setIsModalSolutionOpen] = useState(false);
  const [isModalVocaOpen, setIsModalVocaOpen] = useState(false);

  return (
    <DialogueContainer className="layout-panel-wrap grid-h-3-7">
      <div className="layout-panel side-panel">
        <div className="cont-info-wrap">
          <div className="btns-wrap">
            <ComponentButtonPlay />
            <p className="txt">전체 음성 듣기</p>
          </div>
          {/* 말풍선 캐릭터 */}
          <ComponentContsInfo text="지난 시간엔 계절에 대한 회화를 학습했어요. 다음 대화를 잘 보고 빈 칸에 들어갈 알맞은 단어를 고르세요." />
          {/* end 말풍선 캐릭터 */}
        </div>
      </div>
      {/* 230217 회화는 단일 컴포넌트여서 스타일을 위해 conversation-panel-wrap 클래스 추가함 */}
      <div className="layout-panel wide-panel conversation-panel-wrap">
        {/* 230217 회화영역 */}
        <ul className="conversation-wrapper">
          {/* speech bubble */}
          <DialogueContent />
          {/* end speech bubble */}
          {/* TODO: key설명 - input이 checked가 되는 순간 blank에 선택한 글자가 들어감 */}
          <DialogueContent />
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
