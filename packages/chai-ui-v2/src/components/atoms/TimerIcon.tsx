import styled from "@emotion/styled";
import React from "react";
import { vw } from "../../assets";
import IconTimer from "../../assets/images/icon/icon_timer.svg";

const TimerImg = styled.img`
  width: ${vw(30)};
`;

const TimerIcon = () => {
  return <TimerImg src={IconTimer} alt="시간"></TimerImg>;
};

export default TimerIcon;
