import React from "react";
import ComponentProgress from "../ComponentProgress";

const StopButton = () => {
  return (
    <div className="record-btn-flex-wrap">
      <button className="btn-icon-mini btn-stop">
        정지
      </button>
      <ComponentProgress />
      <p className="txt">{ '0:44' }</p>
    </div>
  );
};

export default StopButton;
