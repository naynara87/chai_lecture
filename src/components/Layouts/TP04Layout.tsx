import styled from "@emotion/styled";
import React from "react";

const TP04LayoutStyle = styled.div`
  display: grid;
`;

interface TP04LayoutProps {
  children: JSX.Element | JSX.Element[];
}
const TP04Layout = ({ children }: TP04LayoutProps) => {
  return <TP04LayoutStyle>{children}</TP04LayoutStyle>;
};

export default TP04Layout;
