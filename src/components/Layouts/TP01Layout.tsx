import styled from "@emotion/styled";
import React from "react";
import { templateContentsAreaHeight } from "../../constants/layout";

const TP01LayoutStyle = styled.div`
  display: grid;
  text-align: center;
`;

interface TP01LayoutProps {
  children: [JSX.Element | JSX.Element[], JSX.Element, JSX.Element];
}
const TP01Layout = ({ children }: TP01LayoutProps) => {
  return <TP01LayoutStyle>{children}</TP01LayoutStyle>;
};

export default TP01Layout;
