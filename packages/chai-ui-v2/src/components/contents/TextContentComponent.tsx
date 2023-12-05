import React from "react";
import { TextContentData } from "../../core";
import HtmlContentComponent from "../atoms/HtmlContentComponent";

export interface TextContentComponentProps {
  contents: TextContentData;
}

const TextContentComponent = ({ contents }: TextContentComponentProps) => {
  return (
    <div className="font-24vmin">
      <HtmlContentComponent html={contents.data.text} />
    </div>
  );
};

export default TextContentComponent;
