import React from "react";
import { useGlobalAudio } from "../../core";
import { ComponentButtonPlay } from "../atoms";
import IconPauseFillButton from "../atoms/Button/IconPauseFillButton";

interface FullAudioComponentProps {
  fullAudioUuid?: string;
  onClickFullAudio?: () => void;
  onClickStopFullAudio?: () => void;
}

const FullAudioComponent = ({
  fullAudioUuid,
  onClickFullAudio,
  onClickStopFullAudio,
}: FullAudioComponentProps) => {
  const { globalAudioId } = useGlobalAudio();

  return (
    <div className="btns-wrap">
      {globalAudioId.toString().includes(fullAudioUuid ?? "") ? (
        <IconPauseFillButton onClick={onClickStopFullAudio} />
      ) : (
        <ComponentButtonPlay onClick={onClickFullAudio} />
      )}
      <p className="txt">전체 음성 듣기</p>
    </div>
  );
};

export default FullAudioComponent;
