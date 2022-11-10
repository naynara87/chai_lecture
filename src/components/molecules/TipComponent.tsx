import styled from "@emotion/styled";
import React from "react";
import { colorPalette } from "../../styles/colorPalette";
import HtmlContentComponent from "../atoms/HtmlContentComponent";

const TipWrapper = styled.div`
  background-position: left top;
  background-size: 40px;
  background-repeat: no-repeat;
  background-image: url("${process.env.PUBLIC_URL}/images/icon/icon_tipbuble.svg");
  display: inline-block;
  margin-top: 2.2222222222vh;
  padding-top: 1.1111111111vh;
  padding-left: 40px;
  line-height: 1.3;
  font-size: 14px;
  text-align: left;
  white-space: pre-line;
  color: ${colorPalette.descriptionText};
`;

interface TipComponentProps {
  html: string;
}
const TipComponent = ({ html }: TipComponentProps) => {
  return (
    <TipWrapper>
      <HtmlContentComponent html={html} />
    </TipWrapper>
  );
};

export default TipComponent;
