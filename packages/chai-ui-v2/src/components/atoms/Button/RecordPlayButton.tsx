import React from "react";
import IconPlayButton from "./IconPlayButton";

interface RecordPlayButtonProps {
  onClickBtn?: () => void;
  recordTime?: number;
}

const RecordPlayButton = ({
  onClickBtn,
  recordTime,
}: RecordPlayButtonProps) => {
  return (
    <>
      <IconPlayButton active={true} onClickBtn={onClickBtn} />
      {/* <ComponentProgress progressDuration={3} /> */}
      <p className="txt">{`00:${recordTime?.toString().padStart(2, "0")}`}</p>
    </>
  );
};

export default RecordPlayButton;
