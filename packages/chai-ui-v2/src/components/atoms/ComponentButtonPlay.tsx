import React from "react";

interface ComponentButtonPlayProps {
  onClick?: () => void;
}

const ComponentButtonPlay = ({ onClick }: ComponentButtonPlayProps) => {
  return (
    <button className="btn-icon-mini btn-play" onClick={onClick}>
      재생
    </button>
  );
};

export default ComponentButtonPlay;
