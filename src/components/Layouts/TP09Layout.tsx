import styled from "@emotion/styled";
import React from "react";
import { gridContentLayoutCommonGap, templateContentsAreaHeight } from "../../constants/layout";

const TP09LayoutStyle = styled.div`
  height: ${templateContentsAreaHeight};
  display: grid;
  gap: ${gridContentLayoutCommonGap};
  overflow-y: auto;
  text-align: center;
  &::-webkit-scrollbar {
    display: none;
  }
`;

interface TP09LayoutProps {
  children: [JSX.Element, JSX.Element];
}
const TP09Layout = ({ children }: TP09LayoutProps) => {
  return <TP09LayoutStyle>{children}</TP09LayoutStyle>;
};

export default TP09Layout;
