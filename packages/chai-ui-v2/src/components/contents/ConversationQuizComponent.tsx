import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ConversationQuizContentData, useGlobalAudio } from "../../core";
import {
  ComponentButtonRadiFillMain,
  ImgProfileDefaultComponent,
} from "../atoms";
import { LineRadioBoxes } from "../molecules";
import { v4 as uuidv4 } from "uuid";

interface ConversationQuizComponentProps {
  contents: ConversationQuizContentData;
}

export type QuizChoice = {
  text: string;
  isAnswer: boolean;
};

const ConversationQuizComponent = ({
  contents,
}: ConversationQuizComponentProps) => {
  const [userChoices, setUserChoices] = useState<QuizChoice[]>([]);
  const [isShowAnswer, setIsShowAnswer] = useState(false);
  const [speakingDialogueIndex, setSpeakingDialogueIndex] = useState(-1);
  const [dialogueAudioUuids, setDialogueAudioUuids] = useState<string[]>([]);

  useEffect(() => {
    contents.data.forEach(() => {
      setUserChoices((prev) => [...prev, { text: "", isAnswer: false }]);
    });
  }, [contents.data]);

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
    if (globalAudioId.toString().includes("fullAudio")) {
      const results = globalAudioId.toString().split("_");
      const [, , dialogueIndex] = results;
      setSpeakingDialogueIndex(parseInt(dialogueIndex, 10));
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

  const handleClickChoice = useCallback(
    (contentIndex: number, choice: QuizChoice) => {
      const copyChoices = [...userChoices];
      copyChoices[contentIndex] = choice;
      setUserChoices(copyChoices);
    },
    [userChoices],
  );

  const handleClickShowAnswer = useCallback(() => {
    setIsShowAnswer(true);
  }, []);

  const answerCheckColor = useCallback(
    (contentIndex: number) => {
      if (isShowAnswer) {
        if (userChoices[contentIndex].isAnswer) {
          return "answer-right";
        } else {
          return "answer-wrong";
        }
      }
      return "";
    },
    [isShowAnswer, userChoices],
  );

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

  const mainContents = useMemo(() => {
    if (userChoices.length < 1) return;
    return contents.data.map((content, contentIndex) => {
      const texts = content.text
        .replace(/<[^>]*>?/g, "")
        .split(/(\*.*?\*)/)
        .filter((content) => {
          return content.length > 0;
        });
      return (
        <li
          className={`conversation-wrap ${
            speakingDialogueIndex === contentIndex &&
            globalAudioState === "playing"
              ? "active"
              : ""
          } ${answerCheckColor(contentIndex)}`}
          key={contentIndex}
        >
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
                  <ImgProfileDefaultComponent />
                </button>
              </div>
            </div>
            {/* TODO: key설명 - 등록된 캐릭터의 이름을 가져옴. 디폴트 이미지일때는 이름이 없음 (피그마 참고: 2-복습-9) */}
            <p className="name">{content.character.name}</p>
          </div>
          <div className="txt-wrap">
            {/* <p className="chinese">{'今天刮风，下雪，很冷。'}</p> */}
            <p className="chinese">
              {texts.map((text) => {
                return text.indexOf("*") === -1 ? (
                  <>{text}</>
                ) : (
                  <p className="blank-gray">
                    {userChoices[contentIndex].text
                      ? userChoices[contentIndex].text
                      : "\u00A0"}
                  </p>
                );
              })}
            </p>
            <p className="pinyin">{content.pronunciation}</p>
            <p className="mean">{content.meaning}</p>
            <LineRadioBoxes
              choices={content.choice}
              contentIndex={contentIndex}
              onClickChoice={handleClickChoice}
              isShowAnswer={isShowAnswer}
            />
          </div>
        </li>
      );
    });
  }, [
    contents.data,
    globalAudioState,
    speakingDialogueIndex,
    handleClickChoice,
    isShowAnswer,
    answerCheckColor,
    userChoices,
    handleClickDialogueCharacter,
  ]);

  return (
    <div>
      <ul className="conversation-wrapper">{mainContents}</ul>
      <div className="btns-wrap">
        <ComponentButtonRadiFillMain
          text="정답확인"
          onClickBtn={handleClickShowAnswer}
        />
      </div>
    </div>
  );
};

export default ConversationQuizComponent;
