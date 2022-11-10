import styled from "@emotion/styled";
import React from "react";

const TP03LayoutStyle = styled.div`
  display: grid;
  grid-template-rows: 20% 78%;
  gap: 2%;
`;

interface TP03LayoutProps {
  children: [JSX.Element, JSX.Element];
}
const TP03Layout = ({ children }: TP03LayoutProps) => {
  return <TP03LayoutStyle>{children}</TP03LayoutStyle>;
};

export default TP03Layout;
