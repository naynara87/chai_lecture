import React from "react";
import { LoadingSpinner } from "./Loading";

interface ComponentButtonRadiFillMainProps {
  text: string;
  onClickBtn?: () => void;
  isDisabled?: boolean;
  sendingAudio?: boolean;
}

const ComponentButtonRadiFillMain = ({
  text,
  onClickBtn,
  isDisabled,
  sendingAudio,
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
      {sendingAudio ? <LoadingSpinner borderWidth={3} /> : <span>{text}</span>}
    </button>
  );
};

export default ComponentButtonRadiFillMain;
