import React from "react";
import styled from "@emotion/styled";
import { colorPalette } from "../../styles/colorPalette";
import CornerSignPost from "../atoms/CornerSignPost";
import { AppMetaData, Corner2 } from "../../types/appData";
import { CORNER_LIST_URL } from "../../constants/url";
import { headerHeight } from "../../styles/layout";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";
import { Link } from "react-router-dom";

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

// const BtnHeaderClose = css`
//   position: absolute;
//   top: 50%;
//   left: auto;
//   right: ${changePXtoVW(60)};
//   width: ${changePXtoVW(40)};
//   height: ${changePXtoVW(40)};
//   border: none;
//   background-color: transparent;
//   transform: translateY(-50%);
//   transition: all 0.2s;
//   cursor: pointer;
//   background: red;

//   &:hover,
//   &:focus {
//     transform: translateY(-50%) rotate(90deg);
//   }

//   &:disabled,
//   &:disabled:hover,
//   &:disabled:focus {
//     transform: translateY(-50%);
//   }
// `;

const ExitTextCss = styled.span`
  position: absolute;
  top: 50%;
  left: auto;
  right: ${changePXtoVW(60)};
  width: ${changePXtoVW(44)};
  height: ${changePXtoVW(44)};
  transform: translate(-50%, -50%);
  transition: all 0.4s;

  .voice-only {
    overflow: hidden;
    position: absolute;
    width: 1px;
    height: 1px;
    color: transparent;
    font-size: 1px;
  }

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: ${changePXtoVH(6)};
    border-radius: 3px;
    background-color: ${colorPalette.white};
    transform: translateY(-50%) rotate(45deg);
    transition: all 0.4s;
  }

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: ${changePXtoVH(6)};
    border-radius: 3px;
    background-color: ${colorPalette.white};
    transform: translateY(-50%) rotate(-45deg);
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
    <div>
      <HeaderContainer>
        <HeaderTitle>
          {appMetaData?.courseName ? `${appMetaData?.courseName} > ` : ""}
          <LessonTitle>{appMetaData?.lessonName}</LessonTitle>
        </HeaderTitle>
        <Link to={CORNER_LIST_URL ?? ""} onClick={handleExitButton}>
          <ExitTextCss>
            <span className="voice-only">닫기</span>
          </ExitTextCss>
        </Link>

        {/* <ButtonComponent
          text="X"
          linkUrl={CORNER_LIST_URL}
          customBtnCss={exitButtonCss}
          customTextCss={exitTextCss}
          handleClickButton={handleExitButton}
        /> */}
      </HeaderContainer>
      {showCornerLabel && currentCorner ? (
        <CornerSignPost cornerName={currentCorner.title} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
