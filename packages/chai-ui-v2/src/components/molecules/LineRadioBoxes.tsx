import React, { useMemo } from "react";
import { QuizChoice } from "../contents/ConversationQuizComponent";

interface LineRadioBoxesProps {
  choices: QuizChoice[];
  contentIndex: number;
  onClickChoice: (contentIndex: number, choice: QuizChoice) => void;
  isShowAnswer: boolean;
}

const LineRadioBoxes = ({
  choices,
  contentIndex,
  onClickChoice,
  isShowAnswer,
}: LineRadioBoxesProps) => {
  const selectBoxes = useMemo(() => {
    // TODO kjw quizDialogueWordBlank관련 데이터 타입 설계되면 로직구성
    return choices.map((choice, choiceIndex) => {
      return (
        <div className="inp-grp" key={choiceIndex}>
          <input
            type="radio"
            name={`answer${contentIndex}`}
            id={`answer${contentIndex}-${choiceIndex}`}
            className="inp-chck-line none"
            disabled={isShowAnswer}
          />
          <label
            htmlFor={`answer${contentIndex}-${choiceIndex}`}
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
  }, [choices, onClickChoice, contentIndex, isShowAnswer]);

  return <div className="quiz-answer-wrap hori-answer-wrap">{selectBoxes}</div>;
};

export default LineRadioBoxes;
