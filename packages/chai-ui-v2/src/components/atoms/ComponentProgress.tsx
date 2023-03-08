import styled from "@emotion/styled";
import React from "react";
import { vw } from "../../assets";

interface ProgressBarProps {
  duration: number;
  isAudioEnd: boolean;
}

const ProgressBar = styled.div<ProgressBarProps>`
  height: 100%;
  width: 100%;
  border-radius: ${vw(50)};
  background-image: linear-gradient(to right, #66daff 0%, #677eff 100%);
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  transition: all ${(props) => props.duration}s ease-in;
  transform: ${(props) => props.isAudioEnd && "translateX(0%)"};
`;

interface ComponentProgressProps {
  progressDuration: number;
  isAudioEnd: boolean;
}

const ComponentProgress = ({
  progressDuration,
  isAudioEnd,
}: ComponentProgressProps) => {
  return (
    <div className="cai-progress-track">
      <ProgressBar duration={progressDuration} isAudioEnd={isAudioEnd} />
    </div>
  );
};

export default ComponentProgress;
