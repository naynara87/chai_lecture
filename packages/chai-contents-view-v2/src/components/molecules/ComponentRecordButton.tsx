import React from "react";
// import StopButton from "../atoms/Button/StopButton";
import ResetButton from "../atoms/Button/ResetButton";
import MikeButton from "../atoms/Button/MikeButton";
import HeadsetButton from "../atoms/Button/HeadsetButton";

const ComponentRecordButton = () => {
  return (
    // FIXME: key디자인수정예정 - 버튼 디자인 수정
    // TODO: key설명 - 처음에 btn-headset은 disabled, btn-reset 은 클래스 none 가 붙은 상태
    // TODO: key설명 - 첫 녹음을 하면 btn-headset의 disabled 삭제, btn-reset의 none도 삭제, btn-mike에 none 추가
    <>
      <div className="record-btn-wrap">
        <HeadsetButton active={false} />
        <MikeButton />
        <ResetButton />
        {/* <StopButton /> */}
      </div>
    </>
  );
};

export default ComponentRecordButton;
