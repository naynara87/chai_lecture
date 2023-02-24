import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

interface TP07LayoutStyleProps {
  customCss?: SerializedStyles;
}

const TP07LayoutStyle = styled.div<TP07LayoutStyleProps>`
  ${(props) => props.customCss}
`;

interface TP07LayoutProps {
  children: [JSX.Element, JSX.Element, JSX.Element];
  customCss?: SerializedStyles;
}
const TP07Layout = ({ children, customCss }: TP07LayoutProps) => {
  return <TP07LayoutStyle customCss={customCss}>{children}</TP07LayoutStyle>;
};

export default TP07Layout;