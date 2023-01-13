import React from "react";
import styled from "@emotion/styled";
import useCreateContent from "../../../hooks/contentCreate/useCreateContent";
import { TemplateType } from "../../../types/appData";
import { layouts } from "../../../data/contentCreate";
import { useNavigate } from "react-router-dom";
import { CREATE_CONTENT_COMPONENTS_URL } from "../../../constants/url";
import "./CreateLayout.scss";

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
`;

const LayoutContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 700px;
`;

const LayoutItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  cursor: pointer;
`;

const CreateLayout = () => {
  const { setContentLayout } = useCreateContent();

  const navigate = useNavigate();

  const handleLayoutClick = (layoutName: TemplateType) => {
    setContentLayout(layoutName);
    console.log("selected layout: ", layoutName);
    navigate(CREATE_CONTENT_COMPONENTS_URL);
  };

  return (
    <div>
      <Header>
        <h1 className="CreateLayout__header__title">레이아웃 설정</h1>
        <h4>페이지 레이아웃을 선택해주세요</h4>
      </Header>
      <Main>
        <LayoutContainer>
          {layouts.map((layout) => (
            <LayoutItem key={layout.name} onClick={() => handleLayoutClick(layout.name)}>
              <h3>{layout.name}</h3>
              <img src={layout.image} alt={layout.name} draggable={false} />
            </LayoutItem>
          ))}
        </LayoutContainer>
      </Main>
    </div>
  );
};

export default CreateLayout;
