import React from "react";
import styled from "@emotion/styled";
import {
  commonLayouts,
  conversationLayouts,
  quizLayouts,
  rolePlayingLayouts,
} from "../../data/appData";
import { colorPalette, TemplateType } from "chai-ui-v2";

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  padding: 40px 0px;
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
  gap: 24px;
`;

const LayoutItem = styled.li`
  align-items: center;
  width: calc(25% - 24px);
  cursor: pointer;
  text-align: center;
`;

const LayoutItemName = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  margin-top: 8px;
  word-break: keep-all;
`;

const ChooseLayoutWrapper = styled.div`
  background-color: ${colorPalette.white};
  height: 70vh;
  overflow: auto;
`;

interface ChooseLayoutProps {
  onClickLayout: (templateType: TemplateType) => void;
}
const ChooseLayout = ({ onClickLayout }: ChooseLayoutProps) => {
  const handleLayoutClick = (templateType: TemplateType) => {
    onClickLayout(templateType);
  };

  return (
    <ChooseLayoutWrapper>
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
        <MainSection>
          <MainSectionTitle>롤플레잉 레이아웃</MainSectionTitle>
          <LayoutContainer>
            {rolePlayingLayouts.map((layout) => (
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
    </ChooseLayoutWrapper>
  );
};

export default ChooseLayout;
