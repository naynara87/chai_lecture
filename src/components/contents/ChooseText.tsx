import styled from "@emotion/styled";
import React, { useMemo, useState } from "react";
import { ChooseTextContent } from "../../types/templateContents";
import QuizAnswer from "../atoms/QuizAnswer";
import Explanation from "../molecules/Explanation";
import TipComponent from "../molecules/TipComponent";

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

  const tipContentData = useMemo(() => {
    return contentData.data?.[0].tip;
  }, [contentData.data]);

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
      {tipContentData && <TipComponent html={tipContentData} />}
      {showExplanation && (
        <Explanation
          explanation={explanation}
          handleClickClose={handleClickCloseExplanation}
          isCorrect={isCorrect}
        />
      )}
    </div>
  );
};

export default ChooseText;
