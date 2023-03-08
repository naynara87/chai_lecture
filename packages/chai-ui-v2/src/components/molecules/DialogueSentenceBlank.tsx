import styled from "@emotion/styled";
import React, { useCallback, useMemo } from "react";
import { QuizSentenceContentData } from "../../core";
import { ImgProfileDefaultComponent } from "../atoms";
import { SentenceInOrderChoice } from "../templates/TemplateQuizSentenceBlank";

const BlankSpan = styled.input`
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
  handleClickProfileCallback: (
    dialogueIndex: number,
    audioSrc?: string,
  ) => void;
  speakingDialogueIndex?: number;
  globalAudioState?: "playing" | "pause";
}

const DialogueSentenceBlank = ({
  contents,
  selectedBlankBox,
  userChoices,
  setSelectedBlankBox,
  setSelectedChoiceBox,
  isShowAnswer,
  handleClickProfileCallback,
  speakingDialogueIndex,
  globalAudioState,
}: DialogueSentenceBlankProps) => {
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
    if (userChoices.length < 1) return;
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
                    handleClickProfileCallback &&
                      handleClickProfileCallback(contentIndex, content.src);
                  }}
                >
                  <ImgProfileDefaultComponent />
                </button>
              </div>
            </div>
            <p className="name">{content.name}</p>
          </div>
          <div className="txt-wrap">
            {content.sentences.map((sentence, sentenceIndex) => {
              if (sentence.isChoice) {
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
                    readOnly
                    value={userChoices[blankIndex].text}
                  >
                    {/* {userChoices[blankIndex].text ? (
                      <HtmlContentComponent
                        html={userChoices[blankIndex].text}
                      />
                    ) : (
                      "\u00A0"
                    )} */}
                  </BlankSpan>
                );
              } else {
                return (
                  <span className="chinese" key={sentenceIndex}>
                    {sentence.sentence}
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
    handleClickProfileCallback,
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
