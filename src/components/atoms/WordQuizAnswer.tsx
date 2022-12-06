import styled from "@emotion/styled";
import React from "react";
import { colorPalette } from "../../styles/colorPalette";
import { changePXtoVW } from "../../utils/styles";
import IconCheck from "./svg/IconCheck";

interface WordQuizAnswerStylesProps {
  color?: string;
}

const WordQuizAnswerStyles = styled.div<WordQuizAnswerStylesProps>`
  width: ${changePXtoVW(176)};
  height: ${changePXtoVW(80)};
  font-size: ${changePXtoVW(48)};
  font-weight: 400;
  color: ${(props) => props.color};
  border: 4px solid ${(props) => props.color};
  border-radius: ${changePXtoVW(52)};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
`;

interface IconWrapperProps {
  color?: string;
}

const IconWrapper = styled.div<IconWrapperProps>`
  width: ${changePXtoVW(48)};
  height: ${changePXtoVW(48)};
  background-color: ${(props) => props.color};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

interface WordQuizAnswerProps {
  text: string;
  index: number;
  color?: string;
  onClickAnswer: (index: number) => void;
}

const WordQuizAnswer = ({
  text,
  index,
  onClickAnswer,
  color = `${colorPalette.blankBorderColor}`,
}: WordQuizAnswerProps) => {
  const handleClickAnswer = () => {
    onClickAnswer(index);
  };

  return (
    <WordQuizAnswerStyles onClick={handleClickAnswer} color={color}>
      <IconWrapper color={color}>
        <IconCheck />
      </IconWrapper>
      {text}
    </WordQuizAnswerStyles>
  );
};

export default WordQuizAnswer;
