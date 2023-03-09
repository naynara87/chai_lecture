import React from "react";
import IconPlayButton from "./IconPlayButton";

interface RecordPlayButtonProps {
  onClickBtn?: () => void;
}

const RecordPlayButton = ({ onClickBtn }: RecordPlayButtonProps) => {
  return (
    <>
      <div className="record-btn-flex-wrap">
        <IconPlayButton active={true} onClickBtn={onClickBtn} />
        {/* <ComponentProgress progressDuration={3} /> */}
        <p className="txt">{"0:44"}</p>
      </div>
    </>
  );
};

export default RecordPlayButton;
