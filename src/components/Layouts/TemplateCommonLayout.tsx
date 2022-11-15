import styled from "@emotion/styled";
import React from "react";

const TemplateCommon = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 16% 84%;
`;

interface TemplateCommonLayoutProps {
  children: [JSX.Element, JSX.Element];
}
const TemplateCommonLayout = ({ children }: TemplateCommonLayoutProps) => {
  return <TemplateCommon>{children}</TemplateCommon>;
};

export default TemplateCommonLayout;
