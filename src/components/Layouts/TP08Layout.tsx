import styled from "@emotion/styled";
import React from "react";
import { templateContentsAreaHeight } from "../../constants/layout";

const TP08LayoutStyle = styled.div`
  height: ${templateContentsAreaHeight};
  display: grid;
  text-align: center;
`;

interface TP08LayoutProps {
  children: JSX.Element | JSX.Element[];
}
const TP08Layout = ({ children }: TP08LayoutProps) => {
  return <TP08LayoutStyle>{children}</TP08LayoutStyle>;
};

export default TP08Layout;
