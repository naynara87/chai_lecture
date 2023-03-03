import React from "react";

const RecordStopButton = () => {
  return (
    <div className="record-btn-flex-wrap">
      <button className="btn-icon-mini btn-stop">정지</button>
      {/* <ComponentProgress progressDuration={3} /> */}
      <p className="txt">{"0:44"}</p>
    </div>
  );
};

export default RecordStopButton;
