import React from "react";

interface IconMikeButtonProps {
  onClickBtn?: () => void;
}

const IconMikeButton = ({ onClickBtn }: IconMikeButtonProps) => {
  return (
    <button className="btn-icon-mini btn-mic" onClick={onClickBtn}>
      녹음하기
    </button>
  );
};

export default IconMikeButton;
