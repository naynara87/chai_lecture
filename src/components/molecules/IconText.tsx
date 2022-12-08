import React from "react";
import styled from "@emotion/styled";
import { changePXtoVW } from "../../utils/styles";
import { colorPalette } from "../../styles/colorPalette";
import QuestionIcon from "../atoms/QuestionIcon";
import HtmlContentComponent from "./HtmlContentComponent";
import { css } from "@emotion/react";

const QuestionContainer = styled.div`
  color: ${colorPalette.questionTitle};
  font-weight: 400;
  font-size: ${changePXtoVW(27)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const htmlCss = css`
  margin-left: ${changePXtoVW(24)};
  font-size: ${changePXtoVW(38)};
  line-height: ${changePXtoVW(40)};
`;

interface IconTextProps {
  text: string;
}

const IconText = ({ text }: IconTextProps) => {
  return (
    <QuestionContainer>
      <QuestionIcon />
      <HtmlContentComponent html={text} customCss={htmlCss} />
    </QuestionContainer>
  );
};

export default IconText;
