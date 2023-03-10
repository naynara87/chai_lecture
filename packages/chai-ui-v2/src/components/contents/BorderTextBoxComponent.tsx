import styled from "@emotion/styled";
import React from "react";
import HtmlContentComponent from "../atoms/HtmlContentComponent";
import { vw, vh, colorPalette } from "../../assets";
import { BorderTextBoxContentData } from "../../core";

const BorderTextBoxWrapper = styled.div`
  border: 1px solid ${colorPalette.gray500};
  width: 100%;
  border-radius: ${vw(20)};
  padding: ${vw(45)} ${vw(60)};
  text-align: left;
`;

export interface BorderTextBoxComponentProps {
  contents: BorderTextBoxContentData;
}

const BorderTextBoxComponent = ({ contents }: BorderTextBoxComponentProps) => {
  return (
    <BorderTextBoxWrapper>
      <HtmlContentComponent html={contents.data.text} />
    </BorderTextBoxWrapper>
  );
};

export default BorderTextBoxComponent;
