import styled from "@emotion/styled";
import { SerializedStyles } from "@mui/styled-engine";
import React from "react";

interface TP04LayoutStyleProps {
  customCss?: SerializedStyles;
}

export const TP04LayoutStyle = styled.div<TP04LayoutStyleProps>`
  display: grid;

  ${(props) => props.customCss}
`;

interface TP04LayoutProps {
  children: JSX.Element | JSX.Element[];
  customCss?: SerializedStyles;
}
const TP04Layout = ({ children, customCss }: TP04LayoutProps) => {
  return <TP04LayoutStyle customCss={customCss}>{children}</TP04LayoutStyle>;
};

export default TP04Layout;
