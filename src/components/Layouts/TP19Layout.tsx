import styled from "@emotion/styled";
import React from "react";
import { gridContentLayoutCommonGap, templateContentsAreaHeight } from "../../constants/layout";

const TP19LayoutStyle = styled.div`
  height: ${templateContentsAreaHeight};
  display: grid;
  gap: ${gridContentLayoutCommonGap};
  overflow-y: auto;
  text-align: center;
  &::-webkit-scrollbar {
    display: none;
  }
`;

interface TP19LayoutProps {
  children: JSX.Element | JSX.Element[];
}
const TP19Layout = ({ children }: TP19LayoutProps) => {
  return <TP19LayoutStyle>{children}</TP19LayoutStyle>;
};

export default TP19Layout;
