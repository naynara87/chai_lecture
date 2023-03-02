import styled from "@emotion/styled";
import React, { useCallback, useMemo, useState } from "react";
import { SpeakingContentData } from "../../core";
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

  const handleClickStartButton = useCallback(() => {
    setIsShowProgressBar(true);
    setTimeout(() => {
      setIsEndProgressBar(true);
    }, contents.data.speakingTime * 1000);
  }, [contents.data.speakingTime]);

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
          <ComponentProgress progressDuration={contents.data.speakingTime} />
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
  ]);

  return (
    <RepeatSpeak className="repeat-speak-wrapper">{repeatSpeak}</RepeatSpeak>
  );
};

export default SpeakingComponent;
