import styled from "@emotion/styled";
import React from "react";
import { footerHeightNormal, headerHeightNormal } from "../../constants/layout";
import { changePXtoVH } from "../../utils/styles";

const TemplateCommon = styled.div`
  overflow: auto;
  height: calc(100vh - ${headerHeightNormal} - ${footerHeightNormal});
  padding: ${changePXtoVH(50)};

  &::-webkit-scrollbar {
    display: none;
  }
`;

interface TemplateCommonLayoutProps {
  children: [JSX.Element, JSX.Element];
  layoutRef?: React.RefObject<HTMLDivElement>;
}
const TemplateCommonLayout = ({ children, layoutRef }: TemplateCommonLayoutProps) => {
  return <TemplateCommon ref={layoutRef}>{children}</TemplateCommon>;
};

export default TemplateCommonLayout;
