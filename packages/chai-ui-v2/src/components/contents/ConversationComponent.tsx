import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  ConversationContentData,
  TemplateType,
  useGlobalAudio,
} from "../../core";
import { HtmlContentComponent } from "../atoms";
import SpeakingComponent from "./SpeakingComponent";
import { v4 as uuidv4 } from "uuid";
import ImgTemp01 from "../../assets/images/img/temp_profile01.png";
import DialogueToggle from "../molecules/DialogueToggle";

export interface ConversationComponentProps {
  contents: ConversationContentData;
  fullAudioId?: string;
  pageType?: TemplateType;
}

const ConversationComponent = ({
  contents,
  fullAudioId,
  pageType,
}: ConversationComponentProps) => {
  const [speakingDialogueIndex, setSpeakingDialogueIndex] = useState(-1);
  const [dialogueAudioUuids, setDialogueAudioUuids] = useState<string[]>([]);
  const [isShowPronunciation, setIsShowPronunciation] = useState(
    pageType === "TemplateConversationToggle" ? false : true,
  );
  const [isShowMeaning, setIsShowMeaning] = useState(
    pageType === "TemplateConversationToggle" ? false : true,
  );

  const {
    globalAudioRef,
    globalAudioState,
    globalAudioId,
    handleAudioReset,
    handleClickAudioButton,
  } = useGlobalAudio();

  useEffect(() => {
    console.log("contents", contents);
    console.log("contents.data[0].isBlank", contents.data[0].isBlank);
  }, [contents]);

  useEffect(() => {
    return () => {
      handleAudioReset();
    };
  }, [handleAudioReset]);

  useEffect(() => {
    contents.data.forEach(() => {
      setDialogueAudioUuids((prev) => [...prev, uuidv4()]);
    });
  }, [contents.data]);

  const audioEnded = useCallback(() => {
    if (globalAudioId.toString().includes("dialogue")) {
      setSpeakingDialogueIndex(-1);
      handleAudioReset();
    }
  }, [handleAudioReset, globalAudioId]);

  useEffect(() => {
    if (fullAudioId && globalAudioId.toString().includes(fullAudioId)) {
      const results = globalAudioId.toString().split("_");
      const [, , dialogueIndex] = results;
      setSpeakingDialogueIndex(parseInt(dialogueIndex, 10));
    } else if (!globalAudioId.toString().includes("dialogue")) {
      setSpeakingDialogueIndex(-1);
    }
  }, [globalAudioId, fullAudioId]);

  useEffect(() => {
    let globalAudioRefValue: HTMLAudioElement | null = null;
    if (globalAudioRef?.current) {
      globalAudioRefValue = globalAudioRef.current;
      globalAudioRefValue.addEventListener("ended", audioEnded);
    }
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
          handleAudioReset();
        } else {
          handleClickAudioButton(
            "dialogue",
            dialogueAudioUuids[dialogueIndex],
            dialogueIndex,
            audioSrc ?? "",
          );
        }
        return;
      }
      handleClickAudioButton(
        "dialogue",
        dialogueAudioUuids[dialogueIndex],
        dialogueIndex,
        audioSrc ?? "",
      );
      setSpeakingDialogueIndex(dialogueIndex);
    },
    [
      handleClickAudioButton,
      speakingDialogueIndex,
      handleAudioReset,
      globalAudioState,
      dialogueAudioUuids,
    ],
  );

  const handleClickOptions = useCallback(
    (optionType: "pronunciation" | "meaning") => {
      if (optionType === "pronunciation") {
        setIsShowPronunciation(!isShowPronunciation);
      } else {
        setIsShowMeaning(!isShowMeaning);
      }
    },
    [isShowPronunciation, isShowMeaning],
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
          {/* key설명 - 음성이 재생될 때 active 가 추가됨(화자표시 애니메이션) */}
          <div className="img-grp">
            <div className="img-wrap">
              {/* key설명 - 누르면 단일 음성이 재생됨 */}
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
                  <img
                    src={content.character.src || ImgTemp01}
                    alt={content.character.name}
                    className="profile"
                  />
                </button>
              </div>
            </div>
            <p className="name">{content.character.name}</p>
          </div>
          <div className="txt-wrap">
            {!content.isBlank && (
              <p className="chinese">
                <HtmlContentComponent html={content.text} />
              </p>
            )}
            {!content.isBlank && isShowPronunciation && (
              <p className="pinyin">
                <HtmlContentComponent html={content.pronunciation} />
              </p>
            )}
            {!content.isBlank && isShowMeaning && (
              <p className="mean">
                <HtmlContentComponent html={content.meaning} />
              </p>
            )}
            {pageType === "TemplateConversationRepeat" &&
              content.speakingTime !== undefined && (
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
    handleClickDialogueCharacter,
    pageType,
  ]);

  return (
    <>
      {pageType === "TemplateConversationToggle" && (
        <DialogueToggle
          handleClickOptions={handleClickOptions}
          contentId={contents.id}
        />
      )}
      <ul className="conversation-wrapper">{mainContents}</ul>
    </>
  );
};

export default ConversationComponent;
