import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { changePXtoVW } from "../../utils/styles";

interface HtmlWrapperProps {
  customCss?: SerializedStyles;
}

const HtmlWrapper = styled.div<HtmlWrapperProps>`
  ${(props) => props.customCss}

  > h1 {
    font-size: ${changePXtoVW(64)};
  }

  > p {
    font-weight: 400;
    font-size: ${changePXtoVW(48)};
  }

  > h2 {
    font-weight: 400;
    font-size: ${changePXtoVW(48)};
  }

  > h4 {
    font-weight: 400;
    font-size: ${changePXtoVW(48)};
  }
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
