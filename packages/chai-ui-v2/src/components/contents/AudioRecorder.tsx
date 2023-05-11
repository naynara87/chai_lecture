import styled from "@emotion/styled";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import RecordPlayButton from "../atoms/Button/RecordPlayButton";
import RecordMikeButton from "../atoms/Button/RecordMikeButton";
import RecordStopButton from "../atoms/Button/RecordStopButton";
import {
  RecorderContentData,
  useGlobalAudio,
  usePageCompleted,
  useXapi,
} from "../../core";
import { v4 as uuidv4 } from "uuid";
import IconReturnButton from "../atoms/Button/IconReturnButton";
import ComponentProgress from "../atoms/ComponentProgress";

const ButtonWrapper = styled.div`
  line-height: 0;
`;

type RecordedAudioState = "not-recorded" | "recorded" | "playing" | "stopped";

interface AudioRecorderProps {
  contents: RecorderContentData;
  handleEndRecord?: () => void;
}

const AudioRecorder = ({ contents, handleEndRecord }: AudioRecorderProps) => {
  const recordedAudioUuidRef = useRef(uuidv4());
  const recordTimer = useRef<NodeJS.Timeout | number>();
  const recordTime = useRef(0);
  const [recordingTimeState, setRecordingTimeState] = useState(0);
  const [recordedTimeState, setRecordedTimeState] = useState(0);

  const [recordedAudioState, setRecordedAudioState] =
    useState<RecordedAudioState>("not-recorded");
  const { status, startRecording, stopRecording, mediaBlobUrl, clearBlobUrl } =
    useReactMediaRecorder({
      audio: true,
      video: false,
      askPermissionOnMount: true,
      blobPropertyBag: {
        // type: "audio/wav",
        // type: "audio/mp3",
        // type: "audio/ogg", // 재생 됨
        type: "audio/webm", // 재생 됨
        // type: "audio/mpeg",
      },
    });
  const { globalAudioId, handleAudioReset, handleClickAudioButton } =
    useGlobalAudio();
  const { setPushCompletedPageComponents, setComponentCompleted } =
    usePageCompleted();
  const { xapiCreated } = useXapi();

  useEffect(() => {
    setPushCompletedPageComponents("record", recordedAudioUuidRef.current);
  }, [setPushCompletedPageComponents]);

  useEffect(() => {
    return () => {
      handleAudioReset();
      window.clearTimeout(recordTimer.current);
    };
  }, [handleAudioReset]);

  useEffect(() => {
    if (globalAudioId !== -1 && status === "recording") {
      stopRecording();
      setRecordedAudioState("recorded");
      handleEndRecord && handleEndRecord();
      window.clearTimeout(recordTimer.current);
    }
  }, [globalAudioId, status, stopRecording, handleEndRecord]);

  const handleClickRecordingAudioButton = useCallback(() => {
    if (status === "idle" || status === "stopped") {
      // 녹음된 오디오가 없거나 녹음된 오디오가 재생중이 아닐 때
      handleAudioReset();
      startRecording();
      recordTimer.current = window.setTimeout(function go() {
        recordTime.current += 1;
        setRecordingTimeState((prev) => prev + 1);
        if (recordTime.current > 29) {
          stopRecording();
          setRecordedTimeState(recordTime.current);
          setRecordedAudioState("recorded");
          handleEndRecord && handleEndRecord();
        } else {
          recordTimer.current = setTimeout(go, 1000);
        }
      }, 1000);
    } else {
      // 녹음 중일 때
      stopRecording();
      setRecordedTimeState(recordTime.current);
      setRecordedAudioState("recorded");
      handleEndRecord && handleEndRecord();
      setComponentCompleted(recordedAudioUuidRef.current);
      window.clearTimeout(recordTimer.current);
      xapiCreated(contents.id);
    }
  }, [
    startRecording,
    status,
    stopRecording,
    handleAudioReset,
    setComponentCompleted,
    xapiCreated,
    contents.id,
    handleEndRecord,
  ]);

  const handleResetRecordedAudio = useCallback(() => {
    handleAudioReset();
    setRecordedAudioState("recorded");
    window.clearTimeout(recordTimer.current);
  }, [handleAudioReset]);

  const handleClickRecordedAudioButton = useCallback(() => {
    if (
      status === "recording" ||
      status === "idle" ||
      recordedAudioState === "not-recorded"
    ) {
      return;
    }

    if (recordedAudioState === "recorded" && mediaBlobUrl) {
      handleClickAudioButton(
        "recorder",
        recordedAudioUuidRef.current,
        0,
        mediaBlobUrl,
      );
      recordTime.current = recordedTimeState;
      setRecordingTimeState(recordedTimeState);
      setRecordedAudioState("playing");
      recordTimer.current = window.setTimeout(function go() {
        setRecordingTimeState((prev) => prev - 1);
        recordTime.current = recordTime.current - 1;
        if (recordTime.current <= 0) {
          handleResetRecordedAudio();
          console.log("이게실행안됨?");
          return;
        } else {
          recordTimer.current = setTimeout(go, 1000);
        }
      }, 1000);
    }

    if (recordedAudioState === "playing") {
      // stop playing audio
      handleResetRecordedAudio();
    }
  }, [
    recordedAudioState,
    status,
    handleClickAudioButton,
    mediaBlobUrl,
    recordedTimeState,
    handleResetRecordedAudio,
  ]);

  const handleClickResetBtn = useCallback(() => {
    clearBlobUrl();
    setRecordedAudioState("not-recorded");
    handleAudioReset();
    recordTime.current = 0;
    setRecordingTimeState(0);
    setRecordedTimeState(0);
  }, [handleAudioReset, clearBlobUrl]);

  const renderRecordingAudioIcon = useMemo(() => {
    if (status === "recording") {
      return (
        <>
          <RecordStopButton
            onClickBtn={handleClickRecordingAudioButton}
            recordTime={recordingTimeState}
          />
          <ComponentProgress progressDuration={30} />
        </>
      );
    } else {
      if (status === "idle") {
        // 녹음하기 버튼
        return (
          <RecordMikeButton onClickBtn={handleClickRecordingAudioButton} />
        );
      }
    }
  }, [status, handleClickRecordingAudioButton, recordingTimeState]);

  const renderRecordedAudioIcon = useMemo(() => {
    if (recordedAudioState === "playing") {
      return (
        <>
          <RecordStopButton
            onClickBtn={handleClickRecordedAudioButton}
            recordTime={recordingTimeState}
          />
          <ComponentProgress progressDuration={recordedTimeState} />
        </>
      );
    } else {
      // recordedAudioState === "recorded"
      return (
        <>
          <RecordPlayButton
            onClickBtn={handleClickRecordedAudioButton}
            recordTime={recordedTimeState}
          />
          <IconReturnButton onClickBtn={handleClickResetBtn} />
        </>
      );
    }
  }, [
    recordedAudioState,
    handleClickRecordedAudioButton,
    handleClickResetBtn,
    recordingTimeState,
    recordedTimeState,
  ]);

  return (
    <div>
      <div className="record-btn-wrap">
        <ButtonWrapper>
          <div className="record-btn-flex-wrap">
            {recordedAudioState === "not-recorded"
              ? renderRecordingAudioIcon
              : renderRecordedAudioIcon}
          </div>
        </ButtonWrapper>
      </div>
    </div>
  );
};

export default AudioRecorder;
