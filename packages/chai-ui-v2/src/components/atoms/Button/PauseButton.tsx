import React from "react";
import ComponentProgress from "../ComponentProgress";
import ReturnButton from "./ReturnButton";

interface HeadsetButtonProps {
  active: boolean;
}

const PauseButton = ({ active }: HeadsetButtonProps) => {
  return (
    <>
      <div className="record-btn-flex-wrap">
        <button className="btn-icon-mini btn-pause" disabled={!active}>
          일시정지
        </button>
        <ComponentProgress />
        <p className="txt">{ '0:44' }</p>
      </div>
      <ReturnButton />
    </>
  );
};

export default PauseButton;
