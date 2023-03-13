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
  padding: 20px;
  padding-bottom: 0;
  text-align: center;
`;

const HeaderTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
  line-height: 1.5;
`;

const HeaderSubTitle = styled.p`
  margin-top: 10px;
  font-size: 24px;
  line-height: 1.5;
`;

const Main = styled.main`
  padding: 0 20px 35px;
`;

const MainSection = styled.section`
  margin-top: 35px;
`;

const MainSectionTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.6;
`;

const LayoutContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px 20px;
  margin-top: 10px;
`;

const LayoutItem = styled.li`
  width: calc(25% - 15px);
  cursor: pointer;
  text-align: center;

  > img {
    width: 100%;
  }

  @media all and (max-width: 768px) {
    width: calc(33% - 15px);
  }

  @media all and (max-width: 600px) {
    width: calc(50% - 10px);
  }
`;

const LayoutItemName = styled.div`
  font-size: 15px;
  font-weight: 500;
  line-height: 1.3;
  word-break: keep-all;
`;

const ChooseLayoutWrapper = styled.div`
  overflow: auto;
  max-height: 70vh;
  background-color: ${colorPalette.white};
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
