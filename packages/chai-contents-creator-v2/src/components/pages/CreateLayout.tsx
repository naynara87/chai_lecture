import React from "react";
import styled from "@emotion/styled";
// import { useNavigate } from "react-router-dom";
import { PAGE_CREATE_URL } from "../../constants/url";
import {
  commonLayouts,
  conversationLayouts,
  quizLayouts,
} from "../../data/appData";

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const HeaderTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 35px;
`;

const HeaderSubTitle = styled.h4`
  margin-top: 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

const Main = styled.main`
  padding: 40px;
`;

const MainSection = styled.section`
  margin-top: 48px;
  :first-of-type {
    margin-top: 8px;
  }
`;

const MainSectionTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 8px;
`;

const LayoutContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const LayoutItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  :not(:last-child) {
    margin-right: 40px;
  }
`;

const LayoutItemName = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  margin-top: 8px;
`;

const ChooseLayoutPage = () => {
  // const navigate = useNavigate();

  const handleLayoutClick = (layoutType: string) => {
    console.log("selected layout: ", layoutType);
    console.log(`go to ${PAGE_CREATE_URL}`);
    // navigate(PAGE_CREATE_URL);
  };

  return (
    <div>
      <Header>
        <HeaderTitle className="CreateLayout__header__title">
          레이아웃 설정
        </HeaderTitle>
        <HeaderSubTitle>사용할 레이아웃을 선택해주세요.</HeaderSubTitle>
      </Header>
      <Main>
        <MainSection>
          <MainSectionTitle>기본 레이아웃</MainSectionTitle>
          <LayoutContainer>
            {commonLayouts.map((layout) => (
              <LayoutItem
                key={layout.name}
                onClick={() => handleLayoutClick(layout.type)}
              >
                <img src={layout.image} alt={layout.name} draggable={false} />
                <LayoutItemName>{layout.name}</LayoutItemName>
              </LayoutItem>
            ))}
          </LayoutContainer>
        </MainSection>
        <MainSection>
          <MainSectionTitle>회화 레이아웃</MainSectionTitle>
          <LayoutContainer>
            {conversationLayouts.map((layout) => (
              <LayoutItem
                key={layout.name}
                onClick={() => handleLayoutClick(layout.type)}
              >
                <img src={layout.image} alt={layout.name} draggable={false} />
                <LayoutItemName>{layout.name}</LayoutItemName>
              </LayoutItem>
            ))}
          </LayoutContainer>
        </MainSection>
        <MainSection>
          <MainSectionTitle>퀴즈 레이아웃</MainSectionTitle>
          <LayoutContainer>
            {quizLayouts.map((layout) => (
              <LayoutItem
                key={layout.name}
                onClick={() => handleLayoutClick(layout.type)}
              >
                <img src={layout.image} alt={layout.name} draggable={false} />
                <LayoutItemName>{layout.name}</LayoutItemName>
              </LayoutItem>
            ))}
          </LayoutContainer>
        </MainSection>
      </Main>
    </div>
  );
};

export default ChooseLayoutPage;
