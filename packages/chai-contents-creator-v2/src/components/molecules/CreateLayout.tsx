import React from "react";
import styled from "@emotion/styled";
import {
  commonLayouts,
  conversationLayouts,
  quizLayouts,
  rolePlayingLayouts,
} from "../../data/appData";
import { colorPalette, TemplateType } from "chai-ui-v2";

import IconClose from "../../assets/images/icon/icon_x.svg";

const Header = styled.header`
  padding: 20px 72px;
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
  margin-bottom: 35px;
  font-size: 24px;
  line-height: 1.5;
`;

const CloseButton = styled.button`
  top: 24px;
  right: 24px;
  position: absolute;
  background-color: transparent;
`;

const Main = styled.main`
  overflow-y: scroll;
  margin: 0 32px;
  padding: 0 40px 32px;
`;

const MainSection = styled.section`
  &:not(:first-child) {
    margin-top: 32px;
  }
`;

const MainSectionTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.6;
`;

const LayoutContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px 24px;
  margin-top: 10px;
`;

const LayoutItem = styled.li`
  width: calc(20% - 24px);
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
  max-height: 70vh;
  background-color: ${colorPalette.white};
  display: flex;
  flex-direction: column;
`;

interface ChooseLayoutProps {
  onClickLayout: (templateType: TemplateType) => void;
  onClose: () => void;
}
const ChooseLayout = ({ onClickLayout, onClose }: ChooseLayoutProps) => {
  const handleLayoutClick = (templateType: TemplateType) => {
    onClickLayout(templateType);
  };

  return (
    <ChooseLayoutWrapper>
      <Header>
        <HeaderTitle className="CreateLayout__header__title">
          레이아웃 설정
        </HeaderTitle>
        <CloseButton onClick={onClose}>
          <img src={IconClose} alt="닫기" />
        </CloseButton>
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
            {rolePlayingLayouts.map((layout) => {
              return (
                <LayoutItem
                  key={layout.name}
                  onClick={() => {
                    handleLayoutClick(layout.type);
                  }}
                >
                  <img src={layout.image} alt={layout.name} draggable={false} />
                  <LayoutItemName>{layout.name}</LayoutItemName>
                </LayoutItem>
              );
            })}
          </LayoutContainer>
        </MainSection>
      </Main>
    </ChooseLayoutWrapper>
  );
};

export default ChooseLayout;
