import styled from "@emotion/styled";
import React from "react";
import ImgCharacter from "../../images/img/cha_didi_glasses.png";
import ImgKkyngi from "../../images/img/cha_kkungi_positive.png";
import IconSpeaker from "../../images/icon/icon_speaker_white.svg";
import ImgProfileDefault from "../../images/img/img_profile_default.png";
import ImgTemp01 from "../../images/img/temp_profile01.png";
import ComponentVocaNote from "../molecules/ComponentVocaNote";
import LayoutModal from "../molecules/LayoutModal";
import LayoutModalVoca from "../molecules/LayoutModalVoca";

const DialogueContainer = styled.div`
`;

const TemplateQuizDialogueChoice = () => {

  return (
    <DialogueContainer className="layout-panel-wrap grid-37">
      <div className="layout-panel side-panel">
        {/* FIXME: key디자인수정예정 - 음원재생버튼 모양 변경(원이 아닌 모양으로), 이미지 변경 */}
        <div className="cont-info-wrap">
          <div className="btns-wrap">
            <button className="btn-icon-with-text">
              <div className="icon-wrap">
                <img src={IconSpeaker} alt="스피커모양" className="icon" />
              </div>
              <p className="txt">전체 음성 듣기</p>
            </button>
          </div>
          {/* 말풍선 캐릭터 */}
          <div className="character-wrapper">
            <div className="text-wrap">{'지난 시간엔 계절에 대한 회화를 학습했어요. 다음 대화를 잘 보고 빈 칸에 들어갈 알맞은 단어를 고르세요.'}</div>
            <div className="character-wrap">
              <img src={ImgCharacter} alt="" className="img" />
            </div>
          </div>
          {/* end 말풍선 캐릭터 */}
        </div>
      </div>
      {/* 230217 회화는 단일 컴포넌트여서 스타일을 위해 conversation-panel-wrap 클래스 추가함 */}
      <div className="layout-panel wide-panel conversation-panel-wrap">
        {/* 230216 회화의 제목이 있을 때에만 사용 */}
        {/* ComponentTitle */}
        {/* FIXME: key디자인수정예정 - 앞 아이콘 -> 기호 */}
        <h2 className="conts-ttl">{'대화 내용을 잘 들어보세요'}</h2>
        {/* end ComponentTitle */}
        {/* 230216 회화에서 한어병음과 뜻의 보임 여부를 선택할 때 사용 */}
        {/* ComponentToggle */}
        <div className="toggles-wrapper none">
          <div className="inp-toggle-wrap">
            <span className="toggle-name">한어병음</span>
            <input type="checkbox" name="input1" id="input1" className="toggle-input none" />
            <label htmlFor="input1" className="toggle-label">보이기</label>
          </div>
          <div className="inp-toggle-wrap">
            <span className="toggle-name">뜻</span>
            <input type="checkbox" name="input2" id="input2" className="toggle-input none" />
            <label htmlFor="input2" className="toggle-label">보이기</label>
          </div>
        </div>
        {/* end ComponentToggle */}
        {/* 230217 회화영역 */}
        <ul className="conversation-wrapper">
          {/* speech bubble */}
          {/* TODO: key설명 - 음성이 재생될 때 active 가 추가됨(화자표시 애니메이션) */}
          <li className="conversation-wrap active">
            <div className="img-wrap">
              {/* TODO: key설명 - 누르면 단일 음성이 재생됨 */}
              <div className="img-round">
                <button className="btn-profile"><img src={ImgProfileDefault} alt="" className="profile" /></button>
              </div>
            </div>
            <div className="txt-wrap">
              <p className="name">{'왕리리'}</p>
              <p className="chinese">{'今天刮风，下雪，很冷。'}</p>
              <p className="pinyin">{'Jīntiān guā fēng, xià xuě, hěn lěng.'}</p>
              <p className="mean">{'오늘은 바람이 불고, 눈이 내려서 추워.'}</p>
            </div>
          </li>
          {/* end speech bubble */}
          <li className="conversation-wrap">
            <div className="img-wrap">
              {/* TODO: key설명 - 누르면 단일 음성이 재생됨 */}
              <div className="img-round">
                <button className="btn-profile"><img src={ImgTemp01} alt="" className="profile" /></button>
              </div>
            </div>
            <div className="txt-wrap">
              <p className="name">{'김민호'}</p>
              <p className="chinese">{'我觉得这里的冬天没有中国那么冷。'}</p>
              <p className="pinyin">{'Wǒ juédé zhèlǐ de dōngtiān méiyǒu zhòng guó nàme lěng.'}</p>
              <p className="mean">{'나는 여기 겨울이 중국만큼 춥지 않은 것 같아.'}</p>
            </div>
          </li>
        </ul>
      </div>
      <LayoutModal />
      <LayoutModalVoca />
    </DialogueContainer>
  );
};

export default TemplateQuizDialogueChoice;
