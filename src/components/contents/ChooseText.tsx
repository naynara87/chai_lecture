import styled from "@emotion/styled";
import React, { useState } from "react";
import { ChooseTextContent } from "../../types/templateContents";
import QuizAnswer from "../atoms/QuizAnswer";
import Explanation from "../molecules/Explanation";

const QuizAnswerContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

interface ChooseTextProps {
  contentData: ChooseTextContent;
}
const ChooseText = ({ contentData }: ChooseTextProps) => {
  const {
    data: [{ choices, answerIndex, explanation }],
  } = contentData;
  const [showExplanation, setShowExplanation] = useState(false);
  const handleClickCloseExplanation = () => {
    setShowExplanation(false);
  };

  const [isCorrect, setIsCorrect] = useState(false);

  const handleClickAnswer = (selectedIndex: number) => {
    setShowExplanation(true);
    setIsCorrect(selectedIndex === answerIndex);
  };

  return (
    <div>
      <QuizAnswerContainer>
        {choices.map((choice, index) => (
          <QuizAnswer
            key={index}
            answerText={choice}
            isCorrect={answerIndex === index}
            index={index}
            onClickAnswer={handleClickAnswer}
          />
        ))}
      </QuizAnswerContainer>
      {showExplanation && (
        <Explanation
          explanationText={explanation}
          handleClickClose={handleClickCloseExplanation}
          isCorrect={isCorrect}
        />
      )}
    </div>
  );
};

export default ChooseText;
