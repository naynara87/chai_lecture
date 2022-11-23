import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { colorPalette } from "../../styles/colorPalette";

interface QuestionBlankStylesProps {
  customCss?: SerializedStyles;
  backgroundColor?: string;
  width?: string;
}

const QuestionBlankStyles = styled.span<QuestionBlankStylesProps>`
  position: relative;
  display: inline-block;
  width: 60px;
  min-width: 5vw;
  height: 25px;
  margin-right: 8px;
  margin-left: 8px;
  border: 3px dashed ${colorPalette.blankBorderColor};
  border-radius: 0.625vw;
  background-color: ${(props) => props.backgroundColor};
  color: ${colorPalette.deepBlue};
  text-align: center;
  user-select: none;
  transform: translateY(-7%);
  width: ${(props) => props.width};
  ${(props) => props.customCss}
`;

interface QuestionBlankProps {
  width?: string;
  text: string;
  customCss?: SerializedStyles;
  backgroundColor?: string;
}

const QuestionBlank = ({
  width,
  text,
  customCss,
  backgroundColor = `${colorPalette.backgroundWhite}`,
}: QuestionBlankProps) => {
  return (
    <QuestionBlankStyles width={width} customCss={customCss} backgroundColor={backgroundColor}>
      {text}
    </QuestionBlankStyles>
  );
};

export default QuestionBlank;
