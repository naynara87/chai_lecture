import React from "react";
import IconReturnButton from "./IconReturnButton";

interface HeadsetButtonProps {
  active: boolean;
}

const RecordPauseButton = ({ active }: HeadsetButtonProps) => {
  return (
    <>
      <div className="record-btn-flex-wrap">
        <button className="btn-icon-mini btn-pause" disabled={!active}>
          일시정지
        </button>
        {/* <ComponentProgress progressDuration={3} /> */}
        <p className="txt">{"0:44"}</p>
      </div>
      <IconReturnButton />
    </>
  );
};

export default RecordPauseButton;
