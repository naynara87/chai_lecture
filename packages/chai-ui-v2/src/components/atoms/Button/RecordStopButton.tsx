import React from "react";
import IconStopFillButton from "./IconStopFillButton";

interface RecordStopButtonProps {
  onClickBtn?: () => void;
  recordTime?: number;
}

const RecordStopButton = ({
  onClickBtn,
  recordTime,
}: RecordStopButtonProps) => {
  return (
    <>
      <IconStopFillButton onClickBtn={onClickBtn} />
      {/* <ComponentProgress progressDuration={3} /> */}
      <p className="txt">{`00:${recordTime?.toString().padStart(2, "0")}`}</p>
    </>
  );
};

export default RecordStopButton;
