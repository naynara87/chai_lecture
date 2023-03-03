import React from "react";
import IconStopButton from "./IconStopButton";

const RecordStopButton = () => {
  return (
    <div className="record-btn-flex-wrap">
      <IconStopButton />
      {/* <ComponentProgress progressDuration={3} /> */}
      <p className="txt">{"0:44"}</p>
    </div>
  );
};

export default RecordStopButton;
