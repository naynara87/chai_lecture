import React from "react";
import styled from "@emotion/styled";

interface HtmlContentComponentProps {
  text: string;
}

const TitleWrapper = styled.div`
  line-height: 1.5;
  font-weight: 400;
  font-size: 26px;
  color: #666666;
  white-space: pre-line;
  text-align: center;

  @media all and (max-width: 1024px) {
    font-size: 2.5vw;
  }
`;

const HtmlContentComponent = ({ text }: HtmlContentComponentProps) => {
  return <TitleWrapper dangerouslySetInnerHTML={{ __html: text }}></TitleWrapper>;
};

export default HtmlContentComponent;
