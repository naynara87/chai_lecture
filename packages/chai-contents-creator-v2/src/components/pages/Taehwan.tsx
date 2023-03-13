import styled from "@emotion/styled";
import React from "react";

const PageEdge = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #ededed;
`;

const Page = styled.div`
  margin: 16px;
  background-color: white;
  display: inline-block;
`;

const Taehwan = () => {
  return (
    <PageEdge>
      <Page>콘텐트 컴포넌트 퍼블리싱 테스트용 페이지</Page>
    </PageEdge>
  );
};

export default Taehwan;
