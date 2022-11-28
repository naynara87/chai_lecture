import styled from "@emotion/styled";
import React from "react";
import { gridContentLayoutCommonGap, templateContentsAreaHeight } from "../../constants/layout";

const TP03LayoutStyle = styled.div`
  height: ${templateContentsAreaHeight};
  display: grid;
  grid-template-rows: max-content max-content max-content;
  gap: ${gridContentLayoutCommonGap};
  /* overflow-y: auto; */
`;

interface TP03LayoutProps {
  children: JSX.Element | JSX.Element[];
  isReverse?: boolean;
}
const TP03Layout = ({ children, isReverse }: TP03LayoutProps) => {
  return <TP03LayoutStyle className={isReverse ? "reverse" : ""}>{children}</TP03LayoutStyle>;
};

export default TP03Layout;
