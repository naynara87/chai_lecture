import React from "react";
import IconHeadset from "../../../images/icon/icon_headset_white.svg";

interface HeadsetButtonProps {
  active: boolean;
}
const HeadsetButton = ({ active }: HeadsetButtonProps) => {
  return (
    <button className="btn-icon btn-headset" disabled={!active}>
      <img src={IconHeadset} alt="" className="icon" />
    </button>
  );
};

export default HeadsetButton;
