import React from "react";
import ComponentProgress from "../ComponentProgress";
import ReturnButton from "./ReturnButton";

interface HeadsetButtonProps {
  active: boolean;
}
const PlayButton = ({ active }: HeadsetButtonProps) => {
  return (
    <>
      <div className="record-btn-flex-wrap">
        <button className="btn-icon-mini btn-play" disabled={!active}>
          재생
        </button>
        <ComponentProgress progressDuration={3} />
        <p className="txt">{"0:44"}</p>
      </div>
      <ReturnButton />
    </>
  );
};

export default PlayButton;
