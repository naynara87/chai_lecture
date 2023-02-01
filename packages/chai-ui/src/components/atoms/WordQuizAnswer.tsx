import styled from "@emotion/styled";
import React from "react";
import { colorPalette } from "../../styles/colorPalette";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";
import { HtmlContentComponent } from "../molecules";
import IconCheck from "./svg/IconCheck";

interface WordQuizAnswerStylesProps {
  color?: string;
}

export const WordQuizAnswerStyles = styled.div<WordQuizAnswerStylesProps>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 4px solid ${(props) => props.color};
  border-radius: ${changePXtoVW(52)};
  padding: ${changePXtoVH(3)} ${changePXtoVW(20)};
  font-weight: 400;
  font-size: ${changePXtoVW(48)};
  color: ${(props) => props.color};
  cursor: pointer;
`;

interface IconWrapperProps {
  color?: string;
}

export const WordQuizAnswerIconWrapper = styled.div<IconWrapperProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${changePXtoVW(48)};
  height: ${changePXtoVW(48)};
  margin-right: 5px;
  background-color: ${(props) => props.color};
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
      <WordQuizAnswerIconWrapper color={color}>
        <IconCheck />
      </WordQuizAnswerIconWrapper>
      <HtmlContentComponent html={text} />
    </WordQuizAnswerStyles>
  );
};

export default WordQuizAnswer;
