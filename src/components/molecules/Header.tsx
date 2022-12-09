import React from "react";
import styled from "@emotion/styled";
import { colorPalette } from "../../styles/colorPalette";
import ButtonComponent from "../atoms/ButtonComponent";
import { css } from "@emotion/react";
import CornerSignPost from "../atoms/CornerSignPost";
import { AppMetaData, Corner2 } from "../../types/appData";
import { CORNER_LIST_URL } from "../../constants/url";
import { headerHeight } from "../../styles/layout";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  ${headerHeight}
  padding: 0 ${changePXtoVW(60)};
  background-color: ${colorPalette.deepBlue};
  z-index: 10;
`;

const HeaderTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  font-size: ${changePXtoVW(24)};
  color: ${colorPalette.white};
  font-weight: 400;
`;

const LessonTitle = styled.b`
  margin-left: ${changePXtoVW(4)};
  font-weight: 600;
  font-size: ${changePXtoVW(30)};
`;

const exitButtonCss = css`
  position: absolute;
  top: 50%;
  left: auto;
  right: ${changePXtoVW(60)};
  transform: translateY(-50%);
  transition: all 0.2s;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: translateY(-50%) rotate(90deg);
  }

  &:disabled,
  &:disabled:hover,
  &:disabled:focus {
    transform: translateY(-50%);
  }
`;

const exitTextCss = css`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${changePXtoVW(44)};
  height: 0;
  font-size: 0;
  transform: translate(-50%, -50%);
  transition: all 0.4s;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: ${changePXtoVH(6)};
    border-radius: 3px;
    background-color: ${colorPalette.white};
    transform: rotate(45deg);
    transition: all 0.4s;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: ${changePXtoVH(6)};
    border-radius: 3px;
    background-color: ${colorPalette.white};
    transform: rotate(-45deg);
    transition: all 0.4s;
  }
`;

interface HeaderProps {
  currentCorner: Corner2 | undefined;
  appMetaData: AppMetaData | undefined;
  showCornerLabel?: boolean;
}

const Header = ({ currentCorner, appMetaData, showCornerLabel = false }: HeaderProps) => {
  const handleExitButton = () => {
    console.log("나가기 버튼");
    window.close();
  };

  return (
    <HeaderContainer>
      <HeaderTitle>
        {appMetaData?.courseName ? `${appMetaData.courseName} > ` : ""}
        <LessonTitle>{appMetaData?.lessonName}</LessonTitle>
      </HeaderTitle>
      <ButtonComponent
        text="X"
        linkUrl={CORNER_LIST_URL}
        customBtnCss={exitButtonCss}
        customTextCss={exitTextCss}
        handleClickButton={handleExitButton}
      />
      {showCornerLabel && currentCorner ? (
        <CornerSignPost cornerName={currentCorner.title} />
      ) : (
        <></>
      )}
    </HeaderContainer>
  );
};

export default Header;
