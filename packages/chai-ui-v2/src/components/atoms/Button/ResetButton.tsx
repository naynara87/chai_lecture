import React from "react";
import IconReset from "../../../images/icon/icon_reset_gray.svg";

const ResetButton = () => {
  return (
    <button className="btn-icon btn-reset">
      <img src={IconReset} alt="" className="icon" />
    </button>
  );
};

export default ResetButton;
