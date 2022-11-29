import styled from "@emotion/styled";
import React from "react";
import { templateContentsAreaHeight } from "../../constants/layout";
import { changePXtoVW } from "../../utils/styles";

const TP04LayoutStyle = styled.div`
  height: ${templateContentsAreaHeight};
  display: grid;
  padding-top: ${changePXtoVW(100)};
`;

interface TP04LayoutProps {
  children: [JSX.Element[] | undefined, JSX.Element];
}
const TP04Layout = ({ children }: TP04LayoutProps) => {
  return <TP04LayoutStyle>{children}</TP04LayoutStyle>;
};

export default TP04Layout;
