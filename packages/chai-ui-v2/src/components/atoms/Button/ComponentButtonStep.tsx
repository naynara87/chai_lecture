import React from "react";
import iconClick from "../../../images/icon/icon_click.svg";

const ComponentButtonStep = () => {
  return (
    <button className="btn-step">
    확인해 보세요<img src={iconClick} alt="클릭" className="icon" />
    </button>
  );
};

export default ComponentButtonStep;
