import React from "react";

interface IconPauseButtonProps {
  onClick?: () => void;
}

const IconPauseButton = ({ onClick }: IconPauseButtonProps) => {
  return (
    <button className="btn-icon-mini btn-pause" onClick={onClick}>
      일시정지
    </button>
  );
};

export default IconPauseButton;
