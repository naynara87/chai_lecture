import React from "react";
import ImgCharacter from "../../images/img/cha_didi_glasses.png";
import IconSpeaker from "../../images/icon/icon_speaker_white.svg";

const ComponentConversation = () => {

  return (
    <div className="layout-panel-wrap grid37">
      <div className="layout-panel side-panel">
        {/* ComponentComtsinfo */}
        <div className="cont-info-wrap">
          <div className="btns-wrap">
            <button className="btn-icon-with-text">
              <div className="icon-wrap">
              <img src={IconSpeaker} alt="스피커모양" className="icon" />
              </div>
              <span className="txt">전체 음성 듣기</span>
            </button>
          </div>
          <div className="text-wrap">{'지난 시간엔 계절에 대한 회화를 학습했어요. 다음 대화를 잘 보고 빈 칸에 들어갈 알맞은 단어를 고르세요.'}</div>
          <div className="character-wrap">
            <img src={ImgCharacter} alt="" className="img" />
          </div>
        </div>
        {/* end ComponentComtsinfo */}
      </div>
      <div className="layout-panel wide-panel">
        {/* ContsTtl */}
        <h2 className="conts-ttl">{ '대화 내용을 잘 들어보세요' }</h2>
        {/* end ContsTtl */}
      </div>
    </div>
  );
};

export default ComponentConversation;
