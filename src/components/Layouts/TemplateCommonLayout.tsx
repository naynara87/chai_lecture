import styled from "@emotion/styled";
import React from "react";
import { footerHeightNormal } from "../../constants/layout";

const TemplateCommon = styled.div`
  height: 100%;
  padding-top: ${footerHeightNormal};
  display: grid;
  grid-template-rows: max-content 84%;
`;

interface TemplateCommonLayoutProps {
  children: [JSX.Element, JSX.Element];
}
const TemplateCommonLayout = ({ children }: TemplateCommonLayoutProps) => {
  return <TemplateCommon>{children}</TemplateCommon>;
};

export default TemplateCommonLayout;
