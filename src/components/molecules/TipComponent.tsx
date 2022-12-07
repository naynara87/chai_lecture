import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { breakPoints } from "../../constants/layout";
import { colorPalette } from "../../styles/colorPalette";
import HtmlContentComponent from "./HtmlContentComponent";

interface TipWrapperProps {
  customCss?: SerializedStyles;
}

const TipWrapper = styled.div<TipWrapperProps>`
  background-position: left top;
  background-size: 40px;
  background-repeat: no-repeat;
  background-image: url("${process.env.REACT_APP_BASE_URL}/images/icon/icon_tipbuble.svg");
  display: inline-block;
  margin-top: 2.2222222222vh;
  padding-top: 1.1111111111vh;
  padding-bottom: 1.1111111111vh;
  padding-left: 40px;
  line-height: 1.3;
  font-size: 14px;
  text-align: left;
  white-space: pre-line;
  color: ${colorPalette.descriptionText};

  @media all and (max-width: ${breakPoints.tablet}) {
    font-size: 1.5625vw;
  }
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
