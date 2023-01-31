import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { changePXtoVW } from "../../utils/styles";
import iconQuestion from "../../assets/icon/icon_question.svg";

export const questionIconSize = css`
  width: ${changePXtoVW(76)};
  height: ${changePXtoVW(76)};
  min-width: ${changePXtoVW(30)};
  min-height: ${changePXtoVW(30)};
`;

interface QuestionIconProps {
  css?: SerializedStyles;
}
const QuestionIconStyle = styled.div<QuestionIconProps>`
  ${questionIconSize}
  background-image: url("${iconQuestion}");
  background-repeat: no-repeat;
  background-size: cover;
  ${(props) => props.css}
`;

const QuestionIcon = ({ css: cssProp }: QuestionIconProps) => {
  return <QuestionIconStyle css={cssProp} />;
};

export default QuestionIcon;
