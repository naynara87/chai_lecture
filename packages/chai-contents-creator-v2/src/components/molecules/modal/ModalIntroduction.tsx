import styled from "@emotion/styled";
import { colorPalette, ComponentButtonRadiBorderMain, ComponentButtonRadiFillMain, ModalBase } from "chai-ui-v2";
import React from "react";
import ImageIcon from "../../../assets/images/icon/icon_image_with_bg.svg";
import UrlInputWrapper from "../UrlInputWrapper";

const ModalInner = styled.div`
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 420px;
  width: 90%;
  padding: 20px;
  border-radius: 20px;
  background-color: ${colorPalette.white};
  transform: translate(-50%, -50%);
`;

const ModalIntroductionContainer = styled.div`
  .flex-start-wrap {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .url-wrapper {
    width: 70%;
  }

  .btns-wrap {
    gap: 8px;
    margin-top: 15px;

    .btn {
      min-width: 1px;
      width: 100%;
      height: 48px;
      font-size: 16px;
    }
  }
`;

const ImageThumb = styled.div`
  position: relative;
  width: 80px;
  height: 80px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TitleWrap = styled.div`
  padding: 0 16px;
  text-align: left;

  .title {
    font-weight: 600;
    font-size: 24px;
  }

  .sub-title {
    margin-top: 6px;
    font-weight: 600;
    color: ${colorPalette.gray700};
  }
`;

const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 220px;
  margin-top: 10px;
  border-radius: 8px;
  background-color: ${colorPalette.gray200};
  font-size: 12px;
`;

export interface ModalIntroductionProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const ModalIntroduction = ({
  isModalOpen,
  setIsModalOpen,
}: ModalIntroductionProps) => {
  const handleClose = () => {
    setIsModalOpen(true);
  };
  return (
    <ModalBase open={isModalOpen} onClose={handleClose}>
      <ModalInner>
        <ModalIntroductionContainer>
          <div className="flex-start-wrap">
            <ImageThumb>
              {/* 이미지를 넣으면 src가 해당 이미지의 src로 변경됨 */}
              <img src={ImageIcon} alt="캐릭터 프로필" />
            </ImageThumb>
            <TitleWrap>
              <h2 className="title">텍스트를 입력해주세요</h2>
              <p className="sub-title">텍스트를 입력해주세요</p>
            </TitleWrap>
          </div>
          <UrlInputWrapper typeText="이미지" />
          <DescriptionWrapper>텍스트를 입력해주세요</DescriptionWrapper>
          <UrlInputWrapper typeText="효과음" />
          <div className="btns-wrap">
            <ComponentButtonRadiBorderMain text="닫기" />
            <ComponentButtonRadiFillMain text="저장" />
          </div>
        </ModalIntroductionContainer>
      </ModalInner>
    </ModalBase>
  );
};

export default ModalIntroduction;
