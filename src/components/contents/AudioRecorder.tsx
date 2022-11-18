import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useRef, useState } from "react";
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
  transition: all ease-in 0.3s;

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
  transition: all ease-in 0.3s;
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
  const [recordedAudioState, setRecordedAudioState] = useState(false);
  const [recordingAudioState, setRecordingAudioState] = useState<recordingAudioState>("pause");
  const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({
    audio: true,
    blobPropertyBag: {
      type: "audio/wav",
    },
  });

  const handleClickRecordedAudioButton = () => {
    if (!audioRef.current) {
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
  };

  audioRef.current?.addEventListener("ended", () => {
    setRecordedAudioState(false);
    setRecordingAudioState("pause");
  });

  const handleClickRecordingAudioButton = () => {
    if (!audioRef.current || recordedAudioState) {
      return;
    }
    if (status === "idle" || status === "stopped") {
      startRecording();
      setRecordingAudioState("record");
      audioRef.current.pause();
      setRecordedAudioState(false);
    } else {
      stopRecording();
      setRecordingAudioState("pause");
    }
  };

  const recodingAudioButtonColor = (isButton: boolean) => {
    if (isButton) {
      switch (recordingAudioState) {
        case "record":
          return whiteBackground;
        case "recordAudioPlaying":
          return grayBackground;
        default:
          return currentBackground;
      }
    } else {
      switch (recordingAudioState) {
        case "record":
          return "black";
        default:
          return "white";
      }
    }
  };

  return (
    <AudioRecorderStyle>
      {/* <p>{status}</p> */}
      <RecordedAudioButton
        onClick={handleClickRecordedAudioButton}
        customCss={status === "stopped" ? currentBackground : grayBackground}
      >
        {recordedAudioState ? <IconPlaying /> : <IconHeadset />}
      </RecordedAudioButton>
      <RecordingAudioButton
        onClick={handleClickRecordingAudioButton}
        customCss={recodingAudioButtonColor(true)}
      >
        <IconMic color={recordingAudioState === "record" ? "black" : "white"} />
      </RecordingAudioButton>
      <audio ref={audioRef} src={mediaBlobUrl}>
        <track kind="captions" />
      </audio>
      <AudioButton
        audioUrl={audioUrl}
        isAudio={true}
        audioHide={recordedAudioState && recordingAudioState !== "pause" ? true : false}
        customCss={
          recordedAudioState && recordingAudioState !== "pause" ? grayBackground : currentBackground
        }
      />
    </AudioRecorderStyle>
  );
};

export default AudioRecorder;
