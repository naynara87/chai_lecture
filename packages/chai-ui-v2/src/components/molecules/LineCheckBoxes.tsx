import React, { useMemo } from "react";
import { QuizSentenceContentData } from "../../core";
import { SentenceInOrderChoice } from "../templates/TemplateQuizSentenceBlank";

interface LineCheckBoxesProps {
  contents: QuizSentenceContentData["data"]["characters"];
  userChoices: SentenceInOrderChoice[];
  selectedChoiceBox?: number;
  selectedBlankBox?: number;
  setSelectedChoiceBox: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;
  setUserChoices: React.Dispatch<React.SetStateAction<SentenceInOrderChoice[]>>;
  isShowAnswer: boolean;
}

const LineCheckBoxes = ({
  contents,
  userChoices,
  selectedChoiceBox,
  selectedBlankBox,
  setSelectedChoiceBox,
  setUserChoices,
  isShowAnswer,
}: LineCheckBoxesProps) => {
  const mainContents = useMemo(() => {
    let sentenceCount = -1;
    return contents.map((content) => {
      return content.sentences.map((sentence) => {
        if (sentence.isChoice) {
          sentenceCount++;
          const sentenceIndex = sentenceCount;
          const isChecked = userChoices.find((userChoice) => {
            return userChoice.text === sentence.sentence;
          });
          return (
            <div className="inp-grp" key={sentenceIndex}>
              <input
                type="checkbox"
                name={`answer${sentenceIndex}`}
                id={`answer${sentenceIndex}`}
                className="inp-chck-line none"
                checked={selectedChoiceBox === sentenceIndex}
                disabled={isChecked !== undefined}
              />
              <label
                htmlFor={`answer${sentenceIndex}`}
                className="label-chck-line"
                onClick={() => {
                  if (
                    isShowAnswer ||
                    selectedBlankBox === undefined ||
                    userChoices[selectedBlankBox].text.length > 0 ||
                    isChecked !== undefined
                  )
                    return;
                  const copyUserChoices = [...userChoices];
                  copyUserChoices[selectedBlankBox] = {
                    text: sentence.sentence,
                    answerIndex: sentence.answerIndex,
                  };
                  setSelectedChoiceBox(sentenceIndex);
                  setUserChoices(copyUserChoices);
                }}
              >
                <span className="text">{sentence.sentence}</span>
              </label>
            </div>
          );
        } else {
          return <></>;
        }
      });
    });
  }, [
    contents,
    selectedChoiceBox,
    userChoices,
    selectedBlankBox,
    setSelectedChoiceBox,
    setUserChoices,
    isShowAnswer,
  ]);

  return <>{mainContents}</>;
};

export default LineCheckBoxes;
