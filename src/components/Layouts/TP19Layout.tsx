import styled from "@emotion/styled";
import React from "react";
import { changePXtoVH } from "../../utils/styles";

const TP19LayoutStyle = styled.div`
  display: grid;
  text-align: center;
  padding-top: ${changePXtoVH(20)};

  &::-webkit-scrollbar {
    display: none;
  }
`;

interface TP19LayoutProps {
  children: JSX.Element | JSX.Element[];
}
const TP19Layout = ({ children }: TP19LayoutProps) => {
  return <TP19LayoutStyle>{children}</TP19LayoutStyle>;
};

export default TP19Layout;
