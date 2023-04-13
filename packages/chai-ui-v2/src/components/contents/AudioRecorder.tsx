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
import { useParams } from "react-router-dom";
import ComponentProgress from "../atoms/ComponentProgress";

const ButtonWrapper = styled.div`
  line-height: 0;
`;

type RecordedAudioState = "not-recorded" | "recorded" | "playing" | "stopped";

interface AudioRecorderProps {
  contents: RecorderContentData;
}

const AudioRecorder = ({ contents }: AudioRecorderProps) => {
  const recordedAudioUuidRef = useRef(uuidv4());
  const recordTimer = useRef<NodeJS.Timeout | number>();
  const recordTime = useRef(0);
  const [recordingTimeState, setRecordingTimeState] = useState(0);
  const [recordedTimeState, setRecordedTimeState] = useState(0);
  const [isProgressBarStart, setIsProgressBarStart] = useState(false);

  const { pageId } = useParams();

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
  const {
    globalAudioRef,
    globalAudioId,
    handleAudioReset,
    handleClickAudioButton,
  } = useGlobalAudio();
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
      setIsProgressBarStart(false);
      window.clearTimeout(recordTimer.current);
    }
  }, [globalAudioId, status, stopRecording]);

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
          setRecordedAudioState("recorded");
          setIsProgressBarStart(false);
        } else {
          recordTimer.current = setTimeout(go, 1000);
        }
      }, 1000);
    } else {
      // 녹음 중일 때
      stopRecording();
      setRecordedAudioState("recorded");
      setIsProgressBarStart(false);
      setComponentCompleted(recordedAudioUuidRef.current);
      if (pageId) {
        xapiCreated(contents.id, pageId);
      }
      window.clearTimeout(recordTimer.current);
    }
  }, [
    startRecording,
    status,
    stopRecording,
    recordTime,
    handleAudioReset,
    setComponentCompleted,
    xapiCreated,
    contents.id,
    pageId,
  ]);

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
      setRecordedTimeState(recordingTimeState);
      setRecordedAudioState("playing");
      recordTimer.current = window.setTimeout(function go() {
        setRecordedTimeState((prev) => prev - 1);
        if (recordTime.current < 0) {
          setRecordedAudioState("recorded");
          setIsProgressBarStart(false);
        } else {
          recordTimer.current = setTimeout(go, 1000);
        }
      }, 1000);
    }

    if (recordedAudioState === "playing") {
      // stop playing audio
      handleAudioReset();
      setRecordedAudioState("recorded");
      setIsProgressBarStart(false);
      window.clearTimeout(recordTimer.current);
    }
  }, [
    recordedAudioState,
    status,
    handleClickAudioButton,
    handleAudioReset,
    mediaBlobUrl,
    recordingTimeState,
  ]);

  const audioEnded = useCallback(() => {
    if (
      globalAudioId
        .toString()
        .includes(`recorder_${recordedAudioUuidRef.current}`)
    ) {
      handleAudioReset();
      setRecordedAudioState("recorded");
      window.clearTimeout(recordTimer.current);
    }
  }, [globalAudioId, handleAudioReset]);

  useEffect(() => {
    let globalAudioRefValue: HTMLAudioElement | null = null;
    if (globalAudioRef?.current) {
      globalAudioRefValue = globalAudioRef.current;
      globalAudioRefValue?.addEventListener("ended", audioEnded);
    }
    return () => {
      if (globalAudioRefValue) {
        globalAudioRefValue.removeEventListener("ended", audioEnded);
      }
    };
  }, [globalAudioRef, audioEnded, globalAudioId]);

  useEffect(() => {
    if (
      recordedAudioState !== "not-recorded" &&
      !globalAudioId
        .toString()
        .includes(`recorder_${recordedAudioUuidRef.current}`)
    ) {
      setRecordedAudioState("recorded");
      window.clearTimeout(recordTimer.current);
    }
  }, [globalAudioId, recordedAudioState]);

  const handleClickResetBtn = useCallback(() => {
    clearBlobUrl();
    setRecordedAudioState("not-recorded");
    handleAudioReset();
    recordTime.current = 0;
    setRecordingTimeState(0);
    setIsProgressBarStart(false);
  }, [handleAudioReset, clearBlobUrl]);

  const renderRecordingAudioIcon = useMemo(() => {
    if (status === "recording") {
      setTimeout(() => {
        setIsProgressBarStart(true);
      }, 0);
      return (
        <>
          <RecordStopButton
            onClickBtn={handleClickRecordingAudioButton}
            recordTime={recordingTimeState}
          />
          <ComponentProgress
            progressDuration={30}
            isAudioEnd={isProgressBarStart}
          />
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
  }, [
    status,
    handleClickRecordingAudioButton,
    recordingTimeState,
    isProgressBarStart,
  ]);

  const renderRecordedAudioIcon = useMemo(() => {
    if (recordedAudioState === "playing") {
      setTimeout(() => {
        setIsProgressBarStart(true);
      }, 0);
      return (
        <>
          <RecordStopButton
            onClickBtn={handleClickRecordedAudioButton}
            recordTime={recordedTimeState}
          />
          <ComponentProgress
            progressDuration={recordedTimeState}
            isAudioEnd={isProgressBarStart}
          />
        </>
      );
    } else {
      // recordedAudioState === "recorded"
      return (
        <>
          <RecordPlayButton
            onClickBtn={handleClickRecordedAudioButton}
            recordTime={recordingTimeState}
          />
          <IconReturnButton onClickBtn={handleClickResetBtn} />
        </>
      );
    }
  }, [
    recordedAudioState,
    handleClickRecordedAudioButton,
    handleClickResetBtn,
    recordedTimeState,
    recordingTimeState,
    isProgressBarStart,
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
