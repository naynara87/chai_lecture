import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "@emotion/styled";
import IconSpeaker from "./svg/IconSpeaker";
import IconPlaying from "./svg/IconPlaying";
import { colorPalette } from "../../styles/colorPalette";
import { changePXtoVW } from "../../utils/styles";
import { SerializedStyles } from "@emotion/react";

interface AudioProps {
  audioHide?: boolean;
  audioUrl?: string;
  audioIndex?: number;
  currentAudioIndex?: number;
  isAudio: boolean;
  customCss?: SerializedStyles;
  audioHandler?: (src: string, index: number, isPlayed: boolean) => void;
}

interface AudioButtonProps {
  customCss?: SerializedStyles;
}

const AudioButton = styled.button<AudioButtonProps>`
  width: ${changePXtoVW(80)};
  height: ${changePXtoVW(80)};
  border-radius: 50%;
  margin: 0 0.5208333333vw;
  background-color: ${colorPalette.confirmBtn};
  position: relative;
  cursor: pointer;
  ${(props) => props.customCss}
`;

const Audio = ({
  audioHide,
  audioUrl,
  audioIndex,
  currentAudioIndex,
  isAudio,
  customCss,
  audioHandler,
}: AudioProps) => {
  const [isPlayed, setIsPlayed] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (currentAudioIndex !== audioIndex) {
      setIsPlayed(false);
    }
  }, [audioIndex, currentAudioIndex]);

  const handleClickAudioButton = () => {
    if (audioHide) {
      return;
    }

    if (audioHandler) {
      audioHandler(audioUrl ?? "", audioIndex ?? 0, isPlayed);
    }

    if (isPlayed) {
      setIsPlayed(false);
      audioRef.current && audioRef.current.pause();
    } else {
      setIsPlayed(true);
      audioRef.current && audioRef.current.play();
    }
  };

  const renderAudioIcon = useMemo(() => {
    if (isPlayed) {
      return <IconPlaying />;
    } else {
      return <IconSpeaker />;
    }
  }, [isPlayed]);

  return (
    <AudioButton onClick={handleClickAudioButton} customCss={customCss}>
      {isAudio ? (
        <audio ref={audioRef}>
          <source src={audioUrl} />
        </audio>
      ) : (
        <></>
      )}
      {renderAudioIcon}
    </AudioButton>
  );
};

export default Audio;
