import styled from "@emotion/styled";
import React from "react";
import { gridContentLayoutCommonGap, templateContentsAreaHeight } from "../../constants/layout";

const TP24LayoutStyle = styled.div`
  height: ${templateContentsAreaHeight};
  display: grid;
  gap: ${gridContentLayoutCommonGap};
  grid-template-columns: 40% 56%;
  grid-template-rows: 1fr;
  overflow-y: auto;
  align-items: center;
  justify-content: start;
`;

interface TP24LayoutProps {
  children: JSX.Element | JSX.Element[];
}
const TP24Layout = ({ children }: TP24LayoutProps) => {
  return <TP24LayoutStyle>{children}</TP24LayoutStyle>;
};

export default TP24Layout;
