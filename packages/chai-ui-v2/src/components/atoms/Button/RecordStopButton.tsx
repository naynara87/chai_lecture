import React from "react";
import IconStopFillButton from "./IconStopFillButton";

const RecordStopButton = () => {
  return (
    <div className="record-btn-flex-wrap">
      <IconStopFillButton />
      {/* <ComponentProgress progressDuration={3} /> */}
      <p className="txt">{"0:44"}</p>
    </div>
  );
};

export default RecordStopButton;
