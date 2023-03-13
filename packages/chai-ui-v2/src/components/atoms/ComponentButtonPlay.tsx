import React from "react";

interface ComponentButtonPlayProps {
  onClick?: () => void;
  isMini?: boolean;
}

const ComponentButtonPlay = ({
  onClick,
  isMini = false,
}: ComponentButtonPlayProps) => {
  return (
    <button
      className={`btn-icon${isMini ? "-mini" : ""} btn-play`}
      onClick={onClick}
    >
      재생
    </button>
  );
};

export default ComponentButtonPlay;
