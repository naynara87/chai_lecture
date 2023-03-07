import React from "react";

interface ComponentButtonRadiFillMainProps {
  text: string;
  onClickBtn?: () => void;
  isDisabled?: boolean;
}

const ComponentButtonRadiFillMain = ({
  text,
  onClickBtn,
  isDisabled,
}: ComponentButtonRadiFillMainProps) => {
  const handleClickBtn = () => {
    onClickBtn && onClickBtn();
  };

  return (
    <button
      className="btn btn-radi-fill-main"
      onClick={handleClickBtn}
      disabled={isDisabled}
    >
      <span>{text}</span>
    </button>
  );
};

export default ComponentButtonRadiFillMain;
