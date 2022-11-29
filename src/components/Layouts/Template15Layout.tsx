import styled from "@emotion/styled";
import React from "react";

const TemplateCommon = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: max-content 84%;
`;

interface Template15LayoutProps {
  children: [JSX.Element, JSX.Element];
}
const Template15Layout = ({ children }: Template15LayoutProps) => {
  return <TemplateCommon>{children}</TemplateCommon>;
};

export default Template15Layout;
