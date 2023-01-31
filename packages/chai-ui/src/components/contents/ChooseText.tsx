import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useEffect, useMemo, useState } from "react";
import { ChooseTextContent } from "../../types/templateContents";
import { sortChoices } from "../../utils/sortChoices";
import { changePXtoVH } from "../../utils/styles";
import QuizAnswer from "../atoms/QuizAnswer";
import Explanation from "../molecules/Explanation";
import TipComponent from "../molecules/TipComponent";

interface QuizAnswerContainerProps {
  isVertical?: boolean;
  customCss?: SerializedStyles;
}

export const QuizAnswerContainer = styled.ul<QuizAnswerContainerProps>`
  display: flex;
  flex-direction: ${(props) => (props.isVertical ? "column" : "row")};
  flex-wrap: wrap;
  ${(props) => props.customCss}
`;

export const customQuizCss = css`
  margin-bottom: ${changePXtoVH(30)};
`;
export interface ChooseTextProps {
  contentData: ChooseTextContent;
  isVertical?: boolean;
}
const ChooseText = ({ contentData, isVertical }: ChooseTextProps) => {
  const {
    data: [{ choices, answerIndex, explanation }],
  } = contentData;
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(
    undefined
  );
  const [isCorrect, setIsCorrect] = useState(false);

  const handleClickCloseExplanation = () => {
    setShowExplanation(false);
  };

  const [sortList, setSortList] = useState<string[]>([]);

  useEffect(() => {
    if (contentData.options?.sortAnswer) {
      sortChoices(choices, setSortList);
    } else {
      setSortList(choices);
    }
  }, [choices, contentData.options]);

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
      <QuizAnswerContainer
        isVertical={contentData.options?.isHorizontal || isVertical}
      >
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
            customCss={customQuizCss}
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
