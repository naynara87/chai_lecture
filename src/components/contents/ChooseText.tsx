import styled from "@emotion/styled";
import React, { useEffect, useMemo, useState } from "react";
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
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(undefined);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleClickCloseExplanation = () => {
    setShowExplanation(false);
  };

  const [sortList, setSortList] = useState<string[]>([]);

  useEffect(() => {
    const choicesCopy = [...choices];
    setSortList(choicesCopy.sort(() => Math.random() - 0.5));
  }, [choices]);

  const handleClickAnswer = (index: number) => {
    if (selectedIndex !== undefined) {
      return;
    }
    setShowExplanation(true);
    setSelectedIndex(index);
    setIsCorrect(sortList[index] === choices[answerIndex]);
  };

  const tipContentData = useMemo(() => {
    return contentData.data?.[0].tip;
  }, [contentData.data]);

  return (
    <div>
      <QuizAnswerContainer>
        {sortList.map((choice, index) => (
          <QuizAnswer
            key={index}
            answerText={choice}
            isCorrect={sortList[answerIndex] === choices[index]}
            index={index}
            checked={selectedIndex === index ? true : false}
            onClickAnswer={() => {
              if (selectedIndex !== undefined) {
                return;
              }
              handleClickAnswer(index);
            }}
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
