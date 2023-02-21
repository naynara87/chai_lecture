import React from "react";
import IconSpeaker from "../../images/icon/icon_speaker_white.svg";

const ComponentButtonSpeaker = () => {

  return (
    // FIXME: key디자인수정예정 - 음원재생버튼 모양 변경(원이 아닌 모양으로), 이미지 변경
    <button className="btn-icon">
      <div className="icon-wrap">
        <img src={IconSpeaker} alt="스피커모양" className="icon" />
      </div>
    </button>
  );
};

export default ComponentButtonSpeaker;
