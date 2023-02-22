import React from "react";
import IconPlay from "../../images/icon/icon_play.svg";

const ComponentButtonPlay = () => {

  return (
    <button className="btn-icon">
        <img src={IconPlay} alt="재생" className="icon" />
    </button>
  );
};

export default ComponentButtonPlay;
