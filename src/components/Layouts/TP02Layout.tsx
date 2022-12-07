import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { templateContentsAreaHeight } from "../../constants/layout";

interface TP02LayoutStyleProps {
  customCss?: SerializedStyles;
}

const TP02LayoutStyle = styled.div<TP02LayoutStyleProps>`
  height: ${templateContentsAreaHeight};
  display: grid;
  text-align: center;

  ${(props) => props.customCss}
`;

interface TP02LayoutProps {
  children: JSX.Element | JSX.Element[];
  customCss?: SerializedStyles;
  id?: string;
  layoutRef?: React.RefObject<HTMLDivElement>;
}
const TP02Layout = ({ children, customCss, id, layoutRef }: TP02LayoutProps) => {
  return (
    <TP02LayoutStyle customCss={customCss} id={id} ref={layoutRef}>
      {children}
    </TP02LayoutStyle>
  );
};

export default TP02Layout;
