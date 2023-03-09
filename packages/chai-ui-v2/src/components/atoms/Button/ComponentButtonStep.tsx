import React from "react";
import iconClick from "../../../assets/images/icon/icon_click.svg";

interface ComponentButtonStepProps {
  onClick: () => void;
}

const ComponentButtonStep = ({ onClick }: ComponentButtonStepProps) => {
  return (
    <button className="btn-step" onClick={onClick}>
      <img src={iconClick} alt="클릭" className="icon" />
    </button>
  );
};

export default ComponentButtonStep;
