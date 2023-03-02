import React from "react";

interface ComponentButtonFillBlackProps {
  text: string;
  onClick?: () => void;
}

const ComponentButtonFillBlackMini = ({
  text,
  onClick,
}: ComponentButtonFillBlackProps) => {
  const handleClickButton = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className="btn btn-radi-fill-black-mini"
      onClick={handleClickButton}
    >
      {text}
    </button>
  );
};

export default ComponentButtonFillBlackMini;
