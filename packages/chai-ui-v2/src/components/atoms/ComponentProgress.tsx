import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
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
  transition: all ${(props) => (props.isAudioEnd ? props.duration : 0)}s linear;
  transform: ${(props) => props.isAudioEnd && "translateX(0%)"};
`;

interface ComponentProgressProps {
  progressDuration: number;
  isAudioEnd?: boolean;
}

const ComponentProgress = ({
  progressDuration,
  isAudioEnd,
}: ComponentProgressProps) => {
  const [isShowProgressBar, setIsShowProgressBar] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isAudioEnd === undefined && progressBarRef.current) {
      setTimeout(() => {
        setIsShowProgressBar(true);
      }, 100);
    }
  }, [isAudioEnd]);

  return (
    <div className="cai-progress-track">
      <ProgressBar
        duration={progressDuration}
        isAudioEnd={isAudioEnd !== undefined ? isAudioEnd : isShowProgressBar}
        ref={progressBarRef}
      />
    </div>
  );
};

export default ComponentProgress;
