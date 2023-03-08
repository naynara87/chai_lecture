import React, { useMemo, useState } from "react";
import { MultiChoiceContentData } from "../../core";
import ComponentGrayLine from "../molecules/ComponentGrayLine";

interface MultiChoiceComponentProps {
  contents: MultiChoiceContentData;
}

const MultiChoiceComponent = ({ contents }: MultiChoiceComponentProps) => {
  const [userChoice, setUserChoice] = useState<number | undefined>();

  const choiceBoxes = useMemo(() => {
    return contents.data.choice.map((choice, choiceIndex) => {
      return (
        <div className="inp-grp" key={choiceIndex}>
          <input
            type="radio"
            name="answer"
            id={`answer${choiceIndex}`}
            className="inp-chck-gray none"
            checked={userChoice === choiceIndex}
          />
          <label
            htmlFor={`answer${choiceIndex}`}
            className="label-chck-gray"
            onClick={() => {
              if (userChoice !== undefined) return;
              setUserChoice(choiceIndex);
            }}
          >
            <span className="text">{choice}</span>
          </label>
        </div>
      );
    });
  }, [contents.data.choice, userChoice]);

  const answerCheckColor = useMemo(() => {
    if (userChoice !== undefined) {
      if (userChoice === contents.data.answerIndex) {
        return "answer-right";
      } else {
        return "answer-wrong";
      }
    }
    return "";
  }, [contents.data.answerIndex, userChoice]);

  return (
    <div>
      {contents.data.exampleContents && (
        <ComponentGrayLine contents={contents.data.exampleContents} />
      )}
      <div className={`quiz-answer-wrap hori-answer-wrap ${answerCheckColor}`}>
        {choiceBoxes}
      </div>
    </div>
  );
};

export default MultiChoiceComponent;
