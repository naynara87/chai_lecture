import React from "react";

import styled from "@emotion/styled";
import { footerHeightNormal } from "../../constants/layout";

const Container = styled.div`
  display: grid;
  padding-bottom: ${footerHeightNormal};
`;

const CommonPageLayout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return <Container>{children}</Container>;
};

export default CommonPageLayout;
