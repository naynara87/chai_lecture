import React from "react";
import IconMic from "../../../images/icon/icon_mic_white.svg";

const MikeButton = () => {
  return (
    <button className="btn-icon btn-mike">
      <img src={IconMic} alt="" className="icon" />
    </button>
  );
};

export default MikeButton;
