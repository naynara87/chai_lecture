import styled from "@emotion/styled";
import React from "react";

interface ProgressBarProps {
  duration: number;
  isAudioEnd: boolean;
}

const ProgressBar = styled.div<ProgressBarProps>`
  height: 100%;
  // width: 50%;
  border-radius: vw(50);
  background-image: linear-gradient(to right, #66daff 0%, #677eff 100%);
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
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
