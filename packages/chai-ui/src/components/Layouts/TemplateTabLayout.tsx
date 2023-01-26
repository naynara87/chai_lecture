import styled from "@emotion/styled";
import React from "react";

const TemplateCommon = styled.div`
  height: 100%;
`;

interface TemplateTabLayoutProps {
  children: [JSX.Element, JSX.Element];
}
const TemplateTabLayout = ({ children }: TemplateTabLayoutProps) => {
  return <TemplateCommon>{children}</TemplateCommon>;
};

export default TemplateTabLayout;
