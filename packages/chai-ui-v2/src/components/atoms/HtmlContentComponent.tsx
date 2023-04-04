import styled from "@emotion/styled";
import React from "react";

export const HtmlDiv = styled.div`
  h1,h2,h3,h4,h5,h6,p,span {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    line-height: 1.6;
  }
`;

interface HtmlContentComponentProps {
  html: string;
}
const HtmlContentComponent = ({ html }: HtmlContentComponentProps) => {
  return <HtmlDiv dangerouslySetInnerHTML={{ __html: html }}></HtmlDiv>;
};

export default HtmlContentComponent;
