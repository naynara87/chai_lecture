import React from "react";
import IconMic from "../../images/icon/icon_mic_white.svg";
import IconHeadset from "../../images/icon/icon_headset_white.svg";
import IconReset from "../../images/icon/icon_reset_gray.svg";

const ComponentRecordButton = () => {

  return (
    // FIXME: 디자인수정예정 - 버튼 디자인 수정
    // TODO: 설명 - 처음에 btn-headset은 disabled, btn-reset 은 클래스 none 가 붙은 상태
    // TODO: 설명 - 첫 녹음을 하면 btn-headset의 disabled 삭제, btn-reset의 none도 삭제, btn-mike에 none 추가
    <div className="record-btn-wrap">
      <button className="btn-icon btn-headset" disabled>
        <img src={IconHeadset} alt="" className="icon" />
      </button>
      <button className="btn-icon btn-mike">
        <img src={IconMic} alt="" className="icon" />
      </button>
      <button className="btn-icon btn-reset none">
        <img src={IconReset} alt="" className="icon" />
      </button>
    </div>
  );
};

export default ComponentRecordButton;
