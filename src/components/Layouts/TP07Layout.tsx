import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { gridContentLayoutCommonGap, templateContentsAreaHeight } from "../../constants/layout";

interface TP07LayoutStyleProps {
  customCss?: SerializedStyles;
}

const TP07LayoutStyle = styled.div<TP07LayoutStyleProps>`
  height: ${templateContentsAreaHeight};
  display: grid;
  gap: ${gridContentLayoutCommonGap};
  overflow-y: auto;

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
