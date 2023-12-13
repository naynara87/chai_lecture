import React, { useEffect, useMemo, useState } from "react";
import { QuizSentenceContentData } from "../../core";
import { sortChoices } from "../../core/util/sortChoices";
import { HtmlContentComponent } from "../atoms";
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

type sentence = {
  sentence: string;
  isChoice: boolean;
  answerIndex: number;
};

const LineCheckBoxes = ({
  contents,
  userChoices,
  selectedChoiceBox,
  selectedBlankBox,
  setSelectedChoiceBox,
  setUserChoices,
  isShowAnswer,
}: LineCheckBoxesProps) => {
  const [sortSentences, setSortSentences] = useState<sentence[]>([]);

  const sentences = useMemo(() => {
    const newSentence: sentence[] = [];
    contents.forEach((content) => {
      content.sentences.forEach((sentence) => {
        if (sentence.isChoice) {
          newSentence.push(sentence);
        }
      });
    });
    return newSentence;
  }, [contents]);

  useEffect(() => {
    sortChoices(sentences, setSortSentences);
  }, [sentences]);

  const mainContents = useMemo(() => {
    return sortSentences.map((sentence, sentenceIndex) => {
      const isChecked = userChoices.find((userChoice) => {
        return userChoice.text === sentence.sentence;
      });
      return (
        <div className="inp-grp w-100" key={sentenceIndex}>
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
            <span className="text">
              <HtmlContentComponent html={sentence.sentence} />
            </span>
          </label>
        </div>
      );
    });
  }, [
    selectedChoiceBox,
    userChoices,
    selectedBlankBox,
    setSelectedChoiceBox,
    setUserChoices,
    isShowAnswer,
    sortSentences,
  ]);

  return <>{mainContents}</>;
};

export default LineCheckBoxes;
