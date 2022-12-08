import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { templateContentsAreaHeight } from "../../constants/layout";
import { changePXtoVH } from "../../utils/styles";

interface TP02LayoutStyleProps {
  customCss?: SerializedStyles;
}

const TP02LayoutStyle = styled.div<TP02LayoutStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: ${changePXtoVH(50)};

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
