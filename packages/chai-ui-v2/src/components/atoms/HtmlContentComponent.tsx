import styled from "@emotion/styled";
import React from "react";

export const HtmlDiv = styled.div``;

interface HtmlContentComponentProps {
  html: string;
}
const HtmlContentComponent = ({ html }: HtmlContentComponentProps) => {
  return <HtmlDiv dangerouslySetInnerHTML={{ __html: html }}></HtmlDiv>;
};

export default HtmlContentComponent;
