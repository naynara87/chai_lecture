import styled from "@emotion/styled";
import React from "react";
import { templateContentsAreaHeight } from "../../constants/layout";

const TP11LayoutStyle = styled.div`
  display: grid;
  justify-items: center;
`;
interface TP11LayoutProps {
  children: JSX.Element | JSX.Element[];
}
const TP11Layout = ({ children }: TP11LayoutProps) => {
  return <TP11LayoutStyle>{children}</TP11LayoutStyle>;
};

export default TP11Layout;
