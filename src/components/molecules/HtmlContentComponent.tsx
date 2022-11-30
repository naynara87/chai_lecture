import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

interface HtmlWrapperProps {
  customCss?: SerializedStyles;
}

const HtmlWrapper = styled.div<HtmlWrapperProps>`
  ${(props) => props.customCss}
`;

interface HtmlContentComponentProps extends HtmlWrapperProps {
  html: string;
}
const HtmlContentComponent = ({ html, customCss }: HtmlContentComponentProps) => {
  return (
    <HtmlWrapper dangerouslySetInnerHTML={{ __html: html }} customCss={customCss}></HtmlWrapper>
  );
};

export default HtmlContentComponent;
