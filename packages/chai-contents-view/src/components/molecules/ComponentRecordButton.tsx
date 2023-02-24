import React from "react";
import IconMic from "../../images/icon/icon_mic_white.svg";
import IconHeadset from "../../images/icon/icon_headset.svg";
import IconReturn from "../../images/icon/icon_return.svg";

const ComponentRecordButton = () => {

  return (
    // 디자인수정예정 - 버튼 디자인 수정
    // 설명 - 처음에 btn-headset은 disabled, btn-reset 은 클래스 none 가 붙은 상태
    // 설명 - 첫 녹음을 하면 btn-headset의 disabled 삭제, btn-reset의 none도 삭제, btn-mike에 none 추가
    <div className="record-btn-wrap">
      <button className="btn-icon" disabled>
        <img src={IconHeadset} alt="" className="icon" />
      </button>
      <button className="btn-icon">
        <img src={IconMic} alt="" className="icon" />
      </button>
      <button className="btn-icon none">
        <img src={IconReturn} alt="" className="icon" />
      </button>
    </div>
  );
};

export default ComponentRecordButton;
