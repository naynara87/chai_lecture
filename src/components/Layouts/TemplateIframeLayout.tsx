import React from "react";

import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 10% 94%;
  overflow: visible;
`;

const TemplateIframeLayout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return <Container>{children}</Container>;
};

export default TemplateIframeLayout;
