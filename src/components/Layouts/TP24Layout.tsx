import styled from "@emotion/styled";
import React from "react";
import { templateContentsAreaHeight } from "../../constants/layout";

const TP24LayoutStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface TP24LayoutProps {
  children: JSX.Element | JSX.Element[];
}
const TP24Layout = ({ children }: TP24LayoutProps) => {
  return <TP24LayoutStyle>{children}</TP24LayoutStyle>;
};

export default TP24Layout;
