import React from "react";

interface ComponentButtonFillBlackProps {
  text: string;
  onClick?: () => void;
}

const ComponentButtonFillBlackMini = ({
  text,
  onClick,
}: ComponentButtonFillBlackProps) => {
  return (
    <button className="btn btn-radi-fill-black-mini" onClick={onClick}>
      {text}
    </button>
  );
};

export default ComponentButtonFillBlackMini;
