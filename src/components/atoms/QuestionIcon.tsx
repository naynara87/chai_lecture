import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

export const questionIconSize = css`
  width: 4vw;
  height: 4vw;
  min-width: 30px;
  min-height: 30px;
`;

interface QuestionIconProps {
  css?: SerializedStyles;
}
const QuestionIconStyle = styled.div<QuestionIconProps>`
  ${questionIconSize}
  background-image: url("${process.env.REACT_APP_BASE_URL}/images/icon/icon_question.svg");
  background-repeat: no-repeat;
  background-size: cover;
  ${(props) => props.css}
`;

const QuestionIcon = ({ css: cssProp }: QuestionIconProps) => {
  return <QuestionIconStyle css={cssProp} />;
};

export default QuestionIcon;
