import React from "react";
import IconPauseFillButton from "./IconPauseFillButton";
import IconReturnButton from "./IconReturnButton";


const RecordPauseButton = () => {
  return (
    <>
      <div className="record-btn-flex-wrap">
        <IconPauseFillButton />
        {/* <ComponentProgress progressDuration={3} /> */}
        <p className="txt">{"0:44"}</p>
      </div>
      <IconReturnButton />
    </>
  );
};

export default RecordPauseButton;
