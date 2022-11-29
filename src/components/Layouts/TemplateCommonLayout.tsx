import styled from "@emotion/styled";
import React from "react";
import { changePXtoVW } from "../../utils/styles";

const TemplateCommon = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: max-content 84%;
  padding-top: ${changePXtoVW(320)};
`;

interface TemplateCommonLayoutProps {
  children: [JSX.Element, JSX.Element];
}
const TemplateCommonLayout = ({ children }: TemplateCommonLayoutProps) => {
  return <TemplateCommon>{children}</TemplateCommon>;
};

export default TemplateCommonLayout;
