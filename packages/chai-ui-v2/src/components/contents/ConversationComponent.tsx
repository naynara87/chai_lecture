import React, { useMemo } from "react";
import { ConversationContentData } from "../../core";
import { ImgTemp01Component } from "../atoms";
import SpeakingComponent from "./SpeakingComponent";

interface ConversationComponentProps {
  contents: ConversationContentData;
  handleClickProfileCallback?: (
    profileIndex: number,
    audioSrc?: string,
  ) => void;
  speakingDialogueIndex?: number;
  globalAudioState?: "playing" | "pause";
  isShowPronunciation?: boolean;
  isShowMeaning?: boolean;
}

const ConversationComponent = ({
  contents,
  handleClickProfileCallback,
  speakingDialogueIndex,
  globalAudioState,
  isShowPronunciation,
  isShowMeaning,
}: ConversationComponentProps) => {
  const mainContents = useMemo(() => {
    return contents.data.map((content, contentIndex) => {
      return (
        <li
          className={`conversation-wrap ${
            speakingDialogueIndex === contentIndex &&
            globalAudioState === "playing"
              ? "active"
              : ""
          }`}
          key={contentIndex}
        >
          {/* TODO: key설명 - 음성이 재생될 때 active 가 추가됨(화자표시 애니메이션) */}
          <div className="img-grp">
            <div className="img-wrap">
              {/* TODO: key설명 - 누르면 단일 음성이 재생됨 */}
              <div className="img-round">
                <button
                  className="btn-profile"
                  onClick={() => {
                    handleClickProfileCallback &&
                      handleClickProfileCallback(
                        contentIndex,
                        content.audio?.src,
                      );
                  }}
                >
                  <ImgTemp01Component />
                </button>
              </div>
            </div>
            <p className="name">{content.character.name}</p>
          </div>
          <div className="txt-wrap">
            <p className="chinese">{content.text}</p>
            {isShowPronunciation && (
              <p className="pinyin">{content.pronunciation}</p>
            )}
            {isShowMeaning && <p className="mean">{content.meaning}</p>}
            {content.speakingTime && (
              <SpeakingComponent
                contents={{
                  type: "speaking",
                  data: {
                    src: content.audio?.src ?? "",
                    speakingTime: content.speakingTime,
                  },
                }}
              />
            )}
          </div>
        </li>
      );
    });
  }, [
    contents.data,
    handleClickProfileCallback,
    speakingDialogueIndex,
    globalAudioState,
    isShowPronunciation,
    isShowMeaning,
  ]);

  return <ul className="conversation-wrapper">{mainContents}</ul>;
};

export default ConversationComponent;
