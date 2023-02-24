import React from "react";
import IconPlay from "../../../images/icon/icon_play.svg";

interface HeadsetButtonProps {
  active: boolean;
}
const PlayButton = ({ active }: HeadsetButtonProps) => {
  return (
    <button className="btn-icon" disabled={!active}>
      <img src={IconPlay} alt="" className="icon" />
    </button>
  );
};

export default PlayButton;
