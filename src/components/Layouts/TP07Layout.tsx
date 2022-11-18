import styled from "@emotion/styled";
import React from "react";
import { gridContentLayoutCommonGap, templateContentsAreaHeight } from "../../constants/layout";

const TP07LayoutStyle = styled.div`
  height: ${templateContentsAreaHeight};
  display: grid;
  gap: ${gridContentLayoutCommonGap};
  overflow-y: auto;
`;

interface TP07LayoutProps {
  children: [JSX.Element, JSX.Element, JSX.Element];
}
const TP07Layout = ({ children }: TP07LayoutProps) => {
  return <TP07LayoutStyle>{children}</TP07LayoutStyle>;
};

export default TP07Layout;
