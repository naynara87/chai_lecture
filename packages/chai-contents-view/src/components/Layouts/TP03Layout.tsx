import styled from "@emotion/styled";
import { SerializedStyles } from "@mui/styled-engine";
import React from "react";

interface TP03LayoutStyleProps {
  customCss?: SerializedStyles;
}

export const TP03LayoutStyle = styled.div<TP03LayoutStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${(props) => props.customCss}
`;

interface TP03LayoutProps {
  children: JSX.Element | JSX.Element[];
  isReverse?: boolean;
  customCss?: SerializedStyles;
}
const TP03Layout = ({ children, isReverse, customCss }: TP03LayoutProps) => {
  return (
    <TP03LayoutStyle className={isReverse ? "reverse" : ""} customCss={customCss}>
      {children}
    </TP03LayoutStyle>
  );
};

export default TP03Layout;
