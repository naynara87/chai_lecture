import React from "react";

import styled from "@emotion/styled";

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 7.2vh 82.8vh 10vh;
`;

const CommonPageLayout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return <Container>{children}</Container>;
};

export default CommonPageLayout;
