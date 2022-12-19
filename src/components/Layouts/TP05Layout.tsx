import styled from "@emotion/styled";
import React from "react";

const TP05LayoutStyle = styled.div`
  display: grid;
  text-align: center;
`;

interface TP05LayoutProps {
  children: JSX.Element | JSX.Element[];
}
const TP05Layout = ({ children }: TP05LayoutProps) => {
  return <TP05LayoutStyle>{children}</TP05LayoutStyle>;
};

export default TP05Layout;
