import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { colorPalette } from "../../styles/colorPalette";
import { changePXtoVW } from "../../utils/styles";

interface QuestionBlankStylesProps {
  customCss?: SerializedStyles;
  backgroundColor?: string;
  borderColor?: string;
  width?: string;
  height?: string;
}

const QuestionBlankStyles = styled.span<QuestionBlankStylesProps>`
  position: relative;
  display: inline-block;
  min-width: 5vw;
  margin-right: 8px;
  margin-left: 8px;
  border: 3px dashed ${(props) => props.borderColor};
  border-radius: 0.625vw;
  background-color: ${(props) => props.backgroundColor};
  color: ${colorPalette.deepBlue};
  text-align: center;
  user-select: none;
  transform: translateY(-7%);
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => props.customCss};
`;

interface QuestionBlankProps {
  index?: number;
  width?: string;
  height?: string;
  text: string;
  customCss?: SerializedStyles;
  backgroundColor?: string;
  borderColor?: string;
  onClickBlank?: (text: string) => void;
}

const QuestionBlank = ({
  index,
  width = `${changePXtoVW(60)}`,
  height = `${changePXtoVW(50)}`,
  text,
  customCss,
  backgroundColor = `${colorPalette.backgroundWhite}`,
  borderColor = `${colorPalette.blankBorderColor}`,
  onClickBlank,
}: QuestionBlankProps) => {
  const handleClickBlank = () => {
    if (onClickBlank && text !== undefined) {
      onClickBlank(text);
    }
  };

  return (
    <QuestionBlankStyles
      width={width}
      height={height}
      customCss={customCss}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      onClick={handleClickBlank}
    >
      {text}
    </QuestionBlankStyles>
  );
};

export default QuestionBlank;
