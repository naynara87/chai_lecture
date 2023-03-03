import React from "react";
import IconArrowComponent from "./IconArrowComponent";

interface ComponentButtonRoundArrowProps {
  onClick?: () => void;
}

const ComponentButtonRoundArrow = ({
  onClick,
}: ComponentButtonRoundArrowProps) => {
  return (
    <button className="btn btn-round-icon-arrow" onClick={onClick}>
      <IconArrowComponent />
    </button>
  );
};

export default ComponentButtonRoundArrow;
