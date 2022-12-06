import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { colorPalette } from "../../styles/colorPalette";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";
import HtmlContentComponent from "./HtmlContentComponent";

interface TipWrapperProps {
  customCss?: SerializedStyles;
}

const TipWrapper = styled.div<TipWrapperProps>`
  background-position: left top;
  background-size: ${changePXtoVW(40)};
  background-repeat: no-repeat;
  background-image: url("${process.env.PUBLIC_URL}/images/icon/icon_tipbuble.svg");
  display: inline-block;
  margin-top: ${changePXtoVH(32)};
  padding-top: ${changePXtoVH(16)};
  padding-bottom: ${changePXtoVH(16)};
  padding-left: ${changePXtoVW(40)};
  line-height: 1.3;
  font-size: ${changePXtoVW(30)};
  text-align: left;
  white-space: pre-line;
  color: ${colorPalette.descriptionText};
  ${(props) => props.customCss}
`;

interface TipComponentProps {
  html: string;
  customCss?: SerializedStyles;
}
const TipComponent = ({ html, customCss }: TipComponentProps) => {
  return (
    <TipWrapper customCss={customCss}>
      <HtmlContentComponent html={html} />
    </TipWrapper>
  );
};

export default TipComponent;
