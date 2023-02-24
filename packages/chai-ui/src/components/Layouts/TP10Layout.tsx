import styled from "@emotion/styled";
import React from "react";

const TP10LayoutStyle = styled.div`
  display: grid;
  text-align: center;
`;

interface TP10LayoutProps {
  children: JSX.Element | JSX.Element[];
}
const TP10Layout = ({ children }: TP10LayoutProps) => {
  return <TP10LayoutStyle>{children}</TP10LayoutStyle>;
};

export default TP10Layout;