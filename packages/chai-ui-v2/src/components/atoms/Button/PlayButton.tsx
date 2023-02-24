import React from "react";
import IconPlay from "../../../images/icon/icon_play.svg";
import IconPause from "../../../images/icon/icon_pause.svg";

interface HeadsetButtonProps {
  active: boolean;
}
const PlayButton = ({ active }: HeadsetButtonProps) => {
  return (
    <button className="btn-icon" disabled={!active}>
      <img src={IconPlay} alt="" className="icon" />
      {/* TODO: key설명 재생 멈출때 아이콘 */}
      <img src={IconPause} alt="" className="icon none" />
    </button>
  );
};

export default PlayButton;
