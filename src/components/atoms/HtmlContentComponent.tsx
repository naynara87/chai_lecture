import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

interface HtmlWrapperProps {
  css?: SerializedStyles;
}

const HtmlWrapper = styled.div<HtmlWrapperProps>`
  ${(props) => props.css}
`;

interface HtmlContentComponentProps extends HtmlWrapperProps {
  html: string;
}
const HtmlContentComponent = ({ html, css }: HtmlContentComponentProps) => {
  return <HtmlWrapper dangerouslySetInnerHTML={{ __html: html }} css={css}></HtmlWrapper>;
};

export default HtmlContentComponent;
