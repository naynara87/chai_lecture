import React from "react";
interface HtmlContentComponentProps {
  html: string;
}

const HtmlContentComponent = ({ html }: HtmlContentComponentProps) => {
  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
};

export default HtmlContentComponent;
