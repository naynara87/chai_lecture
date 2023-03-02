import React from "react";
import { TextContentData } from "../../core";
import HtmlContentComponent from "../atoms/HtmlContentComponent";

interface TextContentComponentProps {
  contents: TextContentData;
}

const TextContentComponent = ({ contents }: TextContentComponentProps) => {
  return <HtmlContentComponent html={contents.data.text} />;
};

export default TextContentComponent;
