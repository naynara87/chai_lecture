import styled from "@emotion/styled";
import React from "react";

const Layout = styled.div`
  padding: 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Main = styled.main`
  background-color: lightgray;
  min-height: 50vh;
  padding: 20px;
`;

const Title = styled.input`
  width: 100%;
  height: 50px;
  font-size: 20px;
  text-align: center;
  padding: 10px;
  margin-bottom: 10px;
`;

const SubTitle = styled.input`
  width: 100%;
  height: 40px;
  font-size: 16px;
  text-align: center;
  padding: 10px;
`;

const ContentCreate = () => {
  return (
    <Layout>
      <Header>
        <div>레이아웃 설정</div>
        <div>컴포넌트 리스트</div>
      </Header>
      <Main>
        <div>
          <Title placeholder="타이틀을 입력해주세요." />
          <SubTitle placeholder="부타이틀을 입력해주세요." />
        </div>
      </Main>
    </Layout>
  );
};

export default ContentCreate;
