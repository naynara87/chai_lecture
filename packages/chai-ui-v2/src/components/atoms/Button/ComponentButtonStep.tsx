import React from "react";
import iconClick from "../../../images/icon/icon_click.svg";

interface ComponentButtonStepProps {
  onClick: () => void;
}

const ComponentButtonStep = ({ onClick }: ComponentButtonStepProps) => {
  return (
    <button className="btn-step" onClick={onClick}>
      확인해 보세요
      <img src={iconClick} alt="클릭" className="icon" />
    </button>
  );
};

export default ComponentButtonStep;
