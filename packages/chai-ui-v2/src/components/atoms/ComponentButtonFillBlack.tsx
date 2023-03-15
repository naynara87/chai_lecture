import React from "react";

interface ComponentButtonFillBlackProps {
  text: string;
  onClickBtn?: () => void;
}

const ComponentButtonFillBlack = ({
  text,
  onClickBtn,
}: ComponentButtonFillBlackProps) => {
  return (
    <button className="btn btn-fill-black" onClick={onClickBtn}>
      <span>{text}</span>
    </button>
  );
};

export default ComponentButtonFillBlack;
