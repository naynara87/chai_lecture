import styled from "@emotion/styled";
import React from "react";
import { templateContentsAreaHeight } from "../../constants/layout";

const TP02LayoutStyle = styled.div`
  height: ${templateContentsAreaHeight};
  display: grid;
  overflow-y: auto;
  text-align: center;
`;

interface TP02LayoutProps {
  children: JSX.Element;
}
const TP02Layout = ({ children }: TP02LayoutProps) => {
  return <TP02LayoutStyle>{children}</TP02LayoutStyle>;
};

export default TP02Layout;
