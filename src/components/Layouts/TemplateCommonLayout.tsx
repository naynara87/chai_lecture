import styled from "@emotion/styled";
import React from "react";

const TemplateCommon = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: max-content 84%;
  padding-top: clamp(150px, 16.666666666666664vw, 320px);
`;

interface TemplateCommonLayoutProps {
  children: [JSX.Element, JSX.Element];
}
const TemplateCommonLayout = ({ children }: TemplateCommonLayoutProps) => {
  return <TemplateCommon>{children}</TemplateCommon>;
};

export default TemplateCommonLayout;
