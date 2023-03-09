import React from "react";

interface PlayButtonProps {
  active: boolean;
  onClickBtn?: () => void;
}

const IconPlayButton = ({ active, onClickBtn }: PlayButtonProps) => {
  return (
    <button
      className="btn-icon btn-play"
      disabled={!active}
      onClick={onClickBtn}
    >
      재생
    </button>
  );
};

export default IconPlayButton;
