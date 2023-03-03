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

const ButtonWrapper = styled.div`
  line-height: 0;
`;

type RecordedAudioState = "not-recorded" | "recorded" | "playing" | "stopped";

const AudioRecorder = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [recordedAudioState, setRecordedAudioState] =
    useState<RecordedAudioState>("not-recorded");
  const { status, startRecording, stopRecording, mediaBlobUrl } =
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
      onStop: onStopRecording,
    });

  function onStopRecording(blobUrl: string, blob: Blob) {
    console.log("onStopRecording", blobUrl, blob);
    setRecordedAudioState("recorded");
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
  }

  const handleClickRecordedAudioButton = useCallback(() => {
    if (
      !audioRef.current ||
      status === "recording" ||
      status === "idle" ||
      recordedAudioState === "not-recorded"
    ) {
      return;
    }

    if (recordedAudioState === "recorded") {
      void audioRef.current.play();
      setRecordedAudioState("playing");
    }

    if (recordedAudioState === "playing") {
      // stop playing audio
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setRecordedAudioState("recorded");
    }
  }, [recordedAudioState, status]);

  const onAudioEnded = useCallback(() => {
    console.log("onAudioEnded");
    setRecordedAudioState("recorded");
  }, []);

  useEffect(() => {
    audioRef.current?.addEventListener("ended", onAudioEnded);
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      audioRef.current?.removeEventListener("ended", onAudioEnded);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickRecordingAudioButton = useCallback(() => {
    if (!audioRef.current) {
      return;
    }
    if (status === "idle" || status === "stopped") {
      // 녹음된 오디오가 없거나 녹음된 오디오가 재생중이 아닐 때
      startRecording();
    } else {
      // 녹음 중일 때
      stopRecording();
    }
  }, [startRecording, status, stopRecording]);

  const renderRecordingAudioIcon = useMemo(() => {
    if (status === "recording") {
      return <RecordStopButton />;
    } else {
      if (status === "idle") {
        // 녹음하기 버튼
        return <RecordMikeButton />;
      } else if (status === "stopped") {
        // 다시 녹음하기 버튼
        return <IconReturnButton />;
      }
    }
  }, [status]);

  const renderRecordedAudioIcon = useMemo(() => {
    if (recordedAudioState === "not-recorded") {
      return <RecordPlayButton />;
    } else if (recordedAudioState === "playing") {
      return <RecordStopButton />;
    } else {
      // recordedAudioState === "recorded"
      return <RecordPlayButton />;
    }
  }, [recordedAudioState]);

  return (
    <div className="record-btn-wrap">
      <ButtonWrapper onClick={handleClickRecordedAudioButton}>
        {renderRecordedAudioIcon}
      </ButtonWrapper>
      <ButtonWrapper onClick={handleClickRecordingAudioButton}>
        {renderRecordingAudioIcon}
      </ButtonWrapper>
      <audio ref={audioRef} src={mediaBlobUrl ?? ""} />
    </div>
  );
};

export default AudioRecorder;
