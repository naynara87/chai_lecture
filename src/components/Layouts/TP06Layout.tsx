import styled from "@emotion/styled";
import React from "react";
import { templateContentsAreaHeight } from "../../constants/layout";

const TP06LayoutStyle = styled.div`
  height: ${templateContentsAreaHeight};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

interface TP06LayoutProps {
  children: JSX.Element | JSX.Element[];
}
const TP06Layout = ({ children }: TP06LayoutProps) => {
  return <TP06LayoutStyle>{children}</TP06LayoutStyle>;
};

export default TP06Layout;
