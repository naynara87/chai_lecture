import styled from "@emotion/styled";
import React from "react";
import { templateContentsAreaHeight } from "../../constants/layout";

const TP15LayoutStyle = styled.div`
  height: ${templateContentsAreaHeight};
  margin-bottom: 70px;
  padding-top: 80px;

  &:last-child {
    margin-bottom: 0;
  }
`;

interface TP15LayoutProps {
  children: JSX.Element | JSX.Element[];
  LayoutRef: React.RefObject<HTMLDivElement>;
}
const TP15Layout = ({ children, LayoutRef }: TP15LayoutProps) => {
  return <TP15LayoutStyle ref={LayoutRef}>{children}</TP15LayoutStyle>;
};

export default TP15Layout;
