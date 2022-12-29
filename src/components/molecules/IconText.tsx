import React from "react";
import styled from "@emotion/styled";
import { changePXtoVW } from "../../utils/styles";
import { colorPalette } from "../../styles/colorPalette";
import QuestionIcon from "../atoms/QuestionIcon";
import HtmlContentComponent from "./HtmlContentComponent";
import { css } from "@emotion/react";
import { SerializedStyles } from "@mui/styled-engine";

interface QuestionContainerProps {
  customCss?: SerializedStyles;
}

const QuestionContainer = styled.div<QuestionContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: ${changePXtoVW(27)};
  color: ${colorPalette.questionTitle};

  ${(props) => props.customCss}
`;

const htmlCss = css`
  margin-left: ${changePXtoVW(24)};
  font-size: ${changePXtoVW(38)};
  line-height: ${changePXtoVW(40)};
`;

interface IconTextProps {
  text: string;
  customCss?: SerializedStyles;
}

const IconText = ({ text, customCss }: IconTextProps) => {
  return (
    <QuestionContainer customCss={customCss}>
      <QuestionIcon />
      <HtmlContentComponent html={text} customCss={htmlCss} />
    </QuestionContainer>
  );
};

export default IconText;
