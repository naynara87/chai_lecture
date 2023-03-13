import React from "react";

interface IconPauseButtonProps {
  onClick?: () => void;
  isMini?: boolean;
}

const IconPauseFillButton = ({
  onClick,
  isMini = false,
}: IconPauseButtonProps) => {
  return (
    <button
      className={`btn-icon${isMini ? "-mini" : ""} btn-pause-fill`}
      onClick={onClick}
    >
      일시정지
    </button>
  );
};

export default IconPauseFillButton;
