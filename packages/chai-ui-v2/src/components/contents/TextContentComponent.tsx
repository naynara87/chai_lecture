import React from "react";
import { TextContentData } from "../../core";
import HtmlContentComponent from "../atoms/HtmlContentComponent";

export interface TextContentComponentProps {
  contents: TextContentData;
}

const TextContentComponent = ({ contents }: TextContentComponentProps) => {
  return <HtmlContentComponent html={contents.data.text} />;
};

export default TextContentComponent;
