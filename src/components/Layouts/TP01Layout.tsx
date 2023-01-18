import styled from "@emotion/styled";
import { SerializedStyles } from "@emotion/utils";
import React from "react";

interface TP01LayoutStyleProps {
  customCss?: SerializedStyles;
}

export const TP01LayoutStyle = styled.div<TP01LayoutStyleProps>`
  display: grid;
  text-align: center;
  height: 100%;

  ${(props) => props.customCss}
`;

interface TP01LayoutProps {
  children: JSX.Element | JSX.Element[];
  layoutRef?: React.RefObject<HTMLDivElement>;
  id?: string;
  customCss?: SerializedStyles;
}
const TP01Layout = ({ children, layoutRef, id, customCss }: TP01LayoutProps) => {
  return (
    <TP01LayoutStyle ref={layoutRef} id={id} customCss={customCss}>
      {children}
    </TP01LayoutStyle>
  );
};

export default TP01Layout;
