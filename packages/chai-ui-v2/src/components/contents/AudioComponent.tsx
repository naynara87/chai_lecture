import React, { useCallback, useEffect, useMemo, useRef } from "react";
import {
  AudioContentData,
  useGlobalAudio,
  usePageCompleted,
  useXapi,
} from "../../core";
import { ComponentButtonPlay } from "../atoms";
import IconPauseFillButton from "../atoms/Button/IconPauseFillButton";
import { v4 as uuidv4 } from "uuid";
import styled from "@emotion/styled";

const AudioWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export interface AudioComponentProps {
  contents: AudioContentData;
}

const AudioComponent = ({ contents }: AudioComponentProps) => {
  const audioUuidRef = useRef(uuidv4());
  const { setPushCompletedPageComponents, setComponentCompleted } =
    usePageCompleted();
  const { xapiPlayed } = useXapi();

  useEffect(() => {
    setPushCompletedPageComponents("audio", audioUuidRef.current);
  }, [setPushCompletedPageComponents]);

  const {
    globalAudioRef,
    globalAudioState,
    globalAudioId,
    handleClickAudioButton,
    handleAudioReset,
  } = useGlobalAudio();

  const resetAudio = useCallback(() => {
    if (globalAudioId.toString().includes(`audio_${audioUuidRef.current}`)) {
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
    if (globalAudioRef?.current) {
      globalAudioRefValue = globalAudioRef.current;
      globalAudioRefValue?.addEventListener("ended", resetAudio);
    }
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
            setComponentCompleted(audioUuidRef.current);
            handleClickAudioButton(
              "audio",
              audioUuidRef.current,
              0,
              contents.data.src ?? "",
            );
            xapiPlayed("audio", contents.id);
          }}
        />
      );
    }
  }, [
    contents,
    globalAudioId,
    handleClickAudioButton,
    handleAudioReset,
    globalAudioState,
    setComponentCompleted,
    xapiPlayed,
  ]);

  return <AudioWrap>{mainContents}</AudioWrap>;
};

export default AudioComponent;
