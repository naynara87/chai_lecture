import React from "react";
import styled from "@emotion/styled";
import { footerHeightNormal, headerHeightNormal } from "../../constants/layout";

const Container = styled.div`
  overflow: auto;
  width: 100vw;
  height: 100vh;
  padding-top: ${headerHeightNormal};
  padding-bottom: ${footerHeightNormal};
`;

const TemplateIframeLayout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return <Container>{children}</Container>;
};

export default TemplateIframeLayout;
