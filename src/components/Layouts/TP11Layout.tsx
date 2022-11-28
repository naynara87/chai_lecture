import styled from "@emotion/styled";
import React from "react";
import { templateContentsAreaHeight } from "../../constants/layout";

const TP11LayoutStyle = styled.div`
  height: ${templateContentsAreaHeight};
  display: grid;
  grid-template-rows: max-content 1fr;
  gap: 4.4vh;
  justify-items: center;
  /* overflow-y: auto; */
`;
interface TP11LayoutProps {
  children: [JSX.Element, JSX.Element];
}
const TP11Layout = ({ children }: TP11LayoutProps) => {
  return <TP11LayoutStyle>{children}</TP11LayoutStyle>;
};

export default TP11Layout;
