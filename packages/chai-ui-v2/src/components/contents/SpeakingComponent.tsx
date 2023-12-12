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
import effectSoundSEA02 from "../../assets/effectSounds/SEA02.mp3";
import effectSoundSEA01 from "../../assets/effectSounds/SEA01.mp3";
import { v4 as uuidv4 } from "uuid";
import { ImgCharacterComponent } from "../atoms";

export interface SpeakingComponentProps {
  contents: SpeakingContentData;
  handleEndSpeaking?: () => void;
}

const SpeakingComponent = ({
  contents,
  handleEndSpeaking,
}: SpeakingComponentProps) => {
  const [isShowProgressBar, setIsShowProgressBar] = useState(false);
  const [isEndProgressBar, setIsEndProgressBar] = useState(false);
  const [isFirstSpeaked, setIsFirstSpeaked] = useState(false);
  const [isAudioEnd, setIsAudioEnd] = useState(false);
  const speakingTimer = useRef<NodeJS.Timeout>();

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
      speakingTimer.current = setTimeout(() => {
        if (isFirstSpeaked) {
          setIsEndProgressBar(true);
        }
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
      if (!isFirstSpeaked) {
        handleClickAudioButton(
          "speaking",
          speakingAudioUuid.current,
          0,
          contents.data.src,
        );
        setIsFirstSpeaked(true);
        setIsAudioEnd(false);
        return;
      }
      handleEndSpeaking && handleEndSpeaking();
      handleAudioReset();
      return;
    }
  }, [
    contents.data,
    globalAudioId,
    handleAudioReset,
    handleClickAudioButton,
    isFirstSpeaked,
    handleEndSpeaking,
  ]);

  useEffect(() => {
    if (
      globalAudioId !== `speaking_${speakingAudioUuid.current}_0` &&
      globalAudioId !== `speakingEffectStart_${speakingAudioUuid.current}_0` &&
      globalAudioId !== `speakingEffectEnd_${speakingAudioUuid.current}_0` &&
      !isEndProgressBar
    ) {
      setIsShowProgressBar(false);
      setIsAudioEnd(false);
      clearTimeout(speakingTimer.current);
    }
  }, [globalAudioId, isEndProgressBar]);

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

  useEffect(() => {
    return () => {
      clearTimeout(speakingTimer.current);
    };
  }, []);

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
          <ImgCharacterComponent
            characterType="kkungiHappy"
            characterAlt="꿍이기쁨"
          />
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
            <span className="text">잘 듣고 따라 말해 보세요!</span>
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
            <span className="text">직접 따라 말해 볼까요?</span>
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

  return <div className="repeat-speak-wrapper">{repeatSpeak}</div>;
};

export default SpeakingComponent;
