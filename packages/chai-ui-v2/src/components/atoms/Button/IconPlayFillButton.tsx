import React from "react";

interface PlayButtonProps {
  active: boolean;
}

const IconPlayFillButton = ({ active }: PlayButtonProps) => {
  return (
    <button className="btn-icon btn-play-fill" disabled={!active}>
      재생
    </button>
  );
};

export default IconPlayFillButton;
