import styled from "@emotion/styled";
import { SerializedStyles } from "@mui/styled-engine";
import React from "react";

interface TP05LayoutStyleProps {
  customCss?: SerializedStyles;
}

export const TP05LayoutStyle = styled.div<TP05LayoutStyleProps>`
  display: grid;
  text-align: center;

  ${(props) => props.customCss}
`;

interface TP05LayoutProps {
  children: JSX.Element | JSX.Element[];
  customCss?: SerializedStyles;
}
const TP05Layout = ({ children, customCss }: TP05LayoutProps) => {
  return <TP05LayoutStyle customCss={customCss}>{children}</TP05LayoutStyle>;
};

export default TP05Layout;
