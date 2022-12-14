import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { colorPalette } from "../../styles/colorPalette";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";
import HtmlContentComponent from "../molecules/HtmlContentComponent";

interface TextCardProps {
  customCss?: SerializedStyles;
}

const TextCard = styled.div<TextCardProps>`
  min-width: ${changePXtoVW(288)};
  width: 100%;
  line-height: ${changePXtoVH(84)};
  margin: ${changePXtoVH(11)} ${changePXtoVW(11)};
  padding: ${changePXtoVW(33)} ${changePXtoVW(33)};
  border: 1px solid ${colorPalette.textBoxBorder};
  border-radius: ${changePXtoVW(11)};
  font-size: ${changePXtoVW(48)};
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: center;
  align-items: center;

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
