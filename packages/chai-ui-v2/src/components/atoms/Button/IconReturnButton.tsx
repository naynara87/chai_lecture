import React from "react";

interface IconReturnButtonProps {
  onClickBtn?: () => void;
}

const IconReturnButton = ({ onClickBtn }: IconReturnButtonProps) => {
  return (
    <button className="btn-icon-mini btn-return" onClick={onClickBtn}>
      다시녹음하기
    </button>
  );
};

export default IconReturnButton;
