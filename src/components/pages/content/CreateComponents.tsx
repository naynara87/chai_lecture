import React, { useEffect } from "react";
import styled from "@emotion/styled";
import useCreateContent from "../../../hooks/useCreateContent";
import { useNavigate } from "react-router-dom";
import { CREATE_CONTENT_LAYOUT_URL } from "../../../constants/url";

const Layout = styled.div`
  padding: 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const HeaderLeft = styled.div`
  display: flex;
`;

const HeaderRight = styled.div`
  display: flex;
`;

const Main = styled.main``;

const MainTopButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MainContent = styled.div`
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

const LogoImage = styled.img`
  width: 200px;
`;

const CreateComponents = () => {
  const { contentLayout } = useCreateContent();
  const navigate = useNavigate();

  useEffect(() => {
    if (!contentLayout) {
      // TODO: ModalAlert 으로 변경하기
      alert("레이아웃을 먼저 설정해주세요");
      navigate(CREATE_CONTENT_LAYOUT_URL);
    }
  }, [contentLayout, navigate]);

  const handleLayoutClick = () => {
    console.log("레이아웃 설정 버튼 클릭");
    // TODO: ModalConfirm 으로 변경하기
    const isConfirmed = window.confirm("레이아웃을 변경하시겠습니까?");
    if (isConfirmed) {
      navigate(CREATE_CONTENT_LAYOUT_URL);
    }
  };

  return (
    <Layout>
      <Header>
        <HeaderLeft>
          <LogoImage
            src={`${process.env.PUBLIC_URL}images/bubblecon/bubblecon_logo.png`}
            alt="bubblecon_logo"
          />
        </HeaderLeft>
        <HeaderRight>{/* 저장 / 복사 & 대체하기 */}</HeaderRight>
      </Header>
      <Main>
        <MainTopButtons>
          <button type="button" onClick={handleLayoutClick}>
            레이아웃 설정
          </button>
          <div>컴포넌트 리스트</div>
        </MainTopButtons>

        <MainContent>
          <Title placeholder="타이틀을 입력해주세요." />
          <SubTitle placeholder="부타이틀을 입력해주세요." />
          <div>
            TODO: 선택한 템플릿을 표시하고 템플릿의 각 영역에 컴포넌트를 추가할 수 있게 해야 한다
          </div>
          <div>{contentLayout}</div>
        </MainContent>
      </Main>
    </Layout>
  );
};

export default CreateComponents;
