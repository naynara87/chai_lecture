import React from "react";
import { HtmlContent } from "../../types/templateContents";
import HtmlContentComponent from "../molecules/HtmlContentComponent";

interface HtmlContentAdapterProps {
  content: HtmlContent;
}
const HtmlContentAdapter = ({ content }: HtmlContentAdapterProps) => {
  const { data } = content;

  return (
    <>
      {data.map((htmlData, index) => {
        return <HtmlContentComponent key={index} html={htmlData.text} />;
      })}
    </>
  );
};

export default HtmlContentAdapter;
