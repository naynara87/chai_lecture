import styled from "@emotion/styled";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { SpeakingContentData, useGlobalAudio } from "../../core";
import ComponentButtonFillBlackMini from "../atoms/ComponentButtonFillBlackMini";
import ComponentProgress from "../atoms/ComponentProgress";
import iconCheck from "../../assets/images/icon/icon_check_green.svg";
import { v4 as uuidv4 } from "uuid";

const RepeatSpeak = styled.div``;

interface SpeakingComponentProps {
  contents: SpeakingContentData;
}

const SpeakingComponent = ({ contents }: SpeakingComponentProps) => {
  const [isShowProgressBar, setIsShowProgressBar] = useState(false);
  const [isEndProgressBar, setIsEndProgressBar] = useState(false);
  const [isAudioEnd, setIsAudioEnd] = useState(false);

  const {
    globalAudioId,
    globalAudioRef,
    handleClickAudioButton,
    handleAudioReset,
  } = useGlobalAudio();

  const speakingAudioUuid = useRef(uuidv4());

  const audioEnded = useCallback(() => {
    if (globalAudioId === `speaking_${speakingAudioUuid.current}_0`) {
      setIsAudioEnd(true);
      setTimeout(() => {
        setIsEndProgressBar(true);
        handleAudioReset();
      }, contents.data.speakingTime * 1000);
    }
  }, [contents.data.speakingTime, globalAudioId, handleAudioReset]);

  useEffect(() => {
    let globalAudioRefValue: HTMLAudioElement | null = null;
    if (globalAudioRef?.current) {
      globalAudioRefValue = globalAudioRef.current;
      globalAudioRefValue?.addEventListener("ended", audioEnded);
    }
    return () => {
      globalAudioRefValue?.removeEventListener("ended", audioEnded);
    };
  }, [globalAudioRef, audioEnded]);

  const handleClickStartButton = useCallback(() => {
    setIsShowProgressBar(true);
    handleClickAudioButton(
      "speaking",
      speakingAudioUuid.current,
      0,
      contents.data.src,
    );
  }, [contents.data.src, handleClickAudioButton]);

  const repeatSpeak = useMemo(() => {
    if (isAudioEnd && isEndProgressBar && isShowProgressBar) {
      return (
        <div className="text-wrap">
          <span className="text">잘했어요!</span>
          <img src={iconCheck} alt="" className="icon" />
        </div>
      );
    } else if (
      globalAudioId === `speaking_${speakingAudioUuid.current}_0` &&
      isShowProgressBar &&
      !isEndProgressBar
    ) {
      return (
        <>
          <div className="text-wrap">
            <span className="text">잘 듣고 따라 말해보세요!</span>
          </div>
          <ComponentProgress
            progressDuration={contents.data.speakingTime}
            isAudioEnd={isAudioEnd}
          />
        </>
      );
    } else if (
      globalAudioId !== `speaking_${speakingAudioUuid.current}_0` &&
      !isAudioEnd &&
      !isEndProgressBar
    ) {
      return (
        <>
          <div className="text-wrap">
            <span className="text">직접 따라 말해볼까요?</span>
          </div>
          <ComponentButtonFillBlackMini
            text="시작"
            onClick={handleClickStartButton}
          />
        </>
      );
    }
  }, [
    contents.data,
    handleClickStartButton,
    isEndProgressBar,
    isShowProgressBar,
    isAudioEnd,
    globalAudioId,
  ]);

  return (
    <RepeatSpeak className="repeat-speak-wrapper">{repeatSpeak}</RepeatSpeak>
  );
};

export default SpeakingComponent;
