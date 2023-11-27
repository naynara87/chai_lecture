import React from "react";
import HtmlContentComponent from "../atoms/HtmlContentComponent";
import { BorderTextBoxContentData } from "../../core";

export interface BorderTextBoxComponentProps {
  contents: BorderTextBoxContentData;
}

const BorderTextBoxComponent = ({ contents }: BorderTextBoxComponentProps) => {
  return (
    <div className="border-box">
      <HtmlContentComponent html={contents.data.text} />
    </div>
  );
};

export default BorderTextBoxComponent;
