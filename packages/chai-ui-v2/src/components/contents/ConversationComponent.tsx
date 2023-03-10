import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ConversationContentData, useGlobalAudio } from "../../core";
import { ImgTemp01Component } from "../atoms";
import SpeakingComponent from "./SpeakingComponent";
import { v4 as uuidv4 } from "uuid";

interface ConversationComponentProps {
  contents: ConversationContentData;
  isShowPronunciation?: boolean;
  isShowMeaning?: boolean;
  isShowRepeat?: boolean;
}

const ConversationComponent = ({
  contents,
  isShowPronunciation = true,
  isShowMeaning = true,
  isShowRepeat,
}: ConversationComponentProps) => {
  const [speakingDialogueIndex, setSpeakingDialogueIndex] = useState(-1);

  const {
    globalAudioRef,
    globalAudioState,
    globalAudioId,
    handleAudioReset,
    handleClickAudioButton,
    handleClickAudioStopButton,
  } = useGlobalAudio();

  useEffect(() => {
    return () => {
      handleAudioReset();
    };
  }, [handleAudioReset]);

  const audioEnded = useCallback(() => {
    if (globalAudioId.toString().includes("dialogue")) {
      setSpeakingDialogueIndex(-1);
      handleAudioReset();
    }
  }, [handleAudioReset, globalAudioId]);

  useEffect(() => {
    if (globalAudioId.toString().includes("fullAudio")) {
      const regex = /[^0-9]/g;
      const result = globalAudioId.toString().replace(regex, "");
      setSpeakingDialogueIndex(parseInt(result, 10));
    }
  }, [globalAudioId]);

  useEffect(() => {
    if (
      !globalAudioId.toString().includes("fullAudio") &&
      !globalAudioId.toString().includes("dialogue")
    ) {
      setSpeakingDialogueIndex(-1);
    }
  }, [globalAudioId]);

  useEffect(() => {
    let globalAudioRefValue: HTMLAudioElement | null = null;
    if (globalAudioRef?.current) globalAudioRefValue = globalAudioRef.current;
    globalAudioRef?.current?.addEventListener("ended", audioEnded);
    return () => {
      if (globalAudioRefValue) {
        globalAudioRefValue.removeEventListener("ended", audioEnded);
      }
    };
  }, [globalAudioRef, audioEnded, globalAudioId]);

  const handleClickDialogueCharacter = useCallback(
    (dialogueIndex: number, audioSrc?: string) => {
      if (speakingDialogueIndex === dialogueIndex) {
        if (globalAudioState === "playing") {
          handleClickAudioStopButton();
        } else {
          handleClickAudioButton(`dialogue${dialogueIndex}`, audioSrc ?? "");
        }
        return;
      }
      handleClickAudioButton(`dialogue${dialogueIndex}`, audioSrc ?? "");
      setSpeakingDialogueIndex(dialogueIndex);
    },
    [
      handleClickAudioButton,
      speakingDialogueIndex,
      handleClickAudioStopButton,
      globalAudioState,
    ],
  );

  const mainContents = useMemo(() => {
    return contents.data.map((content, contentIndex) => {
      return (
        <li
          className={`conversation-wrap ${
            speakingDialogueIndex === contentIndex &&
            globalAudioState === "playing"
              ? "active"
              : ""
          } ${content.isBlank ? "blank" : ""}`}
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
                    handleClickDialogueCharacter(
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
            {!content.isBlank && <p className="chinese">{content.text}</p>}
            {!content.isBlank && isShowPronunciation && (
              <p className="pinyin">{content.pronunciation}</p>
            )}
            {!content.isBlank && isShowMeaning && (
              <p className="mean">{content.meaning}</p>
            )}
            {isShowRepeat && content.speakingTime !== undefined && (
              <SpeakingComponent
                contents={{
                  id: uuidv4(),
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
    speakingDialogueIndex,
    globalAudioState,
    isShowPronunciation,
    isShowMeaning,
    isShowRepeat,
    handleClickDialogueCharacter,
  ]);

  return <ul className="conversation-wrapper">{mainContents}</ul>;
};

export default ConversationComponent;
