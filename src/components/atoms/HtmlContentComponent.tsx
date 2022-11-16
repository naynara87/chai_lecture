import React from "react";
import styled from "@emotion/styled";
import { SerializedStyles } from "@emotion/react";
interface HtmlContentComponentProps {
  html: string;
  customCss?: SerializedStyles;
}

interface ImageComponentProps {
  customCss?: SerializedStyles;
}

const Html = styled.div<ImageComponentProps>`
  ${(props) => props.customCss};
`;

const HtmlContentComponent = ({ html, customCss }: HtmlContentComponentProps) => {
  return <Html dangerouslySetInnerHTML={{ __html: html }} customCss={customCss}></Html>;
};

export default HtmlContentComponent;
