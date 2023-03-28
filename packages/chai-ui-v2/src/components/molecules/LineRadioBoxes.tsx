import React, { useMemo } from "react";
import { ID } from "../../core";
import { QuizChoice } from "../contents/ConversationQuizComponent";

interface LineRadioBoxesProps {
  choices: QuizChoice[];
  contentIndex: number;
  onClickChoice: (contentIndex: number, choice: QuizChoice) => void;
  isShowAnswer: boolean;
  contentId: ID;
}

const LineRadioBoxes = ({
  choices,
  contentIndex,
  onClickChoice,
  isShowAnswer,
  contentId,
}: LineRadioBoxesProps) => {
  const selectBoxes = useMemo(() => {
    // TODO kjw quizDialogueWordBlank관련 데이터 타입 설계되면 로직구성
    return choices.map((choice, choiceIndex) => {
      return (
        <div className="inp-grp" key={choiceIndex}>
          <input
            type="radio"
            name={`${contentId}answer${contentIndex}`}
            id={`${contentId}-answer${contentIndex}-${choiceIndex}`}
            className="inp-chck-line none"
            disabled={isShowAnswer}
          />
          <label
            htmlFor={`${contentId}-answer${contentIndex}-${choiceIndex}`}
            className="label-chck-line"
            onClick={() => {
              if (isShowAnswer) return;
              onClickChoice(contentIndex, choice);
            }}
          >
            <span className="text">{choice.text}</span>
          </label>
        </div>
      );
    });
  }, [choices, onClickChoice, contentIndex, isShowAnswer, contentId]);

  return <div className="quiz-answer-wrap hori-answer-wrap">{selectBoxes}</div>;
};

export default LineRadioBoxes;
