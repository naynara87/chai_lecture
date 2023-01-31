import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { colorPalette } from "../../styles/colorPalette";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";
import HtmlContentComponent from "./HtmlContentComponent";
import iconTipbuble from "../../assets/icon/icon_tipbuble.svg";

interface TipWrapperProps {
  customCss?: SerializedStyles;
}

export const TipWrapper = styled.div<TipWrapperProps>`
  display: inline-block;
  padding-bottom: ${changePXtoVH(16)};
  padding-left: ${changePXtoVW(56)};
  background-position: left top;
  background-size: ${changePXtoVW(56)};
  background-repeat: no-repeat;
  background-image: url("${iconTipbuble}");
  font-size: ${changePXtoVW(30)};
  color: ${colorPalette.descriptionText};
  text-align: left;
  white-space: pre-line;
  ${(props) => props.customCss}
  margin-top: ${changePXtoVH(48)};

  > div {
    line-height: 1.6;
  }
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
