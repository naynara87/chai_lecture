import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
  audioState?: boolean;
  currentAudioIndex?: number;
  isAudio: boolean;
  otherAudioPlayed?: boolean;
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
  margin: 0 ${changePXtoVW(10)};
  background-color: ${colorPalette.confirmBtn};
  position: relative;
  cursor: pointer;
  ${(props) => props.customCss}
`;

const Audio = ({
  audioHide,
  audioUrl,
  audioIndex,
  audioState,
  currentAudioIndex,
  otherAudioPlayed,
  isAudio,
  customCss,
  audioHandler,
}: AudioProps) => {
  const [isPlayed, setIsPlayed] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  if (isAudio) {
    audioRef.current?.addEventListener("ended", () => {
      setIsPlayed(false);
    });
  }

  useEffect(() => {
    if (currentAudioIndex !== audioIndex) {
      setIsPlayed(false);
    }
  }, [audioIndex, currentAudioIndex]);

  const handleClickAudioButton = useCallback(() => {
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
  }, [audioHandler, audioHide, audioIndex, audioUrl, isPlayed]);

  const renderAudioIcon = useMemo(() => {
    if (!isAudio) {
      if (!isPlayed || !audioState) {
        setIsPlayed(false);
        return <IconSpeaker />;
      } else {
        setIsPlayed(true);
        return <IconPlaying />;
      }
    }

    if (isAudio) {
      if (audioHandler) {
        audioHandler(audioUrl ?? "", audioIndex ?? 0, isPlayed);
      }

      if (isPlayed) {
        setIsPlayed(true);
        return <IconPlaying />;
      } else {
        setIsPlayed(false);
        return <IconSpeaker />;
      }
    }
  }, [isPlayed, audioState, isAudio, audioHandler, audioUrl, audioIndex]);

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
