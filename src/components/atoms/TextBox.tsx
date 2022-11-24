import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { breakPoints } from "../../constants/layout";
import { changePXtoVW } from "../../utils/styles";
import HtmlContentComponent from "../molecules/HtmlContentComponent";

interface TextCardProps {
  customCss?: SerializedStyles;
}

const TextCard = styled.div<TextCardProps>`
  width: ${changePXtoVW(154)};
  height: ${changePXtoVW(106)};
  line-height: 84px;
  margin: 11px;
  padding: ${changePXtoVW(33)} 0;
  border: 1px solid color(gray2);
  border-radius: 11px;
  font-size: ${changePXtoVW(48)};
  -webkit-box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: center;
  align-items: center;

  @media all and (max-width: ${breakPoints.tablet}) {
    line-height: 8.3333333333vw;
    margin: 1.0416666667vw;
    border-radius: 1.0416666667vw;
    /* font-size: 3.125vw; */
  }

  ${(props) => props.customCss}
`;

interface TextBoxProps {
  customBoxCss?: SerializedStyles;
  text: string;
}

const TextBox = ({ customBoxCss, text }: TextBoxProps) => {
  return (
    <TextCard customCss={customBoxCss}>
      <HtmlContentComponent html={text} />
    </TextCard>
  );
};

export default TextBox;
