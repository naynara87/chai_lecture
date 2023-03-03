import styled from "@emotion/styled";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { SpeakingContentData } from "../../core";
import ComponentButtonFillBlackMini from "../atoms/ComponentButtonFillBlackMini";
import ComponentProgress from "../atoms/ComponentProgress";
import iconCheck from "../../assets/images/icon/icon_check_green.svg";

const RepeatSpeak = styled.div``;

interface SpeakingComponentProps {
  contents: SpeakingContentData;
}

const SpeakingComponent = ({ contents }: SpeakingComponentProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isShowProgressBar, setIsShowProgressBar] = useState(false);
  const [isEndProgressBar, setIsEndProgressBar] = useState(false);
  const [isAudioEnd, setIsAudioEnd] = useState(false);

  useEffect(() => {
    audioRef.current?.addEventListener("ended", () => {
      setIsAudioEnd(true);
      setTimeout(() => {
        setIsEndProgressBar(true);
      }, contents.data.speakingTime * 1000);
    });
  }, [contents.data.speakingTime]);

  const handleClickStartButton = useCallback(() => {
    if (!audioRef.current) return;
    setIsShowProgressBar(true);
    void audioRef.current.play();
  }, []);

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
    <RepeatSpeak className="repeat-speak-wrapper">
      <audio ref={audioRef}>
        <source src={contents.data.src} />
      </audio>
      {repeatSpeak}
    </RepeatSpeak>
  );
};

export default SpeakingComponent;
