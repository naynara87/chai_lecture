import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import { colorPalette } from "../../styles/colorPalette";
import { changePXtoVW } from "../../utils/styles";
import AudioButton from "../atoms/AudioButton";
import IconHeadset from "../atoms/svg/IconHeadset";
import IconMic from "../atoms/svg/IconMic";
import IconPlaying from "../atoms/svg/IconPlaying";

interface RecordedAudioButtonProps {
  customCss?: SerializedStyles;
}

const RecordedAudioButton = styled.button<RecordedAudioButtonProps>`
  width: ${changePXtoVW(80)};
  height: ${changePXtoVW(80)};
  border-radius: 50%;
  margin: 0 0.5208333333vw;
  position: relative;

  ${(props) => props.customCss}
`;

interface RecordingAudioButtonProps {
  customCss?: SerializedStyles | string;
}

const RecordingAudioButton = styled.button<RecordingAudioButtonProps>`
  width: ${changePXtoVW(80)};
  height: ${changePXtoVW(80)};
  border-radius: 50%;
  margin: 0 0.5208333333vw;
  position: relative;

  ${(props) => props.customCss}
`;

const grayBackground = css`
  background-color: ${colorPalette.iconGray};
  cursor: default;
`;

const whiteBackground = css`
  background-color: ${colorPalette.white};
  cursor: pointer;
`;

const currentBackground = css`
  background-color: ${colorPalette.confirmBtn};
  cursor: pointer;
`;

const AudioRecorderStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${changePXtoVW(16)};
  gap: 1%;
`;

type recordingAudioState = "record" | "pause" | "recordAudioPlaying";

interface AudioRecorderProps {
  audioUrl: string;
}

const AudioRecorder = ({ audioUrl }: AudioRecorderProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [pronounceAudio, setPronounceAudio] = useState(false);
  const [recordedAudioState, setRecordedAudioState] = useState(false);
  const [recordingAudioState, setRecordingAudioState] = useState<recordingAudioState>("pause");
  const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({
    audio: true,
    blobPropertyBag: {
      type: "audio/wav",
    },
  });

  const handleClickRecordedAudioButton = useCallback(() => {
    if (!audioRef.current || pronounceAudio) {
      return;
    }

    if (status === "stopped") {
      audioRef.current.play();
      setRecordedAudioState(true);
      setRecordingAudioState("recordAudioPlaying");
    }

    if (status === "stopped" && recordedAudioState) {
      audioRef.current.pause();
      setRecordedAudioState(false);
      setRecordingAudioState("pause");
    }
  }, [recordedAudioState, status, pronounceAudio]);

  audioRef.current?.addEventListener("ended", () => {
    setRecordedAudioState(false);
    setRecordingAudioState("pause");
  });

  const handleClickRecordingAudioButton = useCallback(() => {
    if (!audioRef.current || recordedAudioState || pronounceAudio) {
      return;
    }
    if (status === "idle" || status === "stopped") {
      startRecording();
      setRecordingAudioState("record");
      setRecordedAudioState(false);
    } else {
      stopRecording();
      setRecordingAudioState("pause");
    }
  }, [pronounceAudio, recordedAudioState, startRecording, status, stopRecording]);

  const recodingAudioButtonColor = useMemo(() => {
    if (recordingAudioState === "record") {
      return whiteBackground;
    } else if (recordingAudioState === "recordAudioPlaying" || pronounceAudio) {
      return grayBackground;
    } else {
      return currentBackground;
    }
  }, [recordingAudioState, pronounceAudio]);

  const handlePronounceAudio = useCallback((src: string, index: number, isPlayed: boolean) => {
    if (!isPlayed) {
      setPronounceAudio(true);
      setRecordedAudioState(false);
      setRecordingAudioState("pause");
    } else {
      setPronounceAudio(false);
    }
  }, []);

  return (
    <AudioRecorderStyle>
      {/* <p>{status}</p> */}
      <RecordedAudioButton
        onClick={handleClickRecordedAudioButton}
        customCss={status === "stopped" && !pronounceAudio ? currentBackground : grayBackground}
      >
        {recordedAudioState ? <IconPlaying /> : <IconHeadset />}
      </RecordedAudioButton>
      <RecordingAudioButton
        onClick={handleClickRecordingAudioButton}
        customCss={recodingAudioButtonColor}
      >
        <IconMic color={recordingAudioState === "record" ? "black" : "white"} />
      </RecordingAudioButton>
      <audio ref={audioRef} src={mediaBlobUrl}>
        <track kind="captions" />
      </audio>
      <AudioButton
        audioUrl={audioUrl}
        isAudio={true}
        audioHandler={handlePronounceAudio}
        audioHide={recordedAudioState || recordingAudioState !== "pause" ? true : false}
        customCss={
          recordedAudioState || recordingAudioState !== "pause" ? grayBackground : currentBackground
        }
      />
    </AudioRecorderStyle>
  );
};

export default AudioRecorder;