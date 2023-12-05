import styled from "@emotion/styled";
import React from "react";
import IconTimer from "../../assets/images/icon/icon_timer.svg";

const TimerImg = styled.img`
  width: 3vmin;
`;

const TimerIcon = () => {
  return <TimerImg src={IconTimer} alt="시간"></TimerImg>;
};

export default TimerIcon;
