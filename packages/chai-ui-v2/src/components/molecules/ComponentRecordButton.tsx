import React from "react";
import RecordPlayButton from "../atoms/Button/RecordPlayButton";
import IconReturnButton from "../atoms/Button/IconReturnButton";

const ComponentRecordButton = () => {
  return (
    // TODO: key설명 - 처음에 btn-headset은 disabled, btn-reset 은 클래스 none 가 붙은 상태
    // TODO: key설명 - 첫 녹음을 하면 btn-headset의 disabled 삭제, btn-reset의 none도 삭제, btn-mike에 none 추가
    <>
      <div className="record-btn-wrap">
        <RecordPlayButton />
        <IconReturnButton />
      </div>
    </>
  );
};

export default ComponentRecordButton;
