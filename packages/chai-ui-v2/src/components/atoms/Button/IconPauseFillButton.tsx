import React from "react";

interface IconPauseButtonProps {
  onClick?: () => void;
}

const IconPauseFillButton = ({ onClick }: IconPauseButtonProps) => {
  return (
    <button className="btn-icon-mini btn-pause-fill" onClick={onClick}>
      일시정지
    </button>
  );
};

export default IconPauseFillButton;
