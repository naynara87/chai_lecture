import React from "react";
import IconReturnButton from "./IconReturnButton";

interface HeadsetButtonProps {
  active: boolean;
}
const RecordPlayButton = ({ active }: HeadsetButtonProps) => {
  return (
    <>
      <div className="record-btn-flex-wrap">
        <button className="btn-icon-mini btn-play" disabled={!active}>
          재생
        </button>
        {/* <ComponentProgress progressDuration={3} /> */}
        <p className="txt">{"0:44"}</p>
      </div>
      <IconReturnButton />
    </>
  );
};

export default RecordPlayButton;
