import styled from "@emotion/styled";
import React, { useState } from "react";
import { LayoutModalSolution, LayoutModalVoca } from "../modal";
import { ImgCharacterComponent } from "../atoms";
import ImgProfileDefaultComponent from "../atoms/ImgProfileDefaultComponent";
import ImgTemp01Component from "../atoms/ImgTemp01Component";
import ComponentButtonPlay from "../atoms/ComponentButtonPlay";
import ComponentButtonRoundArrow from "../atoms/ComponentButtonRoundArrow";
// import ComponentRepeatSpeak from "../molecules/ComponentRepeatSpeak";
import { vh } from "../../assets";

const DialogueContainer = styled.div`
  .repeat-speak-wrapper {
    margin-top: ${vh(20)};
  }
`;

const TemplateDialogue = () => {
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
          <div className="character-wrapper none">
            <div className="text-bubble-wrap">
              {
                "지난 시간엔 계절에 대한 회화를 학습했어요. 다음 대화를 잘 보고 빈 칸에 들어갈 알맞은 단어를 고르세요."
              }
            </div>
            <div className="character-wrap">
              <ImgCharacterComponent
                characterType="kkungiWink"
                characterAlt="꿍이윙크"
              />
            </div>
          </div>
          {/* end 말풍선 캐릭터 */}
          {/* ComponentVocaNote */}
          <div className="voca-note-container">
            <h3 className="voca-title">
              회화 단어 목록
              <ImgCharacterComponent
                characterType="kkungiSmile"
                characterAlt="꿍이스마일"
              />
              <ComponentButtonRoundArrow />
            </h3>
            <ul className="voca-list-wrap">
              {/* 반복영역 */}
              <li className="voca-list">
                <div className="voca-wrap">
                  <p className="chinese">{"游泳"}</p>
                  <p className="pinyin">{"yóuyǒng"}</p>
                  <p className="mean">{"수영하다"}</p>
                </div>
                <ComponentButtonPlay />
              </li>
              {/* end 반복영역 */}
            </ul>
          </div>
          {/* end ComponentVocaNote */}
        </div>
      </div>
      {/* NOTE: key230217 회화는 단일 템플릿이어서 스타일을 위해 conversation-panel-wrap 클래스 추가함 */}
      <div className="layout-panel wide-panel conversation-panel-wrap">
        {/* 230216 회화의 제목이 있을 때에만 사용 */}
        {/* ComponentTitle */}
        <h2 className="conts-ttl none">{"대화 내용을 잘 들어보세요"}</h2>
        {/* end ComponentTitle */}
        {/* 230216 회화에서 한어병음과 뜻의 보임 여부를 선택할 때 사용 */}
        {/* ComponentToggle */}
        <div className="toggles-wrapper">
          <div className="inp-toggle-wrap">
            <span className="toggle-name">한어병음</span>
            <input
              type="checkbox"
              name="input1"
              id="input1"
              className="toggle-input none"
            />
            <label htmlFor="input1" className="toggle-label">
              보이기
            </label>
          </div>
          <div className="inp-toggle-wrap">
            <span className="toggle-name">뜻</span>
            <input
              type="checkbox"
              name="input2"
              id="input2"
              className="toggle-input none"
            />
            <label htmlFor="input2" className="toggle-label">
              보이기
            </label>
          </div>
        </div>
        {/* end ComponentToggle */}
        {/* 230217 회화영역 */}
        <ul className="conversation-wrapper">
          {/* speech bubble */}
          {/* TODO: key설명 - 음성이 재생될 때 active 가 추가됨(화자표시 애니메이션) */}
          <li className="conversation-wrap active">
            <div className="img-grp">
              <div className="img-wrap">
                {/* TODO: key설명 - 누르면 단일 음성이 재생됨 */}
                <div className="img-round">
                  <button className="btn-profile">
                    <ImgProfileDefaultComponent />
                  </button>
                </div>
              </div>
              <p className="name">{"왕리리"}</p>
            </div>

            <div className="txt-wrap">
              <p className="chinese">{"今天刮风，下雪，很冷。"}</p>
              <p className="pinyin">{"Jīntiān guā fēng, xià xuě, hěn lěng."}</p>
              <p className="mean">{"오늘은 바람이 불고, 눈이 내려서 추워."}</p>
              {/* <ComponentRepeatSpeak /> */}
            </div>
          </li>
          {/* end speech bubble */}
          <li className="conversation-wrap">
            <div className="img-grp">
              <div className="img-wrap">
                {/* TODO: key설명 - 누르면 단일 음성이 재생됨 */}
                <div className="img-round">
                  <button className="btn-profile">
                    <ImgTemp01Component />
                  </button>
                </div>
              </div>
              <p className="name">{"김민호"}</p>
            </div>
            <div className="txt-wrap">
              <p className="chinese">{"我觉得这里的冬天没有中国那么冷。"}</p>
              <p className="pinyin">
                {"Wǒ juédé zhèlǐ de dōngtiān méiyǒu zhòng guó nàme lěng."}
              </p>
              <p className="mean">
                {"나는 여기 겨울이 중국만큼 춥지 않은 것 같아."}
              </p>
              {/* <ComponentRepeatSpeak /> */}
            </div>
          </li>
        </ul>
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

export default TemplateDialogue;
