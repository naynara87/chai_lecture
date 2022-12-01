import React from "react";

import styled from "@emotion/styled";

const Container = styled.div`
  display: grid;
`;

const CommonPageLayout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return <Container>{children}</Container>;
};

export default CommonPageLayout;
