import React from "react";

interface ComponentButtonRadiFillMainProps {
  text: string;
  onClickBtn?: () => void;
}

const ComponentButtonRadiFillMain = ({
  text,
  onClickBtn,
}: ComponentButtonRadiFillMainProps) => {
  const handleClickBtn = () => {
    onClickBtn && onClickBtn();
  };

  return (
    <button
      className="btn btn-radi-fill-main"
      data-text={text}
      onClick={handleClickBtn}
    >
      <span>{text}</span>
    </button>
  );
};

export default ComponentButtonRadiFillMain;
