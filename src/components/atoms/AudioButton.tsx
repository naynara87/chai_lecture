import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "@emotion/styled";
import IconSpeaker from "./svg/IconSpeaker";
import IconPlaying from "./svg/IconPlaying";
import { colorPalette } from "../../styles/colorPalette";

interface AudioProps {
  audioHide?: boolean;
  audioUrl?: string;
  audioIndex?: number;
  currentAudioIndex?: number;
  isAudio: boolean;
  audioHandler?: (src: string, index: number) => void;
}

const AudioButton = styled.button`
  width: 4vw;
  height: 4vw;
  border-radius: 50%;
  margin: 0 0.5208333333vw;
  background-color: ${colorPalette.confirmBtn};
  position: relative;
  cursor: pointer;
`;

const Audio = ({
  audioHide,
  audioUrl,
  audioIndex,
  currentAudioIndex,
  isAudio,
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
      audioHandler(audioUrl ?? "", audioIndex ?? 0);
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
    <AudioButton onClick={handleClickAudioButton}>
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
