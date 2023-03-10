import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { AudioContentData, useGlobalAudio } from "../../core";
import { ComponentButtonPlay } from "../atoms";
import IconPauseFillButton from "../atoms/Button/IconPauseFillButton";
import { v4 as uuidv4 } from "uuid";

interface AudioComponentProps {
  contents: AudioContentData;
}

const AudioComponent = ({ contents }: AudioComponentProps) => {
  const audioUuidRef = useRef(uuidv4());

  const {
    globalAudioRef,
    globalAudioState,
    globalAudioId,
    handleClickAudioButton,
    handleAudioReset,
  } = useGlobalAudio();

  const resetAudio = useCallback(() => {
    if (globalAudioId.toString().includes("audio")) {
      handleAudioReset();
    }
  }, [globalAudioId, handleAudioReset]);

  useEffect(() => {
    return () => {
      handleAudioReset();
    };
  }, [handleAudioReset]);

  useEffect(() => {
    let globalAudioRefValue: HTMLAudioElement | null = null;
    if (globalAudioRef?.current) globalAudioRefValue = globalAudioRef.current;
    globalAudioRef?.current?.addEventListener("ended", resetAudio);
    return () => {
      if (globalAudioRefValue) {
        globalAudioRefValue.removeEventListener("ended", resetAudio);
      }
    };
  }, [globalAudioRef, handleAudioReset, globalAudioId, resetAudio]);

  const mainContents = useMemo(() => {
    if (
      globalAudioId === `audio_${audioUuidRef.current}_0` &&
      globalAudioState
    ) {
      return <IconPauseFillButton onClick={handleAudioReset} />;
    } else {
      return (
        <ComponentButtonPlay
          onClick={() => {
            handleClickAudioButton(
              "audio",
              audioUuidRef.current,
              0,
              contents.data.src ?? "",
            );
          }}
        />
      );
    }
  }, [
    contents.data,
    globalAudioId,
    handleClickAudioButton,
    handleAudioReset,
    globalAudioState,
  ]);

  return <div>{mainContents}</div>;
};

export default AudioComponent;
