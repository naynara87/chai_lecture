import React from "react";
import IconStop from "../../../images/icon/icon_stop.svg";

const StopButton = () => {
  return (
    <button className="btn-icon">
      <img src={IconStop} alt="" className="icon" />
    </button>
  );
};

export default StopButton;
