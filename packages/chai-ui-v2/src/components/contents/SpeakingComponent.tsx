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
import effectSoundSEA02 from "../../assets/effectSounds/SEA02.mp3";
import effectSoundSEA01 from "../../assets/effectSounds/SEA01.mp3";
import { v4 as uuidv4 } from "uuid";

const RepeatSpeak = styled.div``;

export interface SpeakingComponentProps {
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
      handleClickAudioButton(
        "speakingEffectStart",
        speakingAudioUuid.current,
        0,
        effectSoundSEA02,
      );
      return;
    }
    if (
      globalAudioId === `speakingEffectStart_${speakingAudioUuid.current}_0`
    ) {
      setIsAudioEnd(true);
      setTimeout(() => {
        setIsEndProgressBar(true);
        handleClickAudioButton(
          "speakingEffectEnd",
          speakingAudioUuid.current,
          0,
          effectSoundSEA01,
        );
      }, contents.data.speakingTime * 1000);
      return;
    }
    if (globalAudioId === `speakingEffectEnd_${speakingAudioUuid.current}_0`) {
      handleAudioReset();
      return;
    }
  }, [
    contents.data.speakingTime,
    globalAudioId,
    handleAudioReset,
    handleClickAudioButton,
  ]);

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
      globalAudioId.toString().includes(`${speakingAudioUuid.current}_0`) &&
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
      !globalAudioId.toString().includes(`${speakingAudioUuid.current}_0`) &&
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
