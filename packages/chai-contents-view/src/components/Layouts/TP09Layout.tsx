import styled from "@emotion/styled";
import React from "react";

const TP09LayoutStyle = styled.div`
  display: grid;
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
