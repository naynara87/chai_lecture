import React from "react";
import PlayButton from "../atoms/Button/PlayButton";
import MikeButton from "../atoms/Button/MikeButton";
import ReturnButton from "../atoms/Button/ReturnButton";
// import StopButton from "../atoms/Button/StopButton";

const ComponentRecordButton = () => {
  return (
    // TODO: key설명 - 처음에 btn-headset은 disabled, btn-reset 은 클래스 none 가 붙은 상태
    // TODO: key설명 - 첫 녹음을 하면 btn-headset의 disabled 삭제, btn-reset의 none도 삭제, btn-mike에 none 추가
    <>
      <div className="record-btn-wrap">
        <PlayButton active={false} />
        <MikeButton />
        <ReturnButton />
      </div>
    </>
  );
};

export default ComponentRecordButton;
