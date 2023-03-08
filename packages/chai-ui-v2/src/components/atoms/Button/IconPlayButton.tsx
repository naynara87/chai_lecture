import React from "react";

interface PlayButtonProps {
  active: boolean;
}

const IconPlayButton = ({ active }: PlayButtonProps) => {
  return (
    <button className="btn-icon btn-play" disabled={!active}>
      재생
    </button>
  );
};

export default IconPlayButton;
