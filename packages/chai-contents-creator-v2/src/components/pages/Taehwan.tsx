import styled from "@emotion/styled";
import React from "react";
import TextCreator from "../contents/TextCreator";

const PageEdge = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ededed;
`;

const Page = styled.div`
  margin: 16px;
  background-color: white;
`;

const Taehwan = () => {
  return (
    <PageEdge>
      <Page>
        <TextCreator />
      </Page>
    </PageEdge>
  );
};

export default Taehwan;
