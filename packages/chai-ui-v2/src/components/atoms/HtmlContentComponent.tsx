import styled from "@emotion/styled";
import React from "react";

export const HtmlDiv = styled.div`
  white-space: pre-wrap;

  div,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
  ul,
  li {
    margin: 0;
    padding: 0;
    border: 0;
    line-height: 1.6;
    box-sizing: border-box;
    word-break: break-all;
  }
`;

interface HtmlContentComponentProps {
  html: string;
}
const HtmlContentComponent = ({ html }: HtmlContentComponentProps) => {
  return <HtmlDiv dangerouslySetInnerHTML={{ __html: html }}></HtmlDiv>;
};

export default HtmlContentComponent;
