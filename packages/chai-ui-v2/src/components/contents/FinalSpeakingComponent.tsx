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
  ID,
  // getSttAccessToken,
  nasAddFile,
  // saveStt,
  useGlobalAudio,
  useLmsInputValue,
  usePageCompleted,
  useToast,
  useXapi,
} from "../../core";
import { v4 as uuidv4 } from "uuid";
import ComponentGrayLine from "../molecules/ComponentGrayLine";
import IconLight from "../../assets/images/icon/icon_light_navy.svg";
import { ComponentButtonRadiFillMain } from "../atoms";
import HtmlContentComponent from "../atoms/HtmlContentComponent";
import ComponentProgress from "../atoms/ComponentProgress";
import { useParams } from "react-router-dom";
import { ModalConfirmView } from "../modal";
import html2canvas from "html2canvas";
// import {
//   clearHttpSttToken,
//   setHttpSttToken,
// } from "../../core/lib/axios/httpStt";

const ButtonWrapper = styled.div`
  line-height: 0;
`;

interface StudyAddFileData {
  courseId: ID;
  lessonId: ID;
  pageIndex: ID;
  contentsId: ID;
  origFileName: string;
  saveFileName: string;
  filePath: string;
  imgFilePath: string;
  fileCpmId?: string;
  fileCpmUrl?: string;
}

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSendBlobUrl, setIsSendBlobUrl] = useState(false);
  const { lmsInputValue: initialDataFromPhp } = useLmsInputValue();
  const { lessonId, cornerId, pageId } = useParams();
  const { addToast } = useToast();
  const exampleContentsRef = useRef<HTMLDivElement>(null);

  const [recordedAudioState, setRecordedAudioState] =
    useState<RecordedAudioState>("not-recorded");
  const { status, startRecording, stopRecording, mediaBlobUrl, clearBlobUrl } =
    useReactMediaRecorder({
      audio: true,
      video: false,
      askPermissionOnMount: true,
      blobPropertyBag: {
        // type: "audio/wav",
        type: "audio/mp3",
        // type: "audio/ogg", // 재생 됨
        // type: "audio/webm", // 재생 됨
        // type: "audio/mpeg",
      },
    });
  const { globalAudioId, handleAudioReset, handleClickAudioButton } =
    useGlobalAudio();
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
      window.clearTimeout(recordTimer.current);
    }
  }, [globalAudioId, status, stopRecording]);

  // const [sttApiLogin, setSttApiLogin] = useState(true);

  // useEffect(() => {
  //   const getToken = async () => {
  //     try {
  //       const tokenData = await getSttAccessToken();
  //       const token = tokenData?.token;
  //       setHttpSttToken(token);
  //       setSttApiLogin(true);
  //     } catch (error) {
  //       clearHttpSttToken();
  //     }
  //   };
  //   void getToken();
  // }, []);

  const [sendingAudio, setSendingAudio] = useState(false); // sendingAudio

  const studyAdFile = (fileData: StudyAddFileData) => {
    window.parent.postMessage(
      {
        func: "studyAdFile",
        data: fileData,
      },
      "*",
    );
  };

  const handleSendRecording = async () => {
    if (!mediaBlobUrl) return;
    if (
      !lessonId ||
      !cornerId ||
      !pageId ||
      !initialDataFromPhp?.applId
      // !sttApiLogin
    ) {
      // NOTE gth 저작도구 미리보기에선 녹음파일을 저장하지 않도록 함
      addToast("녹음파일을 전송할 수 없는 환경입니다");
      return;
    }
    setSendingAudio(true);
    setRecordedAudioState("recorded");
    setIsSendBlobUrl(true);

    const pageIndex = document.querySelector(
      ".ft-conts-wrap .txt b",
    )?.textContent;
    // convert blob to mp3 file
    const fileName = `${initialDataFromPhp.applId}_${lessonId}_${pageIndex}_${contents.id}.mp3`;
    const audioBlob = await fetch(mediaBlobUrl).then((r) => r.blob());
    const file = new File([audioBlob], fileName, {
      type: "audio/mp3",
      lastModified: Date.now(),
    });

    // test 다운로드 파일
    // const elem = document.createElement("a");
    // const url = URL.createObjectURL(file);
    // console.log("url", url);
    // elem.href = url;
    // elem.download = file.name;
    // document.body.appendChild(elem);
    // elem.click();
    // URL.revokeObjectURL(url);
    // document.body.removeChild(elem);
    // console.log("file", file);
    // test 다운로드 파일 끝

    // if (exampleContentsRef.current) {
    //   const canvas = await html2canvas(exampleContentsRef.current);
    //   console.log("canvas", canvas.toDataURL("image/png"));
    //   // const link = document.createElement("a");
    //   // document.body.appendChild(link);
    //   // link.href = canvas.toDataURL("image/png");
    //   // link.download = "result.png";
    //   // link.click();
    //   // document.body.removeChild(link);
    // }

    const formData = new FormData();
    formData.append("file", file);

    try {
      if (!exampleContentsRef.current) return;
      const canvas = await html2canvas(exampleContentsRef.current, {
        allowTaint: true,
        useCORS: true,
      });
      await nasAddFile(formData);
      studyAdFile({
        courseId: initialDataFromPhp?.courseId,
        lessonId: initialDataFromPhp?.lessonId,
        pageIndex: pageIndex ?? 1,
        contentsId: contents.id,
        origFileName: fileName,
        saveFileName: fileName,
        filePath: `bubblecon/${fileName}`,
        imgFilePath: canvas.toDataURL("image/png"),
      });
      // await saveStt(formData);
      // addToast("녹음파일을 제출하였습니다", "success");
    } catch (error) {
      console.log(error);
      // addToast("녹음파일 전송에 실패하였습니다", "error");
    } finally {
      setSendingAudio(false);
    }
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
          setRecordedTimeState(recordTime.current);
          setRecordedAudioState("recorded");
        } else {
          recordTimer.current = setTimeout(go, 1000);
        }
      }, 1000);
    } else {
      // 녹음 중일 때
      stopRecording();
      setRecordedTimeState(recordTime.current);
      setComponentCompleted(contents.id);
      setRecordedAudioState("recorded");
      window.clearTimeout(recordTimer.current);
      xapiCreated(contents.id);
    }
  }, [
    startRecording,
    status,
    stopRecording,
    handleAudioReset,
    setComponentCompleted,
    contents.id,
    xapiCreated,
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
    handleResetRecordedAudio,
    mediaBlobUrl,
    recordedTimeState,
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
    if (recordedAudioState === "not-recorded") {
      return (
        <RecordPlayButton
          onClickBtn={handleClickRecordedAudioButton}
          recordTime={recordingTimeState}
        />
      );
    } else if (recordedAudioState === "playing") {
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
  ]);

  return (
    <div>
      {contents.data.exampleContents && (
        <ComponentGrayLine
          contents={contents.data.exampleContents}
          exampleContentsRef={exampleContentsRef}
        />
      )}
      <div className="record-btn-wrap">
        <ButtonWrapper>
          <div className="record-btn-flex-wrap">
            {recordedAudioState === "not-recorded"
              ? renderRecordingAudioIcon
              : renderRecordedAudioIcon}
          </div>
        </ButtonWrapper>
      </div>
      {isSendBlobUrl || recordedAudioState === "recorded" ? (
        <div className="btns-wrap">
          <ComponentButtonRadiFillMain
            text="녹음 파일 제출"
            onClickBtn={() => {
              // TODO kjw toast message 띄우기
              // void handleSendRecording();
              setIsModalOpen(true);
            }}
            isDisabled={isSendBlobUrl}
            sendingAudio={sendingAudio}
          />
        </div>
      ) : (
        <></>
      )}
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
      <ModalConfirmView
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        title="녹음한 파일을 제출하면 재녹음이 불가능합니다.
        현재 녹음한 파일을 제출하시겠습니까?"
        description="다시 녹음을 하시려면 [제출 취소] 버튼을 누른 후,
        [새로고침] 아이콘을 클릭하세요!"
        leftButtonText="제출 취소"
        rightButtonText="제출하기"
        handleClickLeftButton={() => {
          setIsModalOpen(false);
        }}
        handleClickRightButton={() => {
          void handleSendRecording();
          setIsModalOpen(false);
        }}
        btnColor="#6e79bd"
      />
    </div>
  );
};

export default FinalSpeakingComponent;
