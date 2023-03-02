import styled from "@emotion/styled";
import React from "react";

interface ProgressBarProps {
  duration: number;
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
  animation-name: progress;
  animation-duration: ${(props) => props.duration}s;
  /* animation-duration: 5s; */
  animation-timing-function: ease-in;
  @keyframes progress {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
  }
`;

interface ComponentProgressProps {
  progressDuration: number;
}

const ComponentProgress = ({ progressDuration }: ComponentProgressProps) => {
  return (
    <div className="cai-progress-track">
      <ProgressBar duration={progressDuration} />
    </div>
  );
};

export default ComponentProgress;
