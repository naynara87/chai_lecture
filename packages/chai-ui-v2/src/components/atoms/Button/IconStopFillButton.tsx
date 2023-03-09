import React from "react";

interface IconStopFillButtonProps {
  onClickBtn?: () => void;
}

const IconStopFillButton = ({ onClickBtn }: IconStopFillButtonProps) => {
  return (
    <button className="btn-icon-mini btn-stop-fill" onClick={onClickBtn}>
      정지
    </button>
  );
};

export default IconStopFillButton;
