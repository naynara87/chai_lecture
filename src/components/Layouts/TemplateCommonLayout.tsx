import styled from "@emotion/styled";
import React from "react";
import { footerHeightNormal, headerHeightNormal, titleHeightNormal } from "../../constants/layout";
import { changePXtoVH } from "../../utils/styles";

const TemplateCommon = styled.div`
  height: calc(100vh - ${headerHeightNormal} - ${footerHeightNormal});
`;

interface TemplateCommonLayoutProps {
  children: [JSX.Element, JSX.Element];
}
const TemplateCommonLayout = ({ children }: TemplateCommonLayoutProps) => {
  return <TemplateCommon>{children}</TemplateCommon>;
};

export default TemplateCommonLayout;
