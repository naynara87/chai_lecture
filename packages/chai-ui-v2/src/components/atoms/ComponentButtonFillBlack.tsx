import React from "react";

interface ComponentButtonFillBlackProps {
  text: string;
}

const ComponentButtonFillBlack = ({ text }: ComponentButtonFillBlackProps) => {
  return (
    <button className="btn btn-fill-black" data-text={text}>
      <span>{text}</span>
    </button>
  );
};

export default ComponentButtonFillBlack;
