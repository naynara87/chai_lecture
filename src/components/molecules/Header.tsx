import React from "react";
import styled from "@emotion/styled";
import { colorPalette } from "../../styles/colorPalette";
import ButtonComponent from "../atoms/ButtonComponent";
import { css } from "@emotion/react";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../../constants/queryKey";
import { getAppData } from "../../data/tempApi";
import { breakPoints } from "../../constants/layout";
import CornerSignPost from "../atoms/CornerSignPost";
import { CORNER_LIST_URL } from "../../constants/url";
import { footerHeight } from "../../styles/layout";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  ${footerHeight}
  padding: 0 32px;
  background-color: ${colorPalette.deepBlue};
  z-index: 2;
  @media all and (max-width: ${breakPoints.tablet}) {
    padding: 0 3.125vw;
  }
`;

const HeaderTitle = styled.h1`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  height: 100%;
  font-size: 12px;
  color: ${colorPalette.white};
  font-weight: 400;
  @media all and (max-width: ${breakPoints.tablet}) {
    font-size: 1.25vw;
  }
`;

const LessonTitle = styled.b`
  margin-left: 4px;
  font-weight: 600;
  font-size: 16px;
  @media all and (max-width: ${breakPoints.tablet}) {
    font-size: 1.5625vw;
  }
`;

const exitButtonCss = css`
  position: absolute;
  top: 50%;
  left: auto;
  right: 32px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  border: none;
  padding: 15px 15px;
  background-color: transparent;
  cursor: pointer;
  @media all and (max-width: ${breakPoints.tablet}) {
    right: 3.125vw;
  }

  &:hover,
  &:focus {
    -webkit-transform: translateY(-50%) rotate(90deg);
    transform: translateY(-50%) rotate(90deg);
  }

  &:disabled,
  &:disabled:hover,
  &:disabled:focus {
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
`;

const exitTextCss = css`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 23px;
  height: 0;
  font-size: 0;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
  @media all and (max-width: ${breakPoints.tablet}) {
    width: 2.2916666667vw;
  }
  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    border-radius: 3px;
    background-color: ${colorPalette.white};
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
  }
  @media all and (max-width: ${breakPoints.tablet}) {
    &:before {
      height: 0.3125vw;
    }
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    border-radius: 3px;
    background-color: ${colorPalette.white};
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
  }
  @media all and (max-width: ${breakPoints.tablet}) {
    &:after {
      height: 0.3125vw;
    }
  }
`;

interface HeaderProps {
  cornerName?: string;
}

const Header = ({ cornerName }: HeaderProps) => {
  const { data: appData } = useQuery([QUERY_KEY.APP_DATA], getAppData);

  const handleExitButton = () => {
    console.log("나가기 버튼");
    window.close();
  };

  return (
    <HeaderContainer>
      <HeaderTitle>
        {appData?.course.title ? `${appData?.course.title} > ` : ""}
        <LessonTitle>{appData?.lesson.title}</LessonTitle>
      </HeaderTitle>
      <ButtonComponent
        text="X"
        linkUrl={CORNER_LIST_URL}
        customBtnCss={exitButtonCss}
        customTextCss={exitTextCss}
        handleClickButton={handleExitButton}
      />
      {cornerName ? <CornerSignPost cornerName={cornerName} /> : <></>}
    </HeaderContainer>
  );
};

export default Header;
