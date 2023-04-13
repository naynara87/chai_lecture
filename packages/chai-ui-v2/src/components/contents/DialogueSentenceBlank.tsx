import styled from "@emotion/styled";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { QuizSentenceContentData, useGlobalAudio } from "../../core";
import { HtmlContentComponent } from "../atoms";
import { SentenceInOrderChoice } from "../templates/TemplateQuizSentenceBlank";
import { v4 as uuidv4 } from "uuid";
import ImgProfileDefault from "../../assets/images/img/img_profile_default.png";
import { vh } from "../../assets";

const BlankSpan = styled.div`
  min-height: ${vh(58)};
  cursor: pointer;
`;

interface DialogueSentenceBlankProps {
  contents: QuizSentenceContentData["data"]["characters"];
  selectedBlankBox?: number;
  userChoices: SentenceInOrderChoice[];
  setSelectedBlankBox: React.Dispatch<React.SetStateAction<number | undefined>>;
  setSelectedChoiceBox: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;
  isShowAnswer: boolean;
}

const DialogueSentenceBlank = ({
  contents,
  selectedBlankBox,
  userChoices,
  setSelectedBlankBox,
  setSelectedChoiceBox,
  isShowAnswer,
}: DialogueSentenceBlankProps) => {
  const [speakingDialogueIndex, setSpeakingDialogueIndex] = useState(-1);
  const [dialogueAudioUuids, setDialogueAudioUuids] = useState<string[]>([]);

  useEffect(() => {
    contents.forEach(() => {
      setDialogueAudioUuids((prev) => [...prev, uuidv4()]);
    });
  }, [contents]);

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
    if (globalAudioRef?.current) {
      globalAudioRefValue = globalAudioRef.current;
      globalAudioRefValue?.addEventListener("ended", audioEnded);
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
          handleClickAudioStopButton();
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
      handleClickAudioStopButton,
      globalAudioState,
      dialogueAudioUuids,
    ],
  );

  const answerCheckColor = useCallback(
    (contentIndex: number, sentenceIndex: number, blankIndex: number) => {
      if (isShowAnswer) {
        if (
          userChoices[blankIndex].answerIndex ===
          contents[contentIndex].sentences[sentenceIndex].answerIndex
        ) {
          return "answer-right";
        } else {
          return "answer-wrong";
        }
      }
      return "";
    },
    [isShowAnswer, userChoices, contents],
  );

  const mainContents = useMemo(() => {
    let blankCount = -1;
    return contents.map((content, contentIndex) => {
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
          <div className="img-grp">
            <div className="img-wrap">
              {/* TODO: key설명 - 누르면 단일 음성이 재생됨 */}
              <div className="img-round">
                <button
                  className="btn-profile"
                  onClick={() => {
                    handleClickDialogueCharacter(contentIndex, content.src);
                  }}
                >
                  <img
                    src={content.src || ImgProfileDefault}
                    alt=""
                    className="profile"
                  />
                  ;
                </button>
              </div>
            </div>
            <p className="name">{content.name}</p>
          </div>
          <div className="txt-wrap">
            {content.sentences.map((sentence, sentenceIndex) => {
              if (sentence.isChoice) {
                if (userChoices.length < 1) return;

                blankCount++;
                const blankIndex = blankCount;
                return (
                  <BlankSpan
                    className={`blank-gray ${
                      selectedBlankBox === blankIndex ? "active" : ""
                    } ${answerCheckColor(
                      contentIndex,
                      sentenceIndex,
                      blankIndex,
                    )}`}
                    key={sentenceIndex}
                    onClick={() => {
                      if (!!userChoices[blankIndex].text) return;
                      setSelectedBlankBox(blankIndex);
                      setSelectedChoiceBox(undefined);
                    }}
                  >
                    <span className="text">
                      {userChoices[blankIndex].text.replace(/<[^>]*>?/g, "")}
                    </span>
                  </BlankSpan>
                );
              } else {
                return (
                  <span className="chinese" key={sentenceIndex}>
                    <HtmlContentComponent html={sentence.sentence} />
                  </span>
                );
              }
            })}
          </div>
        </li>
      );
    });
  }, [
    contents,
    selectedBlankBox,
    setSelectedBlankBox,
    setSelectedChoiceBox,
    userChoices,
    answerCheckColor,
    handleClickDialogueCharacter,
    globalAudioState,
    speakingDialogueIndex,
  ]);

  return (
    <>
      {/* TODO: key설명 - 음성이 재생될 때 active 가 추가됨(화자표시 애니메이션) */}
      {mainContents}
    </>
  );
};

export default DialogueSentenceBlank;
