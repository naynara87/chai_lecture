import styled from "@emotion/styled";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { SpeakingContentData, useGlobalAudio } from "../../core";
import ComponentButtonFillBlackMini from "../atoms/ComponentButtonFillBlackMini";
import ComponentProgress from "../atoms/ComponentProgress";
import iconCheck from "../../images/icon/icon_check_green.svg";

const RepeatSpeak = styled.div``;

interface SpeakingComponentProps {
  contents: SpeakingContentData;
}

const SpeakingComponent = ({ contents }: SpeakingComponentProps) => {
  const [isShowProgressBar, setIsShowProgressBar] = useState(false);
  const [isEndProgressBar, setIsEndProgressBar] = useState(false);
  const [isAudioEnd, setIsAudioEnd] = useState(false);

  const { globalAudioRef, handleClickAudioButton } = useGlobalAudio();

  useEffect(() => {
    if (!globalAudioRef?.current) return;
    globalAudioRef.current?.addEventListener("ended", () => {
      setIsAudioEnd(true);
      setTimeout(() => {
        setIsEndProgressBar(true);
      }, contents.data.speakingTime * 1000);
    });
  }, [contents.data.speakingTime, globalAudioRef]);

  const handleClickStartButton = useCallback(() => {
    setIsShowProgressBar(true);
    handleClickAudioButton("speakingAudio", contents.data.src);
  }, [contents.data.src, handleClickAudioButton]);

  const repeatSpeak = useMemo(() => {
    if (isShowProgressBar && isEndProgressBar) {
      return (
        <div className="text-wrap">
          <span className="text">잘했어요!</span>
          <img src={iconCheck} alt="" className="icon" />
        </div>
      );
    } else if (isShowProgressBar && !isEndProgressBar) {
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
    } else if (!isShowProgressBar && !isEndProgressBar) {
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
  ]);

  return (
    <RepeatSpeak className="repeat-speak-wrapper">{repeatSpeak}</RepeatSpeak>
  );
};

export default SpeakingComponent;
