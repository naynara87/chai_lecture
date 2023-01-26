import styled from "@emotion/styled";
import React from "react";
import { footerHeightNormal, headerHeightNormal } from "../../constants/layout";
import { changePXtoVH } from "../../utils/styles";

interface TemplateCommonProps {
  isOverFlowHidden?: boolean;
}

const TemplateCommon = styled.div<TemplateCommonProps>`
  overflow: auto;
  overflow: ${props => props.isOverFlowHidden && "hidden"};
  height: calc(100vh - ${headerHeightNormal} - ${footerHeightNormal});
  padding: ${changePXtoVH(50)};

  &::-webkit-scrollbar {
    display: none;
  }

  > div:last-child {
    align-items: flex-start;
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
