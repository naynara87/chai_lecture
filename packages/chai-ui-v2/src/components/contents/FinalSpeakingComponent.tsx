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
import IconReturnButton from "../atoms/Button/IconReturnButton";
import RecordStopButton from "../atoms/Button/RecordStopButton";
import {
  FinalSpeakingContentData,
  useGlobalAudio,
  usePageCompleted,
  useXapi,
} from "../../core";
import { v4 as uuidv4 } from "uuid";
import ComponentGrayLine from "../molecules/ComponentGrayLine";
import IconLight from "../../assets/images/icon/icon_light_navy.svg";
import { ComponentButtonRadiFillMain } from "../atoms";
import HtmlContentComponent from "../atoms/HtmlContentComponent";
import ComponentProgress from "../atoms/ComponentProgress";

const ButtonWrapper = styled.div`
  line-height: 0;
`;

type RecordedAudioState = "not-recorded" | "recorded" | "playing" | "stopped";

export interface FinalSpeakingComponentProps {
  contents: FinalSpeakingContentData;
}

const FinalSpeakingComponent = ({ contents }: FinalSpeakingComponentProps) => {
  const recordedAudioUuidRef = useRef(uuidv4());
  const recordTimer = useRef<NodeJS.Timeout | number>();
  const recordTime = useRef(0);
  const [recordingTimeState, setRecordingTimeState] = useState(0);
  const [recordedTimeState, setRecordedTimeState] = useState(0);
  const [isSendBlobUrl, setIsSendBlobUrl] = useState(false);
  const [isProgressBarStart, setIsProgressBarStart] = useState(false);

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
        type: "audio/ogg", // 재생 됨
        // type: "audio/webm", // 재생 됨
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
    setPushCompletedPageComponents("record", contents.id);
  }, [setPushCompletedPageComponents, contents.id]);

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

  const handleSendRecording = () => {
    console.log("onStopRecording", mediaBlobUrl);
    if (!mediaBlobUrl) return;
    setRecordedAudioState("recorded");
    setIsSendBlobUrl(true);
    // const audioBlob = await fetch(mediaBlobUrl).then((r) => r.blob());
    // const elem = document.createElement("a");
    // elem.href = URL.createObjectURL(audioBlob);
    // elem.download = "voice.mp3";
    // document.body.appendChild(elem);
    // elem.click();
    // document.body.removeChild(elem);
    // TODO : 녹음 후 생성한 파일을 서버로 전송하기 => BBC-978
    // convert blob to mp3 file
    // const file = new File([blob], `audio${new Date().getTime()}`, {
    //   type: blob.type,
    //   lastModified: Date.now(),
    // });

    // send file to server : http://localhost:3000/api/upload
    // const formData = new FormData();
    // formData.append("file", file);
    // fetch("http://localhost:3000/api/upload", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log("data", data))
    //   .catch((err) => console.log("err", err));
  };

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
      setComponentCompleted(contents.id);
      setIsProgressBarStart(false);
      xapiCreated(contents.id);
      setRecordedAudioState("recorded");
      window.clearTimeout(recordTimer.current);
    }
  }, [
    startRecording,
    status,
    stopRecording,
    recordTime,
    handleAudioReset,
    setComponentCompleted,
    contents.id,
    xapiCreated,
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
    if (recordedAudioState === "not-recorded") {
      return (
        <RecordPlayButton
          onClickBtn={handleClickRecordedAudioButton}
          recordTime={recordingTimeState}
        />
      );
    } else if (recordedAudioState === "playing") {
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
          {!isSendBlobUrl && (
            <IconReturnButton onClickBtn={handleClickResetBtn} />
          )}
        </>
      );
    }
  }, [
    recordedAudioState,
    handleClickRecordedAudioButton,
    handleClickResetBtn,
    recordedTimeState,
    recordingTimeState,
    isSendBlobUrl,
    isProgressBarStart,
  ]);

  return (
    <div>
      {contents.data.exampleContents && (
        <ComponentGrayLine contents={contents.data.exampleContents} />
      )}
      <div className="record-btn-wrap">
        <ButtonWrapper>
          <div className="record-btn-flex-wrap">
            {recordedAudioState === "not-recorded"
              ? renderRecordingAudioIcon
              : renderRecordedAudioIcon}
          </div>
        </ButtonWrapper>
        {isSendBlobUrl || recordedAudioState === "recorded" ? (
          <div className="btns-wrap">
            <ComponentButtonRadiFillMain
              text="녹음 파일 제출"
              onClickBtn={() => {
                // TODO kjw toast message 띄우기
                handleSendRecording();
              }}
              isDisabled={isSendBlobUrl}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
      {isSendBlobUrl && (
        <div className="answer-sheet-wrapper">
          <div className="answer-sheet-title">
            <img src={IconLight} alt="" />
            모범 답안
          </div>
          <div className="answer-sheet-conts">
            <HtmlContentComponent html={contents.data.answerModel} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FinalSpeakingComponent;
