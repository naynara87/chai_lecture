import styled from "@emotion/styled";
import React from "react";
import { TextContentData } from "../../core";
import HtmlContentComponent from "../atoms/HtmlContentComponent";

const TextWrap = styled.div`
  font-size: 3vmin;
`;
export interface TextContentComponentProps {
  contents: TextContentData;
}

const TextContentComponent = ({ contents }: TextContentComponentProps) => {
  return (
    <TextWrap>
      <HtmlContentComponent html={contents.data.text} />
    </TextWrap>
  );
};

export default TextContentComponent;
